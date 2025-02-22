/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

declare var performance: any;

import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Tensor,
  torch,
  torchvision,
  MobileModel,
  Module,
} from 'react-native-pytorch-core';

type ComplexTuple = [string, number, [number, number]];

type TestModule = Module & {
  bump: (start: number, step?: number) => Promise<number>;
  bumpSync: (start: number, step?: number) => number;
  get_pi: () => Promise<number>;
  get_piSync: () => number;
  sum_one_d: (arr: number[]) => Promise<number>;
  sum_one_dSync: (arr: number[]) => number;
  sum_two_d: (arr2d: number[][]) => Promise<number>;
  sum_two_dSync: (arr2d: number[]) => number;
  concate_keys: (dictionary: {[index: string]: number}) => Promise<string>;
  concate_keysSync: (dictionary: {[index: string]: number}) => string;
  sum_values: (dictionary: {[index: string]: number}) => Promise<number>;
  sum_valuesSync: (dictionary: {[index: string]: number}) => number;
  sum_tensors: (dictionary: {[index: string]: Tensor}) => Promise<{
    [index: string]: Tensor;
  }>;
  sum_tensorsSync: (dictionary: {[index: string]: Tensor}) => {
    [index: string]: Tensor;
  };
  merge_tuple: (
    tuple1: ComplexTuple,
    tuple2: ComplexTuple,
  ) => Promise<ComplexTuple>;
  merge_tupleSync: (tuple1: ComplexTuple, tuple2: ComplexTuple) => ComplexTuple;
};

const PRINTABLE_LENGTH = 20;

function argmax(array: number[]): number {
  let max = -Number.MAX_VALUE;
  let ret = -1;
  for (let i = 0; i < array.length; ++i) {
    if (array[i] > max) {
      ret = i;
      max = array[i];
    }
  }
  return ret;
}

function printTensor(tensor: Tensor, options: string[] = []) {
  const tensorData = tensor.data();
  const logArray = [];

  if (options.includes('shape')) {
    logArray.push(`Shape: ${tensor.shape}`);
  }
  if (options.includes('stride')) {
    logArray.push(`Stride: ${tensor.stride()}`);
  }
  if (options.includes('dtype')) {
    logArray.push(`Data Type: ${tensor.dtype}`);
  }

  const tensorDataStr =
    tensorData.length > PRINTABLE_LENGTH ? tensor.toString() : `${tensorData}`;
  logArray.push(tensorDataStr);
  const logText = logArray.join(', ');
  console.log(logText);
}

type TestUnitItem = {
  name: string;
  testFunc: () => string | void | Promise<string | void>;
};

const Testunit = ({name, testFunc}: TestUnitItem) => {
  const [outputTextColor, setOutputTextColor] = React.useState('grey');
  const [output, setOutput] = React.useState('N/A');
  return (
    <View style={styles.testunit}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            try {
              let start = performance.now();
              await testFunc();
              let time = performance.now() - start;
              setOutput('PASSED: ' + time.toFixed(2) + ' ms');
              setOutputTextColor('dodgerblue');
            } catch (e) {
              setOutputTextColor('hotpink');
              if (e instanceof Error) {
                setOutput(e.message);
              } else {
                setOutput('unknonw exception thrown');
              }
            }
          }}>
          <Text style={styles.buttonTxt}>{name}</Text>
        </TouchableOpacity>
      </View>
      <View style={{...styles.testOutput}}>
        <Text style={{...styles.testOutputText, color: outputTextColor}}>
          {output}
        </Text>
      </View>
    </View>
  );
};

const testUnitList = [
  {
    name: 'generic tuple input',
    testFunc: async () => {
      console.log('------Test generic tuple input-------');
      let model_url = await MobileModel.download(
        require('../../assets/models/dummy_test_model.ptl'),
      );
      let model = await torch.jit._loadForMobile<TestModule>(model_url);
      let t1: ComplexTuple = ['light', 3.14, [1, 2]];
      let t2: ComplexTuple = ['light', 3.14, [1, 2]];
      let output1 = await model.merge_tuple(t1, t2);
      let output2 = model.merge_tupleSync(t1, t2);
      console.log(output1);
      console.log(output2);

      try {
        await model.merge_tuple(
          ['light', 3.14, [1, 1.5]],
          ['light', 3.14, [1, 2]],
        );
      } catch (e) {
        if (e instanceof Error) {
          console.log('Exception caught correctly: ', e.message);
        } else {
          throw 'unknown exception thrown.';
        }
      }
    },
  },
  {
    name: 'generic dict input',
    testFunc: async () => {
      console.log('------Test generic dict input-------');
      let model_url = await MobileModel.download(
        require('../../assets/models/dummy_test_model.ptl'),
      );
      let model = await torch.jit._loadForMobile<TestModule>(model_url);
      let obj1 = {this: 1, is: 2, object: 3};
      let output1 = await model.concate_keys(obj1);
      let output2 = await model.sum_values(obj1);
      console.log(output1, output2);

      let obj2 = {apple: torch.tensor([1, 2]), pear: torch.tensor([3, 4])};
      let output3 = await model.sum_tensors(obj2);
      for (let key in output3) {
        console.log(key, output3[key].item());
      }
      let output4 = model.sum_tensorsSync(obj2);
      for (let key in output4) {
        console.log(key, output4[key].item());
      }
    },
  },
  {
    name: 'generic list input',
    testFunc: async () => {
      console.log('------Test generic list input-------');
      let model_url = await MobileModel.download(
        require('../../assets/models/dummy_test_model.ptl'),
      );
      let model = await torch.jit._loadForMobile<TestModule>(model_url);
      let outputOneD = await model.sum_one_d([1, 2, 3]);
      let outputTwoD = await model.sum_two_d([
        [1, 2, 3],
        [4, 5],
      ]);
      console.log(outputOneD);
      console.log(outputTwoD);
      try {
        await model.sum_two_d([[1, 2, 3.5]]);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        } else {
          throw 'unknown exception thrown.';
        }
      }
    },
  },
  {
    name: 'generic function',
    testFunc: async () => {
      console.log('------Test generic function-------');
      let model_url = await MobileModel.download(
        require('../../assets/models/dummy_test_model.ptl'),
      );

      let model = await torch.jit._loadForMobile<TestModule>(model_url);
      let lastTime = performance.now();

      for (let i = 0; i < 1000; i++) {
        await model.bump(1);
      }
      let totalTime = performance.now() - lastTime;
      console.log('average time for bump: ', totalTime / 1000);
      console.log(model);

      let pi = await model.get_pi();
      console.log('pi: ', pi);

      let piSync = model.get_piSync();
      console.log('piSync: ', piSync);
    },
  },
  {
    name: 'non-Tensor model input',
    testFunc: async () => {
      console.log('------Test non-Tensor model input-------');
      let model_url = await MobileModel.download(
        require('../../assets/models/dummy_test_model.ptl'),
      );
      let model = await torch.jit._loadForMobile(model_url);
      let inputStrings = ['tensor', 'bool', 'integer', 'double', 'other'];
      for (const inputString of inputStrings) {
        let output = model.forwardSync<
          string | number | boolean | Tensor,
          string
        >(inputString, torch.tensor([1, 2, 3]), true, 3, 4.5);
        console.log(output);
      }
      for (const inputString of inputStrings) {
        let output = await model.forward<
          string | number | boolean | Tensor,
          string
        >(inputString, torch.tensor([1, 2, 3]), true, 3, 4.5);
        console.log(output);
      }
    },
  },
  {
    name: 'empty model input',
    testFunc: async () => {
      console.log('------Catch error on  empty model input-------');
      let model_url = await MobileModel.download(
        'https://github.com/liuyinglao/TestData/raw/main/input_test_module.ptl',
      );
      let model = await torch.jit._loadForMobile(model_url);
      try {
        await model.forward();
      } catch (e) {
        console.log('verified error can be caught with empty input');
      }
    },
  },
  {
    name: 'jsi setup',
    testFunc: () => {
      console.log('-----Test jsi setup-------');
      console.log(Platform.OS);
      console.log(torch);
      const size = [3, 3, 3];
      let tensor = torch.rand(size, {dtype: torch.float64});
      let printOptions = ['data'];
      printTensor(tensor, printOptions);

      let startTime = performance.now();
      let data = new Float32Array(tensor.data());
      let result = argmax(Array.from(data));
      let delta = performance.now() - startTime;
      console.log('argmax (js)', result);
      console.log('elapsed time (js)', delta, 'ms');

      startTime = performance.now();
      result = tensor.argmax().item();
      delta = performance.now() - startTime;
      console.log('argmax (c++)', result);
      console.log('elapsed time (c++)', delta, 'ms');
      printTensor(tensor, ['shape', 'stride', 'dtype']);
    },
  },
  {
    name: 'torch.empty',
    testFunc: () => {
      console.log('---Test torch.empty---');
      printTensor(torch.empty([1, 2]));
      printTensor(torch.empty([1, 2], {dtype: torch.float64}));
    },
  },
  {
    name: 'torch.eye',
    testFunc: () => {
      console.log('---Test torch.eye---');
      let printOptions = ['data'];
      printOptions = ['shape', 'stride', 'data'];
      printTensor(torch.eye(0), printOptions);
      printTensor(torch.eye(3), printOptions);
      printTensor(torch.eye(0, 3), printOptions);
      printTensor(torch.eye(3, 0), printOptions);
      printTensor(torch.eye(3, 3, {dtype: 'int32'}), printOptions);
    },
  },
  {
    name: 'torch.arrange',
    testFunc: () => {
      console.log('---Test torch.arange---');
      let printOptions = ['data'];
      printTensor(torch.arange(5), printOptions);
      printTensor(torch.arange(1, 4), printOptions);
      printTensor(torch.arange(1, 2.5, 0.5), printOptions);
    },
  },
  {
    name: 'torch.randit',
    testFunc: () => {
      console.log('---Test torch.randint---');
      let printOptions = ['shape', 'data'];
      printTensor(torch.randint(3, 5, [3]), printOptions);
      printTensor(torch.randint(10, [2, 2]), printOptions);
      printTensor(torch.randint(3, 10, [2, 2]), printOptions);
      printTensor(torch.randint(3, 10, [2, 2, 2]), printOptions);
    },
  },
  {
    name: 'torch.squeeze/torch.unsqueeze',
    testFunc: () => {
      console.log('---Test squeeze and unsqueeze---');
      let tensor = torch.rand([4]);
      console.log(tensor.shape); // [4]
      let tensor2 = tensor.unsqueeze(0);
      console.log(tensor.shape); // [4]
      console.log(tensor2.shape); //  [4,1]
      let tensor3 = tensor.unsqueeze(1);
      console.log(tensor3.shape); //  [1,4]
      let tensor4 = tensor3.squeeze();
      console.log(tensor4.shape); //  [4]
    },
  },
  {
    name: 'tensor.add',
    testFunc: () => {
      console.log('---Test tensor.add---');
      const addTensor1 = torch.rand([1, 2]);
      printTensor(addTensor1);
      const addTensor2 = addTensor1.add(2);
      printTensor(addTensor2);
      printTensor(addTensor1.add(addTensor2));
    },
  },
  {
    name: 'tensor.sub',
    testFunc: () => {
      console.log('---Test tensor.sub---');
      const subTensor1 = torch.arange(2);
      printTensor(subTensor1);
      const subTensor2 = subTensor1.sub(2);
      printTensor(subTensor2);
      printTensor(subTensor1.sub(subTensor2));
    },
  },
  {
    name: 'tensor.mul',
    testFunc: () => {
      console.log('---Test tensor.mul---');
      let tensor1 = torch.arange(10);
      printTensor(tensor1);
      let tensor2 = tensor1.mul(2);
      printTensor(tensor2);
      printTensor(tensor2.mul(tensor1));
    },
  },
  {
    name: 'tensor.softmax',
    testFunc: () => {
      console.log('---Test tensor.softmax---');
      let softmaxTensor1 = torch.arange(2);
      printTensor(softmaxTensor1);
      printTensor(softmaxTensor1.softmax(0));
    },
  },
  {
    name: 'tensor.tensor',
    testFunc: () => {
      console.log('---Test torch.tensor---');
      let printOptions = ['shape', 'data', 'dtype'];
      let tensor1 = torch.tensor([
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
        [
          [7, 8, 9],
          [10, 11, 12],
        ],
      ]);
      printTensor(tensor1, printOptions);
      let tensor2 = torch.tensor(
        [
          [
            [1.1, 2.1, 3],
            [4, 5, 6],
          ],
          [
            [7, 8, 9],
            [10, 11, 12],
          ],
        ],
        {dtype: torch.int},
      );
      printTensor(tensor2, printOptions);
      printTensor(torch.tensor(1, {dtype: torch.int}), printOptions);
    },
  },
  {
    name: 'tensor.div',
    testFunc: () => {
      console.log('---Test tensor.div---');
      let divTensor = torch.arange(1, 10);
      printTensor(divTensor);
      printTensor(divTensor.div(2));
      printTensor(divTensor.div(2, {roundingMode: 'floor'}));
      printTensor(divTensor.div(divTensor));
      printTensor(divTensor.div(divTensor, {roundingMode: 'floor'}));
    },
  },
  {
    name: 'tensor.abs',
    testFunc: () => {
      console.log('---Test tensor.abs---');
      let absTensor = torch.tensor([
        [-2, -1],
        [0, 1],
      ]);
      printTensor(absTensor);
      let tensorAbsOutput = absTensor.abs();
      printTensor(tensorAbsOutput);
    },
  },
  {
    name: 'torchvision.centercrop',
    testFunc: () => {
      console.log('---Test torchvision.centercrop---');
      console.log(torchvision);
      let tensor6 = torch.rand([1, 3, 5, 5]);
      let centerCrop = torchvision.transforms.centerCrop(3);
      let tensor7 = centerCrop.forward(tensor6);
      console.log('original shape: ', tensor6.shape);
      console.log('transformed shape: ', tensor7.shape);
    },
  },
  {
    name: 'tensor.topk',
    testFunc: () => {
      console.log('---Test tensor.topk---');
      let topkTensor = torch.arange(10, 20);
      console.log(topkTensor.data());
      let [values, indices] = topkTensor.topk(3);
      console.log(values.data());
      console.log(indices.data());
    },
  },
  {
    name: 'torchvision.resize',
    testFunc: () => {
      console.log('---Test torchvision.resize---');
      let tensor8 = torch.rand([1, 3, 100, 100]);
      let resize = torchvision.transforms.resize(20);
      console.log('log resize: ', resize.forward);
      let tensor9 = resize.forward(tensor8);
      console.log('original shape: ', tensor8.shape);
      console.log('transformed shape: ', tensor9.shape);
    },
  },
  {
    name: 'torchvision.normalize',
    testFunc: () => {
      console.log('---Test torchvision.normalize---');
      const tensor10 = torch.rand([1, 3, 5, 5]);
      const normalize = torchvision.transforms.normalize(
        [0.2, 0.2, 0.2],
        [0.5, 0.5, 0.5],
      );
      console.log('log normalize: ', normalize.forward);
      const normalized = normalize(tensor10);
      const normalizeForwarded = normalize.forward(tensor10);
      printTensor(normalized);
      printTensor(normalizeForwarded);
    },
  },
  {
    name: 'torchvision.grayscale',
    testFunc: () => {
      console.log('---Test torchvision.grayscale---');
      const tensor11 = torch.rand([1, 3, 5, 5]);
      const grayscale = torchvision.transforms.grayscale();
      console.log('log grayscale: ', grayscale.forward);
      const grayscaled = grayscale(tensor11);
      printTensor(grayscaled);
    },
  },
  {
    name: 'async function',
    testFunc: async () => {
      console.log('---Test async function that returns HostObject---');
      const asyncResult = await (async () => torch.rand([3]))();
      console.log(asyncResult && asyncResult.data());
    },
  },
];

export default function JSIPlayground() {
  return (
    <ScrollView>
      <View style={styles.testAll}>
        <Testunit
          name={'Test All'}
          testFunc={() => {
            testUnitList.forEach(
              async (item: TestUnitItem) => await item.testFunc(),
            );
          }}
        />
      </View>
      {testUnitList.map((item, index) => {
        return (
          <Testunit name={item.name} testFunc={item.testFunc} key={index} />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  testAll: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'dodgerblue',
  },
  button: {
    padding: 10,
  },
  buttonTxt: {
    color: 'dodgerblue',
  },
  testunit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 2,
  },
  testOutput: {
    borderColor: 'dodgerblue',
    borderRadius: 0,
    flex: 2,
    padding: 10,
    alignContent: 'flex-end',
  },
  testOutputText: {
    textAlign: 'right',
  },
});

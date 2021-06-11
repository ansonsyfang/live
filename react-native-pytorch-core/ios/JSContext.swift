/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Foundation

class JSContext {

    enum JSContextError : Error {
        case invalidParam
    }

    public static var ID_KEY = "ID"

    private static var refs: [String: NativeJSRef] = [:]

    public static func setRef(ref: NativeJSRef) -> String {
        let id = UUID().uuidString
        JSContext.refs[id] = ref
        return id
    }

    public static func getRef(id: String) throws -> NativeJSRef {
        guard let unwrappedNativeJSRef = JSContext.refs[id] else { throw JSContextError.invalidParam }
        return unwrappedNativeJSRef
    }

    public static func get(jsRef: [String:String]) throws -> NativeJSRef {
        guard let id = jsRef[ID_KEY] else { throw JSContextError.invalidParam }
        return try JSContext.getRef(id: id)
    }

    //TODO(T92662670) Implement release in JSContext for iOS

    public static func wrapObject(view: UIView) -> NativeJSRef {
        return NativeJSRef(view: view)
    }

    public static func unwrapObject(jsRef: [String:String]) throws -> UIView {
        guard let id = jsRef[ID_KEY] else { throw JSContextError.invalidParam }
        let ref = try JSContext.getRef(id: id)
        return ref.getObject()
    }

    class NativeJSRef {
        //initialized mId and mJSRef to empty values to allow self to be used to set id in init()
        private var mId: String = ""
        private var mObject: UIView
        private var mJSRef: [String : String] = [:]

        init(view: UIView){
            mObject = view
            mId = JSContext.setRef(ref: self)
            mJSRef[JSContext.ID_KEY] = mId
        }

        public func getJSRef() -> [String:String] {
            return mJSRef
        }

        public func getObject() -> UIView {
            return mObject
        }

        //TODO(T92662670) Implement release in NativeJSRef for iOS
    }
}

"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4641],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return u},mdx:function(){return v},useMDXComponents:function(){return p},withMDXComponents:function(){return c}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){return function(t){var n=p(t.components);return o.createElement(e,a({},t,{components:n}))}},p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(i,".").concat(u)]||c[u]||m[u]||a;return n?o.createElement(h,d(d({ref:t},l),{},{components:n})):o.createElement(h,d({ref:t},l))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},51185:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],d={id:"faq",title:"Frequently Asked Questions"},s=void 0,l={unversionedId:"tutorials/faq",id:"tutorials/faq",title:"Frequently Asked Questions",description:"We are constantly looking for ways to improve PyTorch Live. If you have questions or feedback, please file an issue on GitHub.",source:"@site/docs/tutorials/faq.mdx",sourceDirName:"tutorials",slug:"/tutorials/faq",permalink:"/live/docs/tutorials/faq",editUrl:"https://github.com/pytorch/live/edit/main/website/docs/tutorials/faq.mdx",tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently Asked Questions"},sidebar:"docs",previous:{title:"Connecting to a Server Model",permalink:"/live/docs/tutorials/connecting-to-a-server"}},c=[{value:"General Setup",id:"general-setup",children:[{value:"Q: How to fix <code>Error: error: SDK &quot;iphoneos&quot; cannot be located</code>?",id:"q-how-to-fix-error-error-sdk-iphoneos-cannot-be-located",children:[],level:3}],level:2},{value:"Metro",id:"metro",children:[{value:"Q: How to fix <code>Error: error:0308010C:digital envelope routines::unsupported</code>?",id:"q-how-to-fix-error-error0308010cdigital-envelope-routinesunsupported",children:[],level:3}],level:2},{value:"Android",id:"android",children:[{value:"Q: What to do when the device shows the error <code>unable to load script from assets index.android.bundle</code>?",id:"q-what-to-do-when-the-device-shows-the-error-unable-to-load-script-from-assets-indexandroidbundle",children:[],level:3},{value:"Q: What to do when we encounter an error which says <code>Could not find tools.jar. Please check that &lt;some_path&gt; contains a valid JDK installation.</code> when installing the app?",id:"q-what-to-do-when-we-encounter-an-error-which-says-could-not-find-toolsjar-please-check-that-some_path-contains-a-valid-jdk-installation-when-installing-the-app",children:[],level:3}],level:2},{value:"Mobile Models",id:"mobile-models",children:[{value:"Q: Is it possible to secure a model that will be downloaded into PyTorch Live?",id:"q-is-it-possible-to-secure-a-model-that-will-be-downloaded-into-pytorch-live",children:[],level:3}],level:2}],p={toc:c};function u(e){var t=e.components,d=(0,r.Z)(e,i);return(0,a.mdx)("wrapper",(0,o.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("div",{className:"tutorial-page"},(0,a.mdx)("p",null,"We are constantly looking for ways to improve PyTorch Live. If you have questions or feedback, please ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/issues"},"file an issue on GitHub"),"."),(0,a.mdx)("h2",{id:"general-setup"},"General Setup"),(0,a.mdx)("h3",{id:"q-how-to-fix-error-error-sdk-iphoneos-cannot-be-located"},"Q: How to fix ",(0,a.mdx)("inlineCode",{parentName:"h3"},'Error: error: SDK "iphoneos" cannot be located'),"?"),(0,a.mdx)("p",null,"A: This type of error can result if you don't have Xcode installed locally. If you have installed Xcode, please make sure to open the app and accept the Xcode license.\nIf you have completed this before, please check the Developer Directory path by running ",(0,a.mdx)("inlineCode",{parentName:"p"},"xcode-select -p"),". Please change it to the location where Xcode is installed by running ",(0,a.mdx)("br",null),"\n",(0,a.mdx)("inlineCode",{parentName:"p"},"sudo xcode-select -s /Applications/<Xcode.app>/Contents/Developer"),"."),(0,a.mdx)("h2",{id:"metro"},"Metro"),(0,a.mdx)("h3",{id:"q-how-to-fix-error-error0308010cdigital-envelope-routinesunsupported"},"Q: How to fix ",(0,a.mdx)("inlineCode",{parentName:"h3"},"Error: error:0308010C:digital envelope routines::unsupported"),"?"),(0,a.mdx)("p",null,"A: Metro can fail with Node.js version 17 (see screenshot for error). A fix for this issue is to use any of the LTS (long-term support) version of Node.js including 12, 14, and 16."),(0,a.mdx)("p",null,(0,a.mdx)("img",{src:n(8345).Z,title:"Screenshot of Node.js 17 OSSL error"})),(0,a.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"You can find more details on the issue in the Node.js GitHub repository reported in issue ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/nodejs/node/issues/40455"},"#40455"),"."))),(0,a.mdx)("h2",{id:"android"},"Android"),(0,a.mdx)("h3",{id:"q-what-to-do-when-the-device-shows-the-error-unable-to-load-script-from-assets-indexandroidbundle"},"Q: What to do when the device shows the error ",(0,a.mdx)("inlineCode",{parentName:"h3"},"unable to load script from assets index.android.bundle"),"?"),(0,a.mdx)("p",null,"A: If You are running your application on physical device and getting this error, try running the ",(0,a.mdx)("inlineCode",{parentName:"p"},"adb reverse")," command:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"adb reverse tcp:8081 tcp:8081\n")),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"adb reverse")," allows loading the JavaScript bundle from the Metro bundler when in development mode using a physical device."),(0,a.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"Android Debug Bridge (adb) is a versatile command-line tool that lets you communicate with a device. The adb command facilitates a variety of device actions, such as installing and debugging apps, and it provides access to a Unix shell that you can use to run a variety of commands on a device."),(0,a.mdx)("p",{parentName:"div"},"Source: ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.android.com/studio/command-line/adb"},"https://developer.android.com/studio/command-line/adb")))),(0,a.mdx)("h3",{id:"q-what-to-do-when-we-encounter-an-error-which-says-could-not-find-toolsjar-please-check-that-some_path-contains-a-valid-jdk-installation-when-installing-the-app"},"Q: What to do when we encounter an error which says ",(0,a.mdx)("inlineCode",{parentName:"h3"},"Could not find tools.jar. Please check that <some_path> contains a valid JDK installation.")," when installing the app?"),(0,a.mdx)("p",null,"A: Please follow the ",(0,a.mdx)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"React Native environment setup instructions"),", which has detailed step-by-step instructions for how to set up a React Native development environment.\nIf the error persists, set the ",(0,a.mdx)("inlineCode",{parentName:"p"},"JAVA_HOME")," enviromnent variable to the local JDK installation path. On macOS, you can set the ",(0,a.mdx)("inlineCode",{parentName:"p"},"JAVA_HOME")," variable by running"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"export JAVA_HOME=/Library/Java/JavaVirtualMachines/<jdk_folder>/Contents/Home\n")),(0,a.mdx)("h2",{id:"mobile-models"},"Mobile Models"),(0,a.mdx)("h3",{id:"q-is-it-possible-to-secure-a-model-that-will-be-downloaded-into-pytorch-live"},"Q: Is it possible to secure a model that will be downloaded into PyTorch Live?"),(0,a.mdx)("p",null,"A: PyTorch does not provide security at the model-level. Most mobile platforms such as iOS and Android cannot guarantee secure transmission and storage of ML models as hardware-level security is unavailable to the apps."),(0,a.mdx)("p",null,"If security of ML model is desired then you may get close by turning off debugging and backup in the app manifest for Android. If you do this then the data stored in your local app data directory cannot be extracted without rooting the device."),(0,a.mdx)("p",null,"Another possibility is to encrypt the model and store the encrypted model in the underlying platform-provided secure location. This will likely increase latency and may impact other metrics that your app may care about. You may want to consider securing the ML model using any mechanism that you use for securing other valuable assets in use by the app.")))}u.isMDXComponent=!0},8345:function(e,t,n){t.Z=n.p+"assets/images/node17-ossl-error-e004b5a86d6eb7d0402ce6705c6c934e.png"}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4943],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return u},mdx:function(){return v},useMDXComponents:function(){return p},withMDXComponents:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){return function(t){var n=p(t.components);return r.createElement(e,i({},t,{components:n}))}},p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||f[u]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88191:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={id:"nativejsref",title:"Module: NativeJSRef",sidebar_label:"NativeJSRef",sidebar_position:0,custom_edit_url:null},c=void 0,s={unversionedId:"api/core/modules/nativejsref",id:"api/core/modules/nativejsref",title:"Module: NativeJSRef",description:"Interfaces",source:"@site/docs/api/core/modules/nativejsref.md",sourceDirName:"api/core/modules",slug:"/api/core/modules/nativejsref",permalink:"/live/docs/next/api/core/modules/nativejsref",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"nativejsref",title:"Module: NativeJSRef",sidebar_label:"NativeJSRef",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"Models",permalink:"/live/docs/next/api/core/modules/models"},next:{title:"text",permalink:"/live/docs/next/api/core/modules/text"}},d=[{value:"Interfaces",id:"interfaces",children:[],level:2},{value:"Functions",id:"functions",children:[{value:"toPlainNativeJSRef",id:"toplainnativejsref",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"interfaces"},"Interfaces"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/live/docs/next/api/core/interfaces/nativejsref.nativejsref-1"},"NativeJSRef"))),(0,i.mdx)("h2",{id:"functions"},"Functions"),(0,i.mdx)("h3",{id:"toplainnativejsref"},"toPlainNativeJSRef"),(0,i.mdx)("p",null,"\u25b8 ",(0,i.mdx)("strong",{parentName:"p"},"toPlainNativeJSRef"),"(",(0,i.mdx)("inlineCode",{parentName:"p"},"ref"),"): ",(0,i.mdx)("a",{parentName:"p",href:"/live/docs/next/api/core/interfaces/nativejsref.nativejsref-1"},"NativeJSRef")),(0,i.mdx)("p",null,"TODO(T122223365) Temporary solution to make new JSI-based native media\nobjects work with the old React Native architecture. For example, the\ndrawImage of the canvas expects a NativeJSRef, which itself only needs to\nhave an ID property with a UUID that resolves to an object on the native\nside."),(0,i.mdx)("p",null,"The new JSI-based native media objects have this ID too to make them\ncompatible with current approach of sending objects between native and\nthe JS thread. However, a JSI-based native media object might have other\nproperties and functions that aren't serializable by the bridge."),(0,i.mdx)("p",null,"This helper function only selects the ID property of the ref, which\nguarantees that the resulting NativeJSRef object is serializable."),(0,i.mdx)("p",null,"This function can be removed once all callsites have been migrated to use\nthe new React Native architecture."),(0,i.mdx)("h4",{id:"parameters"},"Parameters"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"ref")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"/live/docs/next/api/core/interfaces/nativejsref.nativejsref-1"},"NativeJSRef")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"A NativeJSRef or a native media object.")))),(0,i.mdx)("h4",{id:"returns"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/live/docs/next/api/core/interfaces/nativejsref.nativejsref-1"},"NativeJSRef")),(0,i.mdx)("p",null,"A Plain NativeJSRef object with only the ID property."),(0,i.mdx)("h4",{id:"defined-in"},"Defined in"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/d47c0e2/react-native-pytorch-core/src/NativeJSRef.ts#L88"},"NativeJSRef.ts:88")))}u.isMDXComponent=!0}}]);
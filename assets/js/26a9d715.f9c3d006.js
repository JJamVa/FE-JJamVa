"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[3665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},l="\uc804\uac1c \uad6c\ubb38(Spread)",c={unversionedId:"frontend/JavaScript/\uc804\uac1c\uad6c\ubb38",id:"frontend/JavaScript/\uc804\uac1c\uad6c\ubb38",title:"\uc804\uac1c \uad6c\ubb38(Spread)",description:"\uc804\uac1c\uad6c\ubb38 (Spread)",source:"@site/docs/frontend/4-JavaScript/20-\uc804\uac1c\uad6c\ubb38.md",sourceDirName:"frontend/4-JavaScript",slug:"/frontend/JavaScript/\uc804\uac1c\uad6c\ubb38",permalink:"/FE-TIL-JJamVa/docs/frontend/JavaScript/\uc804\uac1c\uad6c\ubb38",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/4-JavaScript/20-\uc804\uac1c\uad6c\ubb38.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"frontend",previous:{title:"this",permalink:"/FE-TIL-JJamVa/docs/frontend/JavaScript/this"},next:{title:"\ub514\uc2a4\ud2b8\ub7ed\uccd0\ub9c1(Destructuring)",permalink:"/FE-TIL-JJamVa/docs/frontend/JavaScript/\ub514\uc2a4\ud2b8\ub7ed\uccd0\ub9c1"}},i={},p=[{value:"\uc804\uac1c\uad6c\ubb38 (<code>Spread</code>)",id:"\uc804\uac1c\uad6c\ubb38-spread",level:2},{value:"\uc804\uac1c\uad6c\ubb38 \uc0ac\uc6a9\ubc29\ubc95",id:"\uc804\uac1c\uad6c\ubb38-\uc0ac\uc6a9\ubc29\ubc95",level:2},{value:"Array(\ubc30\uc5f4) \uc804\uac1c\uad6c\ubb38",id:"array\ubc30\uc5f4-\uc804\uac1c\uad6c\ubb38",level:3},{value:"Object(\uac1d\uccb4) \uc804\uac1c\uad6c\ubb38",id:"object\uac1d\uccb4-\uc804\uac1c\uad6c\ubb38",level:3}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\uc804\uac1c-\uad6c\ubb38spread"},"\uc804\uac1c \uad6c\ubb38(Spread)"),(0,a.kt)("h2",{id:"\uc804\uac1c\uad6c\ubb38-spread"},"\uc804\uac1c\uad6c\ubb38 (",(0,a.kt)("inlineCode",{parentName:"h2"},"Spread"),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Spread"),"\uc758 \uc0ac\uc804\uc801\uc778 \uc758\ubbf8\ub294 \ud37c\uc9c0\ub2e4, \ud655\uc0b0\ud558\ub2e4"),(0,a.kt)("li",{parentName:"ul"},"\ubc30\uc5f4\uc774\ub098 \uac1d\uccb4\uc640 \uac19\uc740 \ub370\uc774\ud130 \uad6c\uc870\ub97c \ud655\uc7a5\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ubb38\ubc95."),(0,a.kt)("li",{parentName:"ul"},"\ubc30\uc5f4\uc774\ub098 \uac1d\uccb4\ub97c \uc27d\uac8c \ubcf5\uc0ac\ud558\uac70\ub098, \uc0c8\ub85c\uc6b4 \ubc30\uc5f4\uc774\ub098 \uac1d\uccb4\ub97c \uc0dd\uc131"),(0,a.kt)("li",{parentName:"ul"},"\uc804\uac1c \uad6c\ubb38\uc2dd\uc774\ub77c\uace0 \ubd88\ub9bc")),(0,a.kt)("h2",{id:"\uc804\uac1c\uad6c\ubb38-\uc0ac\uc6a9\ubc29\ubc95"},"\uc804\uac1c\uad6c\ubb38 \uc0ac\uc6a9\ubc29\ubc95"),(0,a.kt)("h3",{id:"array\ubc30\uc5f4-\uc804\uac1c\uad6c\ubb38"},"Array(\ubc30\uc5f4) \uc804\uac1c\uad6c\ubb38"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const num1 = [1, 2, 3];\nconst num2 = [10, 11, 12];\n\nconst N_arr1 = [...num1, ...num2];\nconsole.log(N_arr1); //[1,2,3,10,11,12]\n\nconst N_arr2 = [...num2, ...num1];\nconsole.log(N_arr2); //[10,11,12,1,2,3]\n")),(0,a.kt)("h3",{id:"object\uac1d\uccb4-\uc804\uac1c\uad6c\ubb38"},"Object(\uac1d\uccb4) \uc804\uac1c\uad6c\ubb38"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const obj1 = { name: "JJamVa", age: 27 };\nconst obj2 = { food: "meat", grade: 4 };\n\nconst sum1 = { ...obj1, ...obj2 };\nconsole.log(sum1); // {name:"JJamVa", age: 27, food:"meat", grade:4}\n\nconst sum2 = { ...obj2, ...obj1 };\nconsole.log(sum2);\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Object(\uac1d\uccb4) \uc804\uac1c\uad6c\ubb38\uc5d0\uc11c \uc8fc\uc758\uc0ac\ud56d"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const hello = { name: "Hello" };\nconst world = { name: "World" };\n\nconst hello_world = { ...hello, ...world };\nconsole.log(hello_world); //{name:"World"}\n\nconst hello_world = { ...world, ...hello };\nconsole.log(hello_world); //{name:"Hello"}\n')),(0,a.kt)("p",{parentName:"admonition"},"\uc774\uc640 \uac19\uc774 \uac1d\uccb4\uc548\uc5d0 \uc788\ub294 key\uac00 \uac19\uc744 \uacbd\uc6b0 \uac12\uc774 \ud558\ub098\ub9cc \ucd9c\ub825\uc774 \ub41c\ub2e4.",(0,a.kt)("br",null),"\n\uac1d\uccb4\uc758 \ud2b9\uc131\uc73c\ub85c \uc778\ud574 \ub3d9\uc77c\ud55c key\uac12\uc744 \uac00\uc9c4 \uacbd\uc6b0 ",(0,a.kt)("strong",{parentName:"p"},"\uacf5\ud1b5\ud0a4 \uac12\uc744 \uac00\uc9c4 \uac1d\uccb4 \uc911 \ub9e8\ub4a4\uc5d0 \ud638\ucd9c\ub41c \uac1d\uccb4\uc758 value\uac12\uc73c\ub85c \uc218\uc815"),"\ub41c\ub2e4.")))}u.isMDXComponent=!0}}]);
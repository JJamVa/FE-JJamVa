"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[2116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),k=l,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||r;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const r={},o="useCallback",i={unversionedId:"frontend/React/useCallback",id:"frontend/React/useCallback",title:"useCallback",description:"useCallback\uc774\ub780?",source:"@site/docs/frontend/9-React/28-useCallback.md",sourceDirName:"frontend/9-React",slug:"/frontend/React/useCallback",permalink:"/FE-TIL-JJamVa/docs/frontend/React/useCallback",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/9-React/28-useCallback.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{},sidebar:"frontend",previous:{title:"Zustand",permalink:"/FE-TIL-JJamVa/docs/frontend/React/Zustand"},next:{title:"Typescript",permalink:"/FE-TIL-JJamVa/docs/frontend/Typescript/Typescript"}},p={},c=[{value:"useCallback\uc774\ub780?",id:"usecallback\uc774\ub780",level:2},{value:"useCallback \uc0ac\uc6a9 \uc774\uc720",id:"usecallback-\uc0ac\uc6a9-\uc774\uc720",level:2},{value:"useCallback \ucf54\ub4dc \uc608\uc2dc",id:"usecallback-\ucf54\ub4dc-\uc608\uc2dc",level:2},{value:"useCallback \uc801\uc6a9 \uc804 \ucf54\ub4dc",id:"usecallback-\uc801\uc6a9-\uc804-\ucf54\ub4dc",level:3},{value:"useCallback \uc801\uc6a9 \ud6c4 \ucf54\ub4dc",id:"usecallback-\uc801\uc6a9-\ud6c4-\ucf54\ub4dc",level:3},{value:"useMemo\uc640 useCallback",id:"usememo\uc640-usecallback",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"usecallback"},"useCallback"),(0,l.kt)("h2",{id:"usecallback\uc774\ub780"},"useCallback\uc774\ub780?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"React\uc758 \ud6c5 \uc911 \ud558\ub098, \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ucf5c\ubc31 \ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158(",(0,l.kt)("inlineCode",{parentName:"li"},"memoization"),")\ud558\ub294 \ub370 \uc0ac\uc6a9"),(0,l.kt)("li",{parentName:"ul"},"\uc758\uc874\uc131\uc774 \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub294 \ud55c, \ub3d9\uc77c\ud55c \ucf5c\ubc31 \ud568\uc218 \uc778\uc2a4\ud134\uc2a4\ub97c \uc7ac\uc0ac\uc6a9")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const \ubcc0\uc218 = useMemo(() => {\n  // \ud568\uc218\n}, [\uc758\uc874\uc131 \ubc30\uc5f4]);\n")),(0,l.kt)("h2",{id:"usecallback-\uc0ac\uc6a9-\uc774\uc720"},"useCallback \uc0ac\uc6a9 \uc774\uc720"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubd88\ud544\uc694\ud55c \ud568\uc218 \uc7ac\uc0dd\uc131 \ubc29\uc9c0"),(0,l.kt)("li",{parentName:"ul"},"\ud568\uc218 \uc7ac\uc0dd\uc131\uc73c\ub85c \uc778\ud55c \uc790\uc2dd Component\uc758 \ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1 \ubc29\uc9c0"),(0,l.kt)("li",{parentName:"ul"},"\uc758\uc874\uc131 \uad00\ub9ac")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const func1 = (x, y) => x + y;\nconst func2 = (x, y) => x + y;\n\nconsole.log(func1 === func2); // false\n")),(0,l.kt)("p",{parentName:"admonition"},"\uc704\uc758 \ucf54\ub4dc\ub97c \ubcf4\uac8c \ub418\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"func1"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"func2"),"\ub294 \uac19\uc740 \uc778\uc790\uac12, \uac19\uc740 \ub0b4\uc6a9\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc774\ub2e4.",(0,l.kt)("br",null),"\n\ud558\uc9c0\ub9cc, ",(0,l.kt)("inlineCode",{parentName:"p"},"func1"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"func2")," \ube44\uad50 \uc5f0\uc0b0\uc744 \ud1b5\ud574 \ucd9c\ub825\uc744 \ud574\ubcf4\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\uac00 \ucd9c\ub825 \ub41c\ub2e4.",(0,l.kt)("br",null),"\n\uc774\uc720\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"func1"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"func2"),"\ub294 \ud568\uc218\uc774\uae30\ub3c4 \ud558\uc9c0\ub9cc \uac1d\uccb4\uc774\ub2e4.",(0,l.kt)("br",null),"\n\ud568\uc218\uc548\uc758 \ub0b4\uc6a9\uc740 \uac19\ub354\ub77c\ub3c4 \uc0dd\uc131 \uc2dc, \ub2e4\ub978 \uba54\ubaa8\ub9ac \uc8fc\uc18c\uc5d0 \uc0dd\uc131\uc774 \ub418\uae30 \ub54c\ubb38\uc5d0",(0,l.kt)("br",null),"\n\uc11c\ub85c \ub2e4\ub978 \uac1d\uccb4\ub85c \uc778\uc2dd\uc774 \ub418\uc5b4 false\uac00 \ucd9c\ub825\uc774 \ub41c\ub2e4.",(0,l.kt)("br",null)),(0,l.kt)("p",{parentName:"admonition"},"\uc774\uc640 \uac19\uc740 \uc0c1\ud669\uc740 React Component\uac00 \ub80c\ub354\ub9c1\ub420 \ub54c\ub3c4 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4.",(0,l.kt)("br",null),"\n\ucc98\uc74c \ub80c\ub354\ub9c1\uc774 \ub418\uace0 \ud568\uc218\ub97c \uc2e4\ud589\ud55c \ud6c4, \ub2e4\uc2dc \ub80c\ub354\ub9c1\uc774 \ubc1c\uc0dd\ud558\uba74",(0,l.kt)("br",null),"\n\uae30\uc874\uc758 \ud568\uc218\ub97c \uc720\uc9c0\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \uc0c8\ub85c\uc6b4 \uba54\ubaa8\ub9ac \uc8fc\uc18c\uc5d0 \ud568\uc218\uac00 \uc0dd\uc131\ub41c\ub2e4.",(0,l.kt)("br",null),"\n\uc774\ub85c \uc778\ud574 \ub9e4 \ub80c\ub354\ub9c1\ub9c8\ub2e4 \uc0c8\ub85c\uc6b4 \ud568\uc218 \uac1d\uccb4\uac00 \uc0dd\uc131\ub418\uc5b4 \ubd88\ud544\uc694\ud55c \ub9ac\uc18c\uc2a4\uac00 \uc18c\ube44\ub420 \uc218 \uc788\ub2e4.",(0,l.kt)("br",null)),(0,l.kt)("p",{parentName:"admonition"},"\uc774\ub97c \ubc29\uc9c0\ud558\uace0 \uc131\ub2a5\uc744 \ucd5c\uc801\ud654\ud558\uae30 \uc704\ud574 useCallback\ud6c5\uc744 \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4.",(0,l.kt)("br",null),"\n\ud2b9\ud788, ",(0,l.kt)("strong",{parentName:"p"},"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \ud568\uc218"),"\ub098 ",(0,l.kt)("strong",{parentName:"p"},"props\ub85c \uc804\ub2ec\ub418\ub294 \ud568\uc218"),"\uac00 \uc790\uc8fc \uc0dd\uc131\ub420 \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9\ud558\uba74 \uc88b\ub2e4.",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"usecallback-\ucf54\ub4dc-\uc608\uc2dc"},"useCallback \ucf54\ub4dc \uc608\uc2dc"),(0,l.kt)("h3",{id:"usecallback-\uc801\uc6a9-\uc804-\ucf54\ub4dc"},"useCallback \uc801\uc6a9 \uc804 \ucf54\ub4dc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/app.js"',title:'"src/app.js"'},'import { useState } from "react";\nimport View from "./View";\n\nfunction App() {\n  const [text1, setText1] = useState("");\n  const [text2, setText2] = useState("");\n\n  const changeText1 = (e) => setText1(e.target.value);\n  const changeText2 = (e) => setText2(e.target.value);\n\n  return (\n    <>\n      <View text={text1} changeText={changeText1} />\n      <View text={text2} changeText={changeText2} />\n    </>\n  );\n}\nexport default App;\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/View.js"',title:'"src/View.js"'},'import React from "react";\n\nconst View = ({ text, changeText }) => {\n  console.log("rendering check", text);\n  return (\n    <div>\n      <input type="text" value={text} onChange={changeText} />\n      <p>{text}</p>\n    </div>\n  );\n};\n\nexport default View;\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\uc704\uc758 \ucf54\ub4dc\ub294 \ub450\uac1c\uc758 \uc785\ub825\ucc3d\uc5d0 \uac12\uc744 \uc785\ub825\ud558\uba74 \ud574\ub2f9 \uc785\ub825\uac12\uc744 \ud45c\ud604\ud558\ub294 \ucf54\ub4dc\uc774\ub2e4.",(0,l.kt)("br",null),"\nuseCallback \uc608\uc2dc \ucf54\ub4dc\ub97c \ubcf4\uc5ec\uc8fc\uae30 \uc804, \uc5b4\ub5a4 \ucc28\uc774\uac00 \uc788\ub294\uc9c0 \ud655\uc778\uc744 \ud558\uba74 \uc88b\uc744 \uac83 \uac19\ub2e4.",(0,l.kt)("br",null)),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("img",{parentName:"p",src:"https://github.com/user-attachments/assets/c534bd06-0125-493e-92d9-bc7d9cee62ed",alt:"image"})),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("img",{parentName:"p",src:"https://github.com/user-attachments/assets/58dfc5b0-31e7-4785-a393-6b654145a40d",alt:"image"})),(0,l.kt)("p",{parentName:"admonition"},"\uccab \ubc88\uc9f8 \uc785\ub825\ucc3d\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"hi"),"\ub77c\uace0 \uc785\ub825 \ud558\uba74, \uc704\uc758 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \ucf58\uc194\ucc3d\uc5d0 \uc785\ub825 \uac12\uc774 \ub72c\ub2e4.",(0,l.kt)("br",null),"\n\ucd9c\ub825 \uac12\uc744 \ubcf4\uba74 \ucd1d 6\uac1c\uac00 \uc874\uc7ac\ud558\ub294\ub370 \ub9e8\uc55e\uc758 2\uac1c\uc640 \uac19\uc740 \uacbd\uc6b0, ",(0,l.kt)("strong",{parentName:"p"},"\ucc98\uc74c \ud398\uc774\uc9c0 \ub80c\ub354\ub9c1\uc774 \ub418\uc5b4 \ub098\uc624\ub294 \ucd9c\ub825 \uac12"),"\uc774\ub2e4.",(0,l.kt)("br",null),"\n\uadf8\ub7fc \ub098\uba38\uc9c0 4\uac1c\uc758 \ucd9c\ub825\ubb3c\uc744 \ubcf4\uba74, input\uc740 \uc785\ub825\uac12\uc774 \ubc1c\uc0dd\ud560 \ub54c\ub9c8\ub2e4 \ub80c\ub354\ub9c1\uc774 \ubc1c\uc0dd\ud55c\ub2e4.",(0,l.kt)("br",null),"\n\uc989, ",(0,l.kt)("inlineCode",{parentName:"p"},"hi"),"\ub77c\uace0 \uc785\ub825\uc744 \ud558\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"h"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," \ucd1d 2\ubc88\uc758 \ub80c\ub354\ub9c1\uc774 \ubc1c\uc0dd\ud55c\ub2e4.",(0,l.kt)("br",null),"\n\uadf8\ub7fc \uacf5\ubc31\uc758 \ucd9c\ub825\uc740 \ubc14\ub85c \ube44\uc5b4\uc788\ub294 \ub2e4\ub978 \uc785\ub825\ucc3d\uc758 \ucd9c\ub825 \uac12\uc774\ub2e4.",(0,l.kt)("br",null)),(0,l.kt)("p",{parentName:"admonition"},"\uc989, \ud558\ub098\uc758 \uc785\ub825\ucc3d\uc758 \uc0c1\ud0dc \ubcc0\uacbd\uc73c\ub85c \uc778\ud574 App Component\uac00 \ub2e4\uc2dc \ub80c\ub354\ub9c1\uc774 \ub418\uae30 \ub54c\ubb38\uc5d0",(0,l.kt)("br",null),"\nView Component\ub3c4 \ub2e4\uc2dc \ub80c\ub354\ub9c1\uc774 \ubc1c\uc0dd\ud55c\ub2e4.",(0,l.kt)("br",null),"\n\ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1\uc744 \ucd5c\uc18c\ud654 \uc2dc\ud0a4\uae30 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"useCallback"),"\uc744 \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4.",(0,l.kt)("br",null))),(0,l.kt)("h3",{id:"usecallback-\uc801\uc6a9-\ud6c4-\ucf54\ub4dc"},"useCallback \uc801\uc6a9 \ud6c4 \ucf54\ub4dc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/app.js"',title:'"src/app.js"'},'import { useState, useCallback } from "react";\nimport View from "./View";\n\nfunction App() {\n  const [text1, setText1] = useState("");\n  const [text2, setText2] = useState("");\n\n  const changeText1 = useCallback((e) => setText1(e.target.value), []);\n  const changeText2 = useCallback((e) => setText2(e.target.value), []);\n\n  return (\n    <>\n      <View text={text1} changeText={changeText1} />\n      <View text={text2} changeText={changeText2} />\n    </>\n  );\n}\nexport default App;\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/View.js"',title:'"src/View.js"'},'import React, { memo } from "react";\n\nconst View = ({ text, changeText }) => {\n  console.log("rendering check", text);\n  return (\n    <div>\n      <input type="text" value={text} onChange={changeText} />\n      <p>{text}</p>\n    </div>\n  );\n};\n\nexport default memo(View);\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\uc704\uc758 \ucf54\ub4dc\ub294 useCallback\uc744 \uc801\uc6a9\ud55c \ucf54\ub4dc\uc774\ub2e4.",(0,l.kt)("br",null),"\n\uc774\ubc88\uc5d0\ub3c4 \uc785\ub825\ucc3d\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"hi"),"\ub77c\uace0 \uc785\ub825\uc744 \ud55c\ub2e4.",(0,l.kt)("br",null)),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("img",{parentName:"p",src:"https://github.com/user-attachments/assets/c534bd06-0125-493e-92d9-bc7d9cee62ed",alt:"image"})),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("img",{parentName:"p",src:"https://github.com/user-attachments/assets/cad0ec28-cc2f-4cbb-8ad3-2d5d5f293bb1",alt:"image"})),(0,l.kt)("p",{parentName:"admonition"},"\ucf58\uc194\ucc3d\uc744 \ud655\uc778\ud574\ubcf4\uba74 \uc55e\uc5d0 2\uac1c \ucd9c\ub825\ubb3c\uc744 \uc81c\uc678\ud55c \ub098\uba38\uc9c0\ub294 \ud604\uc7ac \uc785\ub825\ud558\uace0 \uc788\ub294 \ucc3d\uc5d0 \ub300\ud55c \uc785\ub825\uac12\ub9cc \ucd9c\ub825\uc774 \ub41c\ub2e4.",(0,l.kt)("br",null),"\n\uc989, ",(0,l.kt)("strong",{parentName:"p"},"\ud604\uc7ac \uc785\ub825\ucc3d\uc5d0 \ub300\ud55c Component\ub9cc \ub80c\ub354\ub9c1\uc774 \ubc1c\uc0dd\ud588\ub2e4\ub294 \uc758\ubbf8"),"\uc774\ub2e4.",(0,l.kt)("br",null)),(0,l.kt)("hr",{parentName:"admonition"}),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const changeText1 = useCallback((e) => setText1(e.target.value), []);\n")),(0,l.kt)("p",{parentName:"admonition"},"useCallback\uc744 \ud1b5\ud574 \ucc98\uc74c \ub80c\ub354\ub9c1(",(0,l.kt)("inlineCode",{parentName:"p"},"\uc758\uc874\uc131 \ubc30\uc5f4 \ube48\uac12"),") \ub420 \ub54c\uc758 \ud568\uc218 \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud55c\ub2e4.",(0,l.kt)("br",null),"\n\uc989, \ub80c\ub354\ub9c1\uc774 \ubc1c\uc0dd\ud558\ub354\ub77c\ub3c4 ",(0,l.kt)("strong",{parentName:"p"},"\uc0c8\ub85c\uc6b4 \ud568\uc218\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uace0 \uc0dd\uc131\ud588\ub358 \ud568\uc218\ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9"),"\ud560 \uc218 \uc788\ub2e4.",(0,l.kt)("br",null)),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"export default memo(View);\n")),(0,l.kt)("p",{parentName:"admonition"},"\ub610\ud55c, View.js\uc758 \ucf54\ub4dc \uc911 export\ub97c \ud560 \ub54c, ",(0,l.kt)("inlineCode",{parentName:"p"},"memo()"),"\ub97c \uc0ac\uc6a9\ud574\uc57c useCallback\uc744 \uc81c\ub300\ub85c \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\ub2e4.",(0,l.kt)("br",null),"\nmemo\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\uc804\ub2ec\ub41c props\uac00 \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub294 \ud55c Component\ub97c \uc7ac\ub80c\ub354\ub9c1\ud558\uc9c0 \uc54a\uac8c \ud574\uc8fc\ub294 \uc5ed\ud560"),"\uc744 \ud55c\ub2e4.",(0,l.kt)("br",null)),(0,l.kt)("p",{parentName:"admonition"},"useCallback\uc740 \ud1b5\ud574 \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc744 \ud1b5\ud574 \ubd88\ud544\uc694\ud55c \ud568\uc218 \uc7ac\uc0dd\uc131\uc744 \ubc29\uc9c0,",(0,l.kt)("br",null),"\nmemo\ub294 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc5c6\ub294 Component\ub97c \ub80c\ub354\ub9c1 \ubc29\uc9c0\ud568\uc73c\ub85c\uc368 \ubd88\ud544\uc694\ud55c \ud568\uc218\ub97c \uc7ac\uc0dd\uc131\ud558\uc9c0 \uc54a\uac8c \ud574\uc900\ub2e4.",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"usememo\uc640-usecallback"},"useMemo\uc640 useCallback"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uacf5\ud1b5\uc810"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uba54\ubaa8\uc774\uc81c\uc774\uc158"),": \uc5f0\uc0b0\uc758 \uacb0\uacfc\ub098 \ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uc5ec \ubd88\ud544\uc694\ud55c \uc7ac\uc5f0\uc0b0\uc774\ub098 \ud568\uc218 \uc7ac\uc0dd\uc131\uc744 \ubc29\uc9c0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uc131\ub2a5 \ucd5c\uc801\ud654")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uc758\uc874\uc131 \ubc30\uc5f4"),": \uc758\uc874\uc131 \ubc30\uc5f4\uc744 \ud1b5\ud574 \ud2b9\uc815 \uac12\uc774 \ubcc0\uacbd\ub418\uc5c8\uc744 \ub54c, \uc7ac\uc5f0\uc0b0 \ubc0f \ud568\uc218\ub97c \uc7ac\uc0dd\uc131"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ucc28\uc774\uc810"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useMemo"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ubcf5\uc7a1\ud55c \uc5f0\uc0b0\uc5d0 \ub300\ud55c \uacb0\uacfc \uac12"),"\uc744 \uba54\ubaa8\uc774\uc81c\uc774\uc158"),(0,l.kt)("li",{parentName:"ul"},"\uacc4\uc0b0\ub41c \uac12 \uc790\uccb4\ub97c \ubc18\ud658"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useCallback"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158 \ud558\uba70, \uc8fc\ub85c Component\uac00 \uc7ac\ub80c\ub354\ub9c1\ub420 \ub54c \uae30\uc874\uc758 \ud568\uc218 \uc778\uc2a4\ud134\uc2a4\ub97c \uc7ac\uc0ac\uc6a9"),(0,l.kt)("li",{parentName:"ul"},"\uba54\ubaa8\uc774\uc81c\uc774\uc158\ub41c \ud568\uc218 \uc790\uccb4\ub97c \ubc18\ud658")))))))}m.isMDXComponent=!0}}]);
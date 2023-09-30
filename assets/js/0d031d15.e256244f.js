"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[8158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},l="useState",i={unversionedId:"frontend/React/useState",id:"frontend/React/useState",title:"useState",description:"useState\ub780?",source:"@site/docs/frontend/10-React/6-useState.md",sourceDirName:"frontend/10-React",slug:"/frontend/React/useState",permalink:"/FE-TIL-JJamVa/docs/frontend/React/useState",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/10-React/6-useState.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"frontend",previous:{title:"Component\uc640 Props",permalink:"/FE-TIL-JJamVa/docs/frontend/React/Component\uc640props"},next:{title:"React \uc774\ubca4\ud2b8",permalink:"/FE-TIL-JJamVa/docs/frontend/React/React\uc774\ubca4\ud2b8"}},s={},p=[{value:"useState\ub780?",id:"usestate\ub780",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usestate"},"useState"),(0,r.kt)("h2",{id:"usestate\ub780"},"useState\ub780?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[\uc0c1\ud0dc, \uc0c1\ud0dc \ubcc0\uacbd\ud568\uc218] = useState(\ucd08\uae30\uac12)")),(0,r.kt)("li",{parentName:"ul"},"state\ubcc0\uc218\uc640 state \ubcc0\uc218\uc758 \uc0c1\ud0dc\ub97c \ubc14\uafd4\uc904 \uc218 \uc788\ub294 \ud568\uc218\uac00 \ubc18\ud658")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from "react";\n\nfunction App() {\n  console.log(useState());\n  return <></>;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/14c3ee0b-26eb-4dc3-8ab2-cf1b839afb42",alt:"image"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"useState\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c useState \ubaa8\ub4c8\uc744 \ubc1b\uc544\uc640\uc57c\ud55c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"console.log(useState());\n")),(0,r.kt)("p",{parentName:"admonition"},"useState\ub97c \ucd9c\ub825\ud574\ubcf4\uba74 Array\uc778 \uc810\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc73c\uba70, \ubc30\uc5f4\uc5d0\ub294 undefined\uc640 \ud568\uc218\uac00 \ucd9c\ub825\ub418\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4.",(0,r.kt)("br",null),"\n\uad6c\uc870\ubd84\ud574 \ud560\ub2f9\uc744 \ud1b5\ud574 \ubc30\uc5f4 \ud06c\uae30\ub9cc\ud07c\uc758 \ubcc0\uc218\ub97c \uc120\uc5b8\ud558\uc5ec \uac01 \ubcc0\uc218\uc5d0 \uac12\uc744 \uc800\uc7a5\ud560 \uc218 \uc788\ub2e4.",(0,r.kt)("br",null),"\n\ubc30\uc5f4\uc758 \ud06c\uae30\uac00 2\uc784\uc73c\ub85c 2\uac1c\uc758 \ubcc0\uc218\uba85\uc744 \uc791\uc131\ud558\uba74 \ub41c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"let [hello, world] = useState();\nconsole.log(hello);\nconsole.log(world);\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/34ec840b-2aa1-429d-a18c-211ed2967e68",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},"hello\ub77c\ub294 \ubcc0\uc218\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\uac00 \ucd9c\ub825, world\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatchSetState"),"\ud568\uc218\uac00 \ucd9c\ub825\ub418\uc5c8\ub2e4.",(0,r.kt)("br",null),"\n\uc989, \ucd08\uae30\uac12\uc744 \uc9c0\uc815\ud574\uc8fc\uc9c0 \uc54a\uc544 hello\uc5d0\ub294 undefined\uac12\uc774 \uc800\uc7a5, world\uc5d0\ub294 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ud568\uc218\ub97c \uc800\uc7a5\ud55c\ub2e4.",(0,r.kt)("br",null))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("h4",{parentName:"admonition",id:"dispatchsetstate-\ud568\uc218\ub780"},"dispatchSetState \ud568\uc218\ub780??"),(0,r.kt)("p",{parentName:"admonition"},"\uc0ac\uc6a9\uc790\uac00 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc704\ud574 \ud638\ucd9c\ud558\ub294 \ud568\uc218",(0,r.kt)("br",null),"\ndispatchSetState \ud568\uc218\ub97c \ud638\ucd9c\ud558\uba74 Component\ub97c \ub2e4\uc2dc \ub80c\ub354\ub9c1\ud558\uace0 \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\ub97c \uc801\uc6a9",(0,r.kt)("br",null),"\nReact\ub294 \ub0b4\ubd80\uc801\uc73c\ub85c \uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8\ub97c \uad00\ub9ac\ud558\uace0 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ucd5c\uc801\ud654\ub41c \ubc29\uc2dd\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"useState \uc2e4\uc2b5"),(0,r.kt)("div",{markdown:"1"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from "react";\n\nfunction App() {\n  let [like, setLike] = useState(0);\n  function Count() {\n    setLike(++like);\n  }\n\n  return (\n    <>\n      <button onClick={Count}>\ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694!</button>\n      <p>{like}</p>\n    </>\n  );\n}\n\nexport default App;\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/8dcafa19-3ea5-4441-8f31-64fac2803f8c",alt:"image"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"useState\ub97c \uc120\uc5b8\ud558\uc5ec like\uc5d0 \ucd08\uae30\uac12 0\uc744 \ud560\ub2f9, setLike\uc5d0 \uc0c1\ud0dc \ubcc0\uacbd\ud568\uc218\ub97c \ud560\ub2f9\ud558\uc600\ub2e4.",(0,r.kt)("br",null),"\nbutton\uc5d0 onClick \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd \uc2dc, Count\ub77c\ub294 \ud568\uc218\ub97c \ud638\ucd9c\ud55c\ub2e4.",(0,r.kt)("br",null),"\nCount\ud568\uc218\uc5d0\uc11c\ub294 setLike \uc0c1\ud0dc \ubcc0\uacbd\ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \ud604\uc7ac like\uc758 \uac12\uc5d0\uc11c \ud558\ub098\ub97c \ucd94\uac00 \ud6c4,",(0,r.kt)("br",null),"\n\ub80c\ub354\ub9c1\uc744 \uc2dc\ucf1c \ubc84\ud2bc\uc744 \ub204\ub97c \ub54c\ub9c8\ub2e4 like \uc0c1\ud0dc \ubcc0\uc218\uac00 1\uc529 \uc99d\uac00\ud558\uace0 \uadf8 \uac12\uc744 \ud654\uba74\uc5d0 \ucd9c\ub825\ud55c\ub2e4.")))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[3097],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),u=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=u(n),k=o,d=p["".concat(c,".").concat(k)]||p[k]||m[k]||r;return n?a.createElement(d,i(i({ref:e},l),{},{components:n})):a.createElement(d,i({ref:e},l))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=k;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1538:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={},i="Custom Hook",s={unversionedId:"frontend/React/CustomHook",id:"frontend/React/CustomHook",title:"Custom Hook",description:"Custom Hook\uc774\ub780?",source:"@site/docs/frontend/10-React/20-CustomHook.md",sourceDirName:"frontend/10-React",slug:"/frontend/React/CustomHook",permalink:"/FE-TIL-JJamVa/docs/frontend/React/CustomHook",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/10-React/20-CustomHook.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"frontend",previous:{title:"useContext",permalink:"/FE-TIL-JJamVa/docs/frontend/React/useContext"},next:{title:"Redux",permalink:"/FE-TIL-JJamVa/docs/frontend/React/Redux"}},c={},u=[{value:"Custom Hook\uc774\ub780?",id:"custom-hook\uc774\ub780",level:2},{value:"Custom Hook \uc608\uc2dc",id:"custom-hook-\uc608\uc2dc",level:2}],l={toc:u},p="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-hook"},"Custom Hook"),(0,o.kt)("h2",{id:"custom-hook\uc774\ub780"},"Custom Hook\uc774\ub780?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React Component\uc5d0\uc11c \uc0c1\ud0dc \uad00\ub9ac\ub098 \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8 \ub85c\uc9c1\uc744 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ud568\uc218\ub85c \ucd94\uc0c1\ud654\ud55c \uac83")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("h4",{parentName:"admonition",id:"custom-hook\uc758-\uc7a5\uc810"},"Custom Hook\uc758 \uc7a5\uc810"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"\ub85c\uc9c1\uc758 \uc7ac\uc0ac\uc6a9"),(0,o.kt)("li",{parentName:"ol"},"\ucf54\ub4dc\uc758 \uac00\ub3c5\uc131 \ud5a5\uc0c1"),(0,o.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8 \uc6a9\uc774\uc131"))),(0,o.kt)("h2",{id:"custom-hook-\uc608\uc2dc"},"Custom Hook \uc608\uc2dc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="useAxios.js"',title:'"useAxios.js"'},'import { useState } from "react";\n\nfunction useAxios() {\n  const [data, setData] = useState(null);\n\n  async function getData(initLink) {\n    try {\n      const response = await fetch(initLink);\n      const jsonData = await response.json();\n      setData(JSON.stringify(jsonData));\n    } catch {\n      setData(undefined);\n    }\n  }\n\n  return [data, getData];\n}\n\nexport default useAxios;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Practice.js"',title:'"Practice.js"'},'import React from "react";\nimport useAxios from "./Hooks/useAxios";\n\nfunction Practice() {\n  const [linkData, getLinkData] = useAxios();\n\n  return (\n    <>\n      <button\n        onClick={() =>\n          getLinkData("https://picsum.photos/v2/list?page=1&limit=6")\n        }\n      >\n        \ub370\uc774\ud130 \uac00\uc838\uc624\uae30\n      </button>\n      <div>{linkData}</div>\n    </>\n  );\n}\n\nexport default Practice;\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/4577cf44-9ec7-4513-87be-1b2ac2de056f",alt:"image"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"useAxios.js\uc5d0\uc11c useState\uc758 \ucd08\uae30\uac12\uc744 \uc124\uc815 \ubc0f getData \ud568\uc218\ub97c \uc120\uc5b8\ud558\uc5ec \ubc18\ud658\ud55c\ub2e4.",(0,o.kt)("br",null),"\nPractice.js\uc5d0\uc11c\ub294 useAxios\ub97c import\ud558\uc5ec \ubaa8\ub4c8\uc744 \uac00\uc838\uc628\ub2e4.",(0,o.kt)("br",null)),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const [linkData, getLinkData] = useAxios();\n")),(0,o.kt)("p",{parentName:"admonition"},"import \ud6c4, useAxios\ub97c \uc120\uc5b8\ud558\uc5ec linkData\uc640 getLinkData\ub85c \uad6c\uc870\ubd84\ud574 \ud560\ub2f9\uc73c\ub85c \uac12\uc744 \uac00\uc838\uc628\ub2e4.",(0,o.kt)("br",null),"\n\uc774\ub54c, linkData\uc640 getLinkData\ub294 useAxios\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"useState\uc758 data\ubcc0\uc218"),"\uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"getData\ud568\uc218"),"\uc774\ub2e4.",(0,o.kt)("br",null),"\n\ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 getLinkData \ud568\uc218\uac00 \ud638\ucd9c\ub418\uc5b4 \uc9c0\uc815\ub41c URL\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uba70, \uc774 \ub370\uc774\ud130\ub294 \ud654\uba74\uc5d0 \ucd9c\ub825\ub41c\ub2e4.",(0,o.kt)("br",null)),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"async function getData(initLink) {\n  try {\n    const response = await fetch(initLink);\n    const jsonData = await response.json();\n    setData(JSON.stringify(jsonData));\n  } catch {\n    setData(undefined);\n  }\n}\n")),(0,o.kt)("p",{parentName:"admonition"},"useAxios.js\uc5d0\uc11c getData\ud568\uc218\ub97c \ubcf4\uba74 \uc804\ub2ec\ub41c Url\uc5d0 \ub300\ud574 fetch \uc791\uc5c5\uc744 \ud558\uc600\ub2e4.",(0,o.kt)("br",null),"\n\ud574\ub2f9 Url\uc5d0 \ub370\uc774\ud130\uac00 \uc874\uc7ac\ud560 \uacbd\uc6b0, json\uac1d\uccb4 \ud0c0\uc785\uc758 \ub370\uc774\ud130\ub97c linkData\ubcc0\uc218\uc5d0 \uc5c5\ub370\uc774\ud2b8\ud55c\ub2e4.",(0,o.kt)("br",null),"\n\ud1b5\uc2e0 \ubb38\uc81c \ud639\uc740 \ub370\uc774\ud130\uac00 \uc5c6\uc744 \uacbd\uc6b0, undefined\ub85c linkData\ub85c \uc5c5\ub370\uc774\ud2b8\ud55c\ub2e4.",(0,o.kt)("br",null))))}m.isMDXComponent=!0}}]);
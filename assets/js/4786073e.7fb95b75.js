"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[8897],{9018:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"frontend/React/ContextAPI","title":"ContextAPI","description":"ContextAPI","source":"@site/docs/frontend/9-React/16-ContextAPI.md","sourceDirName":"frontend/9-React","slug":"/frontend/React/ContextAPI","permalink":"/FE-TIL-JJamVa/docs/frontend/React/ContextAPI","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{},"sidebar":"frontend","previous":{"title":"useMemo","permalink":"/FE-TIL-JJamVa/docs/frontend/React/useMemo"},"next":{"title":"useContext","permalink":"/FE-TIL-JJamVa/docs/frontend/React/useContext"}}');var o=r(6070),i=r(989);const s={},d="ContextAPI",l={},c=[{value:"ContextAPI",id:"contextapi-1",level:2},{value:"props\uc640 ContextAPI\uc758 \ucc28\uc774\uc810",id:"props\uc640-contextapi\uc758-\ucc28\uc774\uc810",level:4},{value:"ContextAPI\uc5d0 \uc0ac\uc6a9\ud558\ub294 \ubb38\ubc95",id:"contextapi\uc5d0-\uc0ac\uc6a9\ud558\ub294-\ubb38\ubc95",level:2},{value:"\uc8fc\uc758\uc0ac\ud56d",id:"\uc8fc\uc758\uc0ac\ud56d",level:3},{value:"1. Consumer",id:"1-consumer",level:4},{value:"2. Provier",id:"2-provier",level:4},{value:"3. ContextAPI \uc0ac\uc6a9 \uc720\uc758",id:"3-contextapi-\uc0ac\uc6a9-\uc720\uc758",level:4}];function x(n){const e={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"contextapi",children:"ContextAPI"})}),"\n",(0,o.jsx)(e.h2,{id:"contextapi-1",children:"ContextAPI"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"React\uc5d0\uc11c \uc0c1\ud0dc \uad00\ub9ac\ub97c \uc704\ud55c \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\ub294 \ub3c4\uad6c"}),"\n",(0,o.jsx)(e.li,{children:"Component \uac04\uc5d0 \ub370\uc774\ud130\ub97c \uacf5\uc720\ud558\uace0 \uc0c1\ud0dc\ub97c \uc804\ud30c"}),"\n"]}),"\n",(0,o.jsxs)(e.admonition,{type:"info",children:[(0,o.jsx)(e.h4,{id:"props\uc640-contextapi\uc758-\ucc28\uc774\uc810",children:"props\uc640 ContextAPI\uc758 \ucc28\uc774\uc810"}),(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"props"}),"\uc640 ",(0,o.jsx)(e.code,{children:"ContextAPI"}),"\uc758 \uc0ac\uc6a9 \ubaa9\uc801\uc740 \ube44\uc2b7\ud558\uc9c0\ub9cc \ucc28\uc774\uc810\uc774 \uc788\ub2e4.",(0,o.jsx)(e.br,{})]}),(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/9c15d7c9-fbc1-4272-ab6e-7043aa663011",alt:"image"})}),(0,o.jsxs)(e.p,{children:["APP1, APP2, APP3\uc758 Component\uac00 \uc788\ub2e4.",(0,o.jsx)(e.br,{}),"\r\nAPP1\uc5d0\uc11c APP3\uc5d0\uac8c \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud55c\ub2e4\uace0 \uac00\uc815\ud55c\ub2e4.",(0,o.jsx)(e.br,{}),"\r\nprops\ub97c \uc774\uc6a9\ud558\uc5ec \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\uae30 \uc704\ud574\uc11c\ub294 APP1, APP2, APP3\uc758 \uc21c\uc11c\ub85c \uc804\ub2ec\ud574\uc57c\ud55c\ub2e4.",(0,o.jsx)(e.br,{}),"\r\n\ud558\uc9c0\ub9cc ContextAPI\ub97c \uc774\uc6a9\ud558\uac8c \ub41c\ub2e4\uba74 APP1\uc5d0\uc11c APP3\uc5d0\uac8c \uc9c1\uc811 \uc804\ub2ec\ud560 \uc218 \uc788\ub2e4.",(0,o.jsx)(e.br,{}),"\r\n\uc989, ",(0,o.jsx)(e.code,{children:"props drilling"}),"\uc758 \ubb38\uc81c\uc810\uc744 \uac1c\uc120\ud560 \uc218 \uc788\ub2e4.",(0,o.jsx)(e.br,{})]}),(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"props drilling"})," \uc774\ub780?"]}),(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\ub9ac\uc561\ud2b8(React)\uc5d0\uc11c \ub370\uc774\ud130\ub97c \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\ub85c\ubd80\ud130 \ud558\uc704 \uacc4\uce35\uc758 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub85c \uc804\ub2ec\ud558\ub294 \uacfc\uc815\uc744 \uc758\ubbf8"}),"\n",(0,o.jsx)(e.li,{children:"\uc804\ub2ec \uacfc\uc815 \uc911 \ub370\uc774\ud130\uac00 \ubd88\ud544\uc694\ud55c \uacbd\uc6b0\uc5d0\ub3c4 \uc911\uac04 \uacc4\uce35\uc744 \ud1b5\ud574 \uc804\ub2ec\ud574\uc57c\ud558\ub294 \uacfc\uc815"}),"\n"]}),(0,o.jsxs)(e.p,{children:["\uc989, ContextAPI\ub294 \ub370\uc774\ud130\uac00 \ubd88\ud544\uc694\ud55c Component\uc5d0\uac8c \uc804\ub2ec\ud560 \ud544\uc694\uc5c6\uc774",(0,o.jsx)(e.br,{}),"\r\n",(0,o.jsx)(e.strong,{children:"\ub370\uc774\ud130\uac00 \ud544\uc694\ud55c Component\uc5d0\uac8c \uc9c1\uc811 \uc804\ub2ec\uc774 \uac00\ub2a5"}),"\ud558\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\ub2e4."]})]}),"\n",(0,o.jsx)(e.h2,{id:"contextapi\uc5d0-\uc0ac\uc6a9\ud558\ub294-\ubb38\ubc95",children:"ContextAPI\uc5d0 \uc0ac\uc6a9\ud558\ub294 \ubb38\ubc95"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"createContext"}),":\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Context \uc0dd\uc131\ud558\ub294 \ud568\uc218 \ubc0f Context \uac1d\uccb4\ub97c \ubc18\ud658"}),"\n",(0,o.jsx)(e.li,{children:"Provider\uc640 Consumer\ub97c \uc0dd\uc131 \uac00\ub2a5"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Provider"}),":\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Context\uac12\uc744 \uc81c\uacf5\ud558\ub294 Component"}),"\n",(0,o.jsx)(e.li,{children:"props\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac12\uc744 \uc124\uc815\ud558\uace0 \ud558\uc704 Component\uc5d0\uc11c \uc774 \uac12\uc744 \uc0ac\uc6a9"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Consumer"}),":\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Context\uac12\uc744 \uc18c\ube44\ud558\ub294 Component"}),"\n",(0,o.jsx)(e.li,{children:"Consumer Component\ub0b4\uc5d0 \ud568\uc218\uc758 Parameter\uac12\uc744 \uc774\uc6a9\ud558\uc5ec Context\uac12\uc744 \uc0ac\uc6a9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:'import React, { createContext } from "react";\r\n\r\nconst Info = createContext({ name: "JJamVa", greeting: "Hello World!" });\r\n\r\nconst Parent = () => {\r\n  return <Child1 />;\r\n};\r\n\r\nconst Child1 = () => {\r\n  return (\r\n    <Info.Consumer>\r\n      {(obj) => (\r\n        <div>\r\n          <h1>\uc548\ub155</h1>\r\n          <h2>{obj.name}</h2>\r\n          <Child2 />\r\n        </div>\r\n      )}\r\n    </Info.Consumer>\r\n  );\r\n};\r\n\r\nconst Child2 = () => {\r\n  return (\r\n    <>\r\n      <Info.Provider value={{ id: 1, age: 20 }}>\r\n        <Info.Consumer>\r\n          {({ id, age }) => (\r\n            <div>\r\n              {id}\ubc88, \ub098\uc774\ub294 {age}\uc138\r\n            </div>\r\n          )}\r\n        </Info.Consumer>\r\n      </Info.Provider>\r\n      <Child3 />\r\n    </>\r\n  );\r\n};\r\n\r\nconst Child3 = () => {\r\n  return (\r\n    <Info.Consumer>\r\n      {(value) => (\r\n        <div>\r\n          {value.name}\ub2d8, {value.greeting}\r\n        </div>\r\n      )}\r\n    </Info.Consumer>\r\n  );\r\n};\r\n\r\nexport default Parent;\n'})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/f7b58cd1-81d4-4c3c-ac54-cb8d710483a4",alt:"image"})}),"\n",(0,o.jsxs)(e.admonition,{type:"note",children:[(0,o.jsxs)(e.p,{children:["ContextAPI\ub97c \uc4f0\uae30 \uc704\ud574\uc11c\ub294 ",(0,o.jsx)(e.code,{children:"react"})," \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c \ubaa8\ub4c8\uc744 import\ud574\uc57c\ud55c\ub2e4.",(0,o.jsx)(e.br,{}),"\r\n",(0,o.jsx)(e.code,{children:"createContext"}),"\uc5d0 name\uacfc greeting\uc758 \uc804\ub2ec\ud558\uace0\uc790 \ud558\ub294 \uc18d\uc131\uc744 \uc124\uc815",(0,o.jsx)(e.br,{})]}),(0,o.jsxs)(e.p,{children:["Child1 Component\uc5d0\uc11c ",(0,o.jsx)(e.code,{children:"<Info.**Consumer**>"}),"\ub97c \uc774\uc6a9\ud558\uc5ec Info\uc5d0\uc11c \uc815\uc758\ud55c createContext\uac12\uc744 \ucf5c\ubc31 \ud568\uc218\ub85c \ud638\ucd9c\ud558\uc5ec \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4.",(0,o.jsx)(e.br,{})]}),(0,o.jsxs)(e.p,{children:["Child2 Component\uc5d0\uc11c\ub294 ",(0,o.jsx)(e.code,{children:"<Info.**Provier**>"}),"\ub97c \ud1b5\ud574 \ubcc0\uacbd\ub41c \uac12\uc744 \uc0ac\uc6a9\ud558\uc5ec,",(0,o.jsx)(e.br,{}),"\r\n",(0,o.jsx)(e.code,{children:"<Info.Consumer>"}),"\uc744 \ud1b5\ud574 \ubcc0\uacbd\ub41c ContextAPI \uac12\uc744 \ud638\ucd9c\ud558\uace0 \uc788\ub2e4.",(0,o.jsx)(e.br,{}),"\r\n",(0,o.jsx)(e.code,{children:"<Info.Provider>"})," \ubc16\uc5d0 Child3 Component\ub97c \ud638\ucd9c\ud558\uace0 \uc788\ub2e4",(0,o.jsx)(e.br,{}),"\r\n\uc989, ",(0,o.jsx)(e.code,{children:"<Info.Provider>"}),"\uc758 Context \uac12 \ubcc0\uacbd \uc694\uccad\uc774 \ub418\uc9c0 \uc54a\ub294\ub2e4.",(0,o.jsx)(e.br,{})]}),(0,o.jsxs)(e.p,{children:["Child3 Component\ub294 \uae30\uc874\uc758 \uc124\uc815\ub41c ",(0,o.jsx)(e.code,{children:"createContext"}),"\uc758 \ub370\uc774\ud130\uc778 name, greeting\uc758 \uc18d\uc131\uac12\uc744 \uc774\uc6a9\ud558\uace0 \uc788\ub2e4.",(0,o.jsx)(e.br,{})]})]}),"\n",(0,o.jsxs)(e.admonition,{type:"danger",children:[(0,o.jsx)(e.h3,{id:"\uc8fc\uc758\uc0ac\ud56d",children:"\uc8fc\uc758\uc0ac\ud56d"}),(0,o.jsx)(e.h4,{id:"1-consumer",children:"1. Consumer"}),(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Context\uc758 \uac12\uc774 \ud544\uc694 \uc5c6\ub354\ub77c\ub3c4 Consumer\uc758 \uc790\uc2dd\uc740 \ud0dc\uadf8\ub85c \uac00\uc9c8\uc218 \uc5c6\ub2e4."}),"\n",(0,o.jsx)(e.li,{children:"\ud558\ub098\uc758 \ud568\uc218\ub85c \uac10\uc2f8\uc918\uc57c\ud55c\ub2e4."}),"\n"]}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",metastring:'title="\uc798\ubabb\ub41c \uc608\uc2dc \ucf54\ub4dc"',children:"<Info.Consumer>\r\n  <div>\r\n    <h1>\uc548\ub155</h1>\r\n    {(obj) => <h2>{obj.name}</h2>}\r\n    <Child2 />\r\n  </div>\r\n</Info.Consumer>\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",metastring:'title="\uc62c\ubc14\ub978 \ucf54\ub4dc"',children:"<Info.Consumer>\r\n  {(obj) => (\r\n    <div>\r\n      <h1>\uc548\ub155</h1>\r\n      <h2>{obj.name}</h2>\r\n      <Child2 />\r\n    </div>\r\n  )}\r\n</Info.Consumer>\n"})}),(0,o.jsx)(e.h4,{id:"2-provier",children:"2. Provier"}),(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Provider\uc744 \uc774\uc6a9\uc2dc \ubcc0\uacbd\ud558\uace0\uc790 \ud558\ub294 \uac12\uc774 \uc5c6\uc744 \uc2dc, \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4"}),"\n",(0,o.jsx)(e.li,{children:"Provider\ub97c \uc0ac\uc6a9\ud558\uc5ec Context\ub97c \uad6c\ub3c5\ud558\ub294 \ubaa8\ub4e0 \ud558\uc704 \ucef4\ud3ec\ub10c\ud2b8\uac00 Provider\uac00 \uc81c\uacf5\ud558\ub294 \uac12\uc744 \uc0ac\uc6a9"}),"\n",(0,o.jsx)(e.li,{children:"Provider\uc640 \uac19\uc774 \uacf5\uc874\ud560 \uc218 \uc788\uc9c0\ub9cc Provider\uc758 \uc790\uc2dd\uc73c\ub85c \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0, \uc774\uc804\uc758 Context \uac12\uc774 \uc0ac\uc6a9"}),"\n",(0,o.jsx)(e.li,{children:"Provider\uc758 \uc790\uc2dd\uc73c\ub85c Consumer\uac00 \uc874\uc7ac\ud574\uc57c \uac12\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc804\ub2ec\ub418\uace0 \uc0ac\uc6a9 \uac00\ub2a5"}),"\n"]}),(0,o.jsx)(e.h4,{id:"3-contextapi-\uc0ac\uc6a9-\uc720\uc758",children:"3. ContextAPI \uc0ac\uc6a9 \uc720\uc758"}),(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Context API\ub294 \uc804\uc5ed \uacf5\uac04\uc5d0 \uac12\uc744 \uc800\uc7a5\ud558\ubbc0\ub85c \uba54\ubaa8\ub9ac \uc0ac\uc6a9\uc5d0 \uc8fc\uc758\ud574\uc57c\ud558\uba70, \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0\ub9cc \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \uad8c\uc7a5"}),"\n"]})]})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(x,{...n})}):x(n)}},989:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>d});var t=r(758);const o={},i=t.createContext(o);function s(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);
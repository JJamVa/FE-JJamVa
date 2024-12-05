"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1107],{5772:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"frontend/Typescript/\ud0c0\uc2a4\uc640\ub9ac\uc561\ud2b8","title":"TypeScript + React","description":"React\uc5d0\uc11c TypeScript\uc73c\ub85c \uc124\uce58","source":"@site/docs/frontend/10-Typescript/16-\ud0c0\uc2a4\uc640\ub9ac\uc561\ud2b8.md","sourceDirName":"frontend/10-Typescript","slug":"/frontend/Typescript/\ud0c0\uc2a4\uc640\ub9ac\uc561\ud2b8","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/\ud0c0\uc2a4\uc640\ub9ac\uc561\ud2b8","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/10-Typescript/16-\ud0c0\uc2a4\uc640\ub9ac\uc561\ud2b8.md","tags":[],"version":"current","sidebarPosition":16,"frontMatter":{},"sidebar":"frontend","previous":{"title":"Generic","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/generic"},"next":{"title":"tuple type","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/tupletype"}}');var s=r(6070),c=r(989);const i={},p="TypeScript + React",o={},a=[{value:"React\uc5d0\uc11c TypeScript\uc73c\ub85c \uc124\uce58",id:"react\uc5d0\uc11c-typescript\uc73c\ub85c-\uc124\uce58",level:2},{value:"React \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uc0ac\uc6a9",id:"react-\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8-\uc0ac\uc6a9",level:2},{value:"JSX \ud0c0\uc785\uc9c0\uc815",id:"jsx-\ud0c0\uc785\uc9c0\uc815",level:3},{value:"Component \ud0c0\uc785 \uc9c0\uc815",id:"component-\ud0c0\uc785-\uc9c0\uc815",level:3},{value:"props \ud0c0\uc785 \uc9c0\uc815",id:"props-\ud0c0\uc785-\uc9c0\uc815",level:3},{value:"useState \ud0c0\uc785 \uc9c0\uc815",id:"usestate-\ud0c0\uc785-\uc9c0\uc815",level:3}];function l(n){const e={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"typescript--react",children:"TypeScript + React"})}),"\n",(0,s.jsx)(e.h2,{id:"react\uc5d0\uc11c-typescript\uc73c\ub85c-\uc124\uce58",children:"React\uc5d0\uc11c TypeScript\uc73c\ub85c \uc124\uce58"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud560 \uacbd\ub85c\uc5d0\uc11c \ud130\ubbf8\ub110\uc5d0 ",(0,s.jsx)(e.code,{children:"npx create-react-app \ud504\ub85c\uc81d\ud2b8\uc774\ub984 --template typescript"}),"\uc785\ub825"]}),"\n"]}),"\n",(0,s.jsxs)(e.admonition,{type:"caution",children:[(0,s.jsxs)(e.p,{children:["\ud504\ub85c\uc81d\ud2b8\ub97c \uc124\uce58 \ud6c4, \uc2e4\ud589\ud558\uba74 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uae30 \ub54c\ubb38\uc5d0 \uba87 \uac00\uc9c0 \ud30c\uc77c\ub4e4\uc744 \uc81c\uac70\ud558\uba74 \ub41c\ub2e4.",(0,s.jsx)(e.br,{}),"\r\n\ud504\ub85c\uc81d\ud2b8 \uc548 src\ud3f4\ub354 \uacbd\ub85c\uc5d0 \uc5ec\ub7ec \ud30c\uc77c\ub4e4\uc774 \uc874\uc7ac\ud55c\ub2e4.",(0,s.jsx)(e.br,{})]}),(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\uc874\uc7ac\ud574\uc57c\ud560 \ud30c\uc77c"})}),(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"App.css"}),"\n",(0,s.jsx)(e.li,{children:"App.tsx"}),"\n",(0,s.jsx)(e.li,{children:"index.css"}),"\n",(0,s.jsx)(e.li,{children:"index.tsx"}),"\n"]}),(0,s.jsxs)(e.p,{children:["\uc704\uc758 \ubaa9\ub85d\uc744 \uc81c\uc678\ud55c \ud30c\uc77c\ub4e4\uc740 \uc804\ubd80 \uc0ad\uc81c\ud558\uba74 \ub41c\ub2e4.",(0,s.jsx)(e.br,{}),"\r\nApp.js\uc640 \uac19\uc740 \ud30c\uc77c\uc740 react\ud504\ub85c\uc81d\ud2b8\ub97c \uc2e4\ud589\uc2dc\ud0ac \uc2dc, App.tsx\ud30c\uc77c\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c \ucef4\ud30c\uc77c\uc774 \ub418\uc5b4 \uc0dd\uc131\ub418\uae30 \ub54c\ubb38\uc5d0 \ubb38\uc81c\ub294 \uc5c6\ub2e4.",(0,s.jsx)(e.br,{})]})]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["\ub9cc\uc57d \uc0dd\uc131\ub41c React\uac00 JS\uae30\ubc18\uc774\uace0, TS\ub85c \ubcc0\uacbd\ud558\uace0 \uc2f6\ub2e4\uba74",(0,s.jsx)(e.br,{}),"\r\n\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131/\uc124\uce58 \uacbd\ub85c\uc5d0\uc11c ",(0,s.jsx)(e.br,{}),"\r\n",(0,s.jsx)(e.code,{children:"npm install --save typescript @types/node @types/react @types/react-dom @types/jest"}),"\uc744 \uc785\ub825",(0,s.jsx)(e.br,{}),"\r\n\uc124\uce58 \ud6c4, ",(0,s.jsx)(e.strong,{children:".js\ud30c\uc77c\uc740 .ts\ud30c\uc77c\ub85c .jsx\ub294 .tsx\ub85c \ubcc0\uacbd"}),"\ud558\uba74 \ub41c\ub2e4.",(0,s.jsx)(e.br,{})]})}),"\n",(0,s.jsx)(e.h2,{id:"react-\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8-\uc0ac\uc6a9",children:"React \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uc0ac\uc6a9"}),"\n",(0,s.jsx)(e.h3,{id:"jsx-\ud0c0\uc785\uc9c0\uc815",children:"JSX \ud0c0\uc785\uc9c0\uc815"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:".tsx"}),"\ud30c\uc77c\uc5d0 \ubcc0\uc218 \uc0dd\uc131 \ubc0f return\uac12\uc774 html \ud0dc\uadf8 \ubc0f Component\uc77c \uacbd\uc6b0 \ud0c0\uc785\uc744 \uc791\uc131"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"let title: JSX.Element = <h1>JJamVa</h1>;\r\nlet content: JSX.Element = <p>\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4.</p>;\n"})}),"\n",(0,s.jsxs)(e.admonition,{type:"note",children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:":JSX.Element"}),"\ub3c4 \uc0ac\uc6a9\ud558\uc9c0\ub9cc ",(0,s.jsx)(e.code,{children:":React.ReactNode"}),"\ub3c4 \uc0ac\uc6a9\uac00\ub2a5\ud558\ub2e4.",(0,s.jsx)(e.br,{})]}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"let title: React.ReactNode = <h1>JJamVa</h1>;\r\nlet content: React.ReactNode = <p>\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4.</p>;\n"})})]}),"\n",(0,s.jsx)(e.h3,{id:"component-\ud0c0\uc785-\uc9c0\uc815",children:"Component \ud0c0\uc785 \uc9c0\uc815"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"react\uc5d0\uc11c Component\ub294 \ud568\uc218\uc640 \uac19\uc740 \uc874\uc7ac\uc774\uba70, \ud568\uc218\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 \ud0c0\uc785\uc9c0\uc815\uc744 \ud574\uc57c\ud55c\ub2e4."}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:'import React from "react";\r\nimport "./App.css";\r\n\r\nfunction MyInfo(): JSX.Element {\r\n  return (\r\n    <>\r\n      <h1>\uc548\ub155\ud558\uc138\uc694!</h1>\r\n      <h2>\uc81c\uc774\ub984\uc740 JJamVa \uc785\ub2c8\ub2e4.</h2>\r\n      <h3>\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 \uc785\ub2c8\ub2e4.</h3>\r\n    </>\r\n  );\r\n}\r\n\r\nfunction App() {\r\n  return <MyInfo />;\r\n}\r\n\r\nexport default App;\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/66546f0a-e386-48e9-bacd-44b1bef9cf14",alt:"image"})}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ud568\uc218\uc640 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc740 \uac19\ub2e4.",(0,s.jsx)(e.br,{}),"\r\n\ub2e4\ub9cc return \uac12\uc774 html\ud0dc\uadf8\uc774\uae30 \ub54c\ubb38\uc5d0 return \uac12\uc5d0 \ub300\ud55c \ud0c0\uc785\uc744 \uc798 \uc9c0\uc815\ud574\uc57c \uc624\ub958 \ubc1c\uc0dd\uc744 \ub9c9\uc744 \uc218 \uc788\ub2e4.",(0,s.jsx)(e.br,{})]})}),"\n",(0,s.jsx)(e.h3,{id:"props-\ud0c0\uc785-\uc9c0\uc815",children:"props \ud0c0\uc785 \uc9c0\uc815"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \uc774\uc6a9 \uc2dc, Component\uc5d0\uac8c props\ub97c \uc804\ub2ec\ud558\uace0 \ubc1b\uc744 \uacbd\uc6b0 \ud0c0\uc785\uc9c0\uc815\uc744 \ud574\uc57c\ub41c\ub2e4.",(0,s.jsx)(e.br,{})]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:'import React from "react";\r\nimport "./App.css";\r\n\r\ninterface MyInfoProps {\r\n  name: string;\r\n  job: string;\r\n}\r\n\r\nfunction MyInfo(props: MyInfoProps): JSX.Element {\r\n  return (\r\n    <>\r\n      <h1>\uc548\ub155\ud558\uc138\uc694!</h1>\r\n      <h2>\uc81c\uc774\ub984\uc740 {props.name} \uc785\ub2c8\ub2e4.</h2>\r\n      <h3>{props.job} \uc785\ub2c8\ub2e4.</h3>\r\n    </>\r\n  );\r\n}\r\n\r\nfunction App() {\r\n  return <MyInfo name="JJamVa" job="\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790" />;\r\n}\r\n\r\nexport default App;\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/66546f0a-e386-48e9-bacd-44b1bef9cf14",alt:"image"})}),"\n",(0,s.jsxs)(e.admonition,{type:"note",children:[(0,s.jsxs)(e.p,{children:["props\ub294 \uac1d\uccb4\ud615\ud0dc\ub85c \ubb36\uc5ec \uc804\ub2ec\ub418\uae30 \ub54c\ubb38\uc5d0 \ud0c0\uc785\uc744 \uac1d\uccb4\uc758 \uc18d\uc131\uc73c\ub85c \uc124\uc815\ud574\uc57c\ub41c\ub2e4.",(0,s.jsx)(e.br,{})]}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"function MyInfo(props: { name: string; job: string }): JSX.Element {\r\n  return (\r\n    <>\r\n      <h1>\uc548\ub155\ud558\uc138\uc694!</h1>\r\n      <h2>\uc81c\uc774\ub984\uc740 {props.name} \uc785\ub2c8\ub2e4.</h2>\r\n      <h3>{props.job} \uc785\ub2c8\ub2e4.</h3>\r\n    </>\r\n  );\r\n}\n"})}),(0,s.jsxs)(e.p,{children:["\ud55c\ubc88\ub9cc \uc0ac\uc6a9\ub420 \uac1d\uccb4 \ud0c0\uc785\uc774\ub77c\uba74 \uc704\uc758 \ucf54\ub4dc\uc640 \uac19\uc774 \uc9c1\uc811 props\uc5d0 \uc18d\uc131\uc5d0 \ub300\ud55c \ud0c0\uc785\uc744 \uae30\uc785\ud558\uba74 \ub41c\ub2e4.",(0,s.jsx)(e.br,{}),"\r\nprops\uc5d0 \ub300\ud55c \ud0c0\uc785 \uc815\ubcf4\ub97c \uc790\uc8fc \uc0ac\uc6a9\ud560 \uacbd\uc6b0 ",(0,s.jsx)(e.strong,{children:"type alias"})," \ud639\uc740 ",(0,s.jsx)(e.strong,{children:"interface"}),"\ub85c \ub9cc\ub4e4\uc5b4 \uc0ac\uc6a9\ud558\uba74 \uc7ac\uc0ac\uc6a9\uc131 \uce21\uba74\uc5d0\uc11c \uc88b\ub2e4.",(0,s.jsx)(e.br,{})]})]}),"\n",(0,s.jsx)(e.h3,{id:"usestate-\ud0c0\uc785-\uc9c0\uc815",children:"useState \ud0c0\uc785 \uc9c0\uc815"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc774\uc6a9\ud558\uc5ec useState\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \uc0c1\ud0dc\uc5d0 \ub300\ud574 \ud0c0\uc785 \uc9c0\uc815\uc744 \uc815\uc758"}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"useState<\ud0c0\uc785>(\ucd08\uae30\uac12)"}),"\uc73c\ub85c \uc791\uc131\ud558\uc5ec \uc0ac\uc6a9"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:'import React, { useState } from "react";\r\nimport "./App.css";\r\n\r\ninterface Info {\r\n  name: string;\r\n  job: string;\r\n}\r\n\r\nfunction MyInfo(props: Info): JSX.Element {\r\n  let [time, setTime] = useState<number>(0);\r\n  function setIncrease(): void {\r\n    setTime(time + 1);\r\n  }\r\n\r\n  return (\r\n    <>\r\n      <h1>\uc548\ub155\ud558\uc138\uc694!</h1>\r\n      <h2>\uc81c\uc774\ub984\uc740 {props.name} \uc785\ub2c8\ub2e4.</h2>\r\n      <h3>{props.job} \uc785\ub2c8\ub2e4.</h3>\r\n      <p>\uac1c\ubc1c \uae30\uac04\uc740 {time}\ub144 \uc785\ub2c8\ub2e4.</p>\r\n      <button onClick={setIncrease}>\ud074\ub9ad!</button>\r\n    </>\r\n  );\r\n}\r\n\r\nfunction App() {\r\n  return <MyInfo name="JJamVa" job="\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790" />;\r\n}\r\n\r\nexport default App;\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/222340c8-8899-4440-9215-78d7ce7c9409",alt:"image"})}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["useState\uc758 \uc0c1\ud0dc\uac12\ub3c4 \ud0c0\uc785\uc9c0\uc815\uc774 \uac00\ub2a5\ud558\ub2e4.",(0,s.jsx)(e.br,{}),"\r\nuseState\ub97c \uc774\uc6a9\ud558\uc5ec \ub85c\uc9c1\uc744 \uad6c\ud604 \uc2dc, \uc0c1\ud0dc \ubcc0\uacbd \ud568\uc218\ub85c \uc9c0\uc815\ud558\uc9c0 \uc54a\uc740 \ud0c0\uc785\uc73c\ub85c \ubcc0\uacbd\ud560 \uacbd\uc6b0 \uc624\ub958 \ubc1c\uc0dd",(0,s.jsx)(e.br,{})]})})]})}function d(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},989:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>p});var t=r(758);const s={},c=t.createContext(s);function i(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function p(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);
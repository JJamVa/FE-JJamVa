"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[2180],{4929:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"frontend/Typescript/Type\uacfcreadonly","title":"type alias\uc640 readonly","description":"type alias\ub780?","source":"@site/docs/frontend/10-Typescript/5-Type\uacfcreadonly.md","sourceDirName":"frontend/10-Typescript","slug":"/frontend/Typescript/Type\uacfcreadonly","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/Type\uacfcreadonly","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"frontend","previous":{"title":"Narrowing & Assertion","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/Narrowing\uacfcAssertion"},"next":{"title":"Literal Type\uacfc as const","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/literalType"}}');var a=r(6070),t=r(989);const l={},i="type alias\uc640 readonly",o={},d=[{value:"type alias\ub780?",id:"type-alias\ub780",level:2},{value:"readonly",id:"readonly",level:2}];function c(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"type-alias\uc640-readonly",children:"type alias\uc640 readonly"})}),"\n",(0,a.jsx)(n.h2,{id:"type-alias\ub780",children:"type alias\ub780?"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\uc0c8\ub85c\uc6b4 \ud0c0\uc785\uc758 \uc774\ub984\uc744 \uc815\uc758\ud558\ub294\ub370 \uc0ac\uc6a9"}),"\n",(0,a.jsx)(n.li,{children:"\uae30\uc874\uc758 \ud0c0\uc785\ub4e4\uc744 \uc870\ud569\ud558\uc5ec \uc0c8\ub85c\uc6b4 \ud0c0\uc785\uc744 \ub9cc\ub4e4 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \uae30\ub2a5"}),"\n",(0,a.jsx)(n.li,{children:"\ubc18\ubcf5\ub418\ub294 \ubcf5\uc7a1\ud55c \ud0c0\uc785\uc758 \uc815\uc758\ub97c \uac04\uc18c\ud654\ud558\uc5ec, \ucf54\ub4dc\uc758 \uac00\ub3c5\uc131\uc744 \ud5a5\uc0c1"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"type"}),"\uc774\ub77c\ub294 \ud0a4\uc6cc\ub4dc\ub97c \uc0ac\uc6a9"]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'let value1: string | boolean | number | undefined = 12;\r\nlet value2: string | boolean | number | undefined = undefined;\r\nlet value3: string | boolean | number | undefined = "hello";\r\n\r\nlet obj1: { name: string | undefined; age: number | undefined } = {\r\n  name: "JJamVa",\r\n  age: 27,\r\n};\r\nlet obj2: { name: string | undefined; age: number | undefined } = {\r\n  name: "park",\r\n  age: 15,\r\n};\n'})}),(0,a.jsxs)(n.p,{children:["\uc704\uc640 \uac19\uc740 \ucf54\ub4dc\uc5d0\uc11c \ubcc0\uc218\uc0dd\uc131\uc2dc \uc77c\uc77c\uc774 \ubcc0\uc218\uc758 \ud0c0\uc785\uc744 \uc124\uc815\ud574\uc57c\ud558\ub294 \ubc88\uac70\ub85c\uc6c0\uacfc \uac00\ub3c5\uc131 \uc800\ud558\uac00 \uc788\ub2e4.",(0,a.jsx)(n.br,{}),"\r\n\uc911\ubcf5\ub41c \ud0c0\uc785\uc758 \ubcc0\uc218\ub97c \ud558\ub098\ub85c \uc124\uc815\ud560 \uc218 \uc788\ub294 ",(0,a.jsx)(n.code,{children:"type"}),"\uc774 \uc788\ub2e4.",(0,a.jsx)(n.br,{})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'type T = string | boolean | number | undefined;\r\n\r\nlet value1: T = 12;\r\nlet value2: T = undefined;\r\nlet value3: T | null = "hello";\r\n\r\ntype O = { name: string | undefined; age: number | undefined };\r\n\r\nlet obj1: O = { name: "JJamVa", age: 27 };\r\nlet obj2: O = { name: "park", age: 15 };\n'})}),(0,a.jsxs)(n.p,{children:["type\uc744 \uc774\uc6a9\ud558\uc5ec \uc911\ubcf5\uc73c\ub85c \uc0ac\uc6a9\ub420 \ud0c0\uc785\uc744 \uc815\uc758\ud558\uc5ec \ucf54\ub4dc\uc758 \uac00\ub3c5\uc131 \ud5a5\uc0c1 \ubc0f \uc720\uc9c0\ubcf4\uc218\uc5d0 \uc6a9\uc774\ud574\uc84c\ub2e4.",(0,a.jsx)(n.br,{})]})]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"type alias \ud569\uce58\uae30(&)"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'type Name = { name: string };\r\ntype Age = { age: number };\r\ntype Info = Name & Age;\r\n\r\nlet myInfo: Info = { name: "JJamVa", age: 27 };\n'})}),(0,a.jsxs)(n.p,{children:["\uc704\uc758 \ucf54\ub4dc\uc5d0\uc11c Info\ub294 Name\uacfc Age\uc758 type alias\ub97c ",(0,a.jsx)(n.code,{children:"&"})," \uc5f0\uc0b0\uc790\ub97c \ud1b5\ud574 \ub450\uac1c\uc758 \ud0c0\uc785\uc744 \ud569\uccd0 \ub9cc\ub4e4\uc5b4\uc9c4 \ud0c0\uc785\uc774\ub2e4.",(0,a.jsx)(n.br,{})]})]}),"\n",(0,a.jsxs)(n.admonition,{type:"danger",children:[(0,a.jsx)(n.p,{children:"type \ud0a4\uc6cc\ub4dc\ub294 \uc7ac\uc815\uc758\uac00 \ubd88\uac00\ub2a5"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="type \uc7ac\uc815\uc758 \ubd88\uac00\ub2a5 \ucf54\ub4dc"',children:"type T = string | number;\r\ntype T = undefined;\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"readonly",children:"readonly"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\ubcc0\uc218\ub098 \uc18d\uc131\uc744 \uc77d\uae30 \uc804\uc6a9\uc73c\ub85c \ub9cc\ub4e4 \ub54c \uc0ac\uc6a9"}),"\n",(0,a.jsx)(n.li,{children:"\ubd88\ubcc0\uc131(Immutability)\uc744 \uc720\uc9c0\ud558\uace0 \ucf54\ub4dc\uc758 \uc548\uc815\uc131\uc744 \ub192\uc774\ub294 \ub370 \ub3c4\uc6c0"}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\uadf8\ub7fc JavaScript\uc758 const\ub97c \uc0ac\uc6a9\ud574\ub3c4 \ub418\uc9c0\uc54a\ub098\uc694??"})}),(0,a.jsxs)(n.p,{children:["\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 const\ub3c4 \ubcc0\uc218\uc758 \ud560\ub2f9\uc744 \ub9c9\uae30\uc704\ud574 \uc0ac\uc6a9\ub41c\ub2e4.",(0,a.jsx)(n.br,{})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="JS\uc5d0\uc11c const \uc5d0\ub7ec \ubc1c\uc0dd"',children:"// value\ubcc0\uc218 \uac12 \uc7ac\ud560\ub2f9 \uc624\ub958\r\nconst value = 10;\r\nvalue = 20;\n"})}),(0,a.jsxs)(n.p,{children:["\uc704\uc758 \ucf54\ub4dc\uc640 \uac19\uc774 const\ub97c \ud1b5\ud574 value\uc758 \uac12\uc744 \uc7ac\ud560\ub2f9\ud558\ub294 \uac83\uc5d0 \ub300\ud574 \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\uc2dc\ud0a8\ub2e4.",(0,a.jsx)(n.br,{}),"\r\n\uc774\uc720\ub294 ",(0,a.jsx)(n.strong,{children:"primtive \ud0c0\uc785"})," \ub54c\ubb38\uc774\uba70, ",(0,a.jsx)(n.strong,{children:"\uac12\uc774 \ubcc0\uacbd\ub420 \uc218 \uc5c6\ub294 \ud2b9\uc9d5"}),"\uc744 \uac00\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38\uc774\ub2e4.",(0,a.jsx)(n.br,{})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'//\uac1d\uccb4\r\nconst obj = {\r\n  name: "hello",\r\n  type: "object",\r\n};\r\nobj.name = "JJamVa";\r\nconsole.log(obj); // {name:"JJamVa", type:"object"}\r\n\r\n//\ubc30\uc5f4\r\nconst array = [\r\n  [1, 2, 3],\r\n  [4, 5, 6],\r\n];\r\narray[0][2] = 300;\r\nconsole.log(array); // [[1,2,300],[4,5,6]]\n'})}),(0,a.jsxs)(n.p,{children:["\ubd84\uba85 obj\uc640 array\ub3c4 const\ub97c \uc0ac\uc6a9\ud588\uc9c0\ub9cc \uac12\uc758 \ubcc0\ud654\ub97c \uc8fc\uc5c8\uc744 \ub54c, \ubcc0\ud654\uac00 \ub41c\ub2e4\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,a.jsx)(n.br,{}),"\r\n\uc774\uc720\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \uac1d\uccb4\uc758 ",(0,a.jsx)(n.strong,{children:"\uc595\uc740 \ubd88\ubcc0\uc131"})," \ub54c\ubb38\uc5d0 \ubc1c\uc0dd\ud55c \ubb38\uc81c\uc774\ub2e4.",(0,a.jsx)(n.br,{})]}),(0,a.jsxs)(n.p,{children:["\uc774\ub7f0 \ubb38\uc81c\ub4e4\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud574 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c ",(0,a.jsx)(n.strong,{children:"readonly"}),"\ub97c \uc0ac\uc6a9"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'type T = {\r\n  readonly name?: string;\r\n  type?: string;\r\n};\r\n\r\nconst obj: T = {\r\n  name: "hello",\r\n  type: "object",\r\n};\r\nobj.name = "JJamVa"; // \ubcc0\uacbd \ubd88\uac00\ub2a5\r\nobj.type = "Hi"; // \ubcc0\uacbd \uac00\ub2a5\n'})}),(0,a.jsxs)(n.p,{children:["type\uc744 \ud1b5\ud574 name\uc774\ub77c\ub294 \uc18d\uc131\uc5d0 readonly\ub97c \uc0ac\uc6a9\ud558\uc5ec name\uc18d\uc131\uc744 \ubcc0\uacbd\ubd88\uac00\ub2a5\ud558\uac8c \ub9cc\ub4e4\uc5c8\ub2e4.",(0,a.jsx)(n.br,{}),"\r\n\ud558\uc9c0\ub9cc type\uc758 \uacbd\uc6b0 readonly\ub97c \uc791\uc131\ud558\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc5d0 type\uc18d\uc131\uc740 \ubcc0\uacbd\uc774 \ub41c\ub2e4.",(0,a.jsx)(n.br,{})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const array: ReadonlyArray<ReadonlyArray<number>> = [\r\n  [1, 2, 3],\r\n  [4, 5, 6],\r\n];\r\narray[0][2] = 300; //\uc5d0\ub7ec \ubc1c\uc0dd\n"})}),(0,a.jsxs)(n.p,{children:["\ubc30\uc5f4\uacfc \uac19\uc740 \uacbd\uc6b0 ",(0,a.jsx)(n.strong,{children:"ReadonlyArray"}),"\ub97c \ud1b5\ud574 \uc7ac\ud560\ub2f9\uc744 \ub9c9\uc744 \uc218 \uc788\ub2e4.",(0,a.jsx)(n.br,{})]})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},989:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var s=r(758);const a={},t=s.createContext(a);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);
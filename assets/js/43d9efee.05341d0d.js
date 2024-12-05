"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[3634],{8259:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"frontend/Typescript/implements","title":"implements","description":"implements\ub780?","source":"@site/docs/frontend/10-Typescript/22-implements.md","sourceDirName":"frontend/10-Typescript","slug":"/frontend/Typescript/implements","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/implements","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/10-Typescript/22-implements.md","tags":[],"version":"current","sidebarPosition":22,"frontMatter":{},"sidebar":"frontend","previous":{"title":".d.ts","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/d.ts"},"next":{"title":"object \ub3d9\uc801 \uc18d\uc131 \ubc0f \ubcc0\ud658","permalink":"/FE-TIL-JJamVa/docs/frontend/Typescript/object\ud0c0\uc785\ubcc0\ud658"}}');var t=r(6070),i=r(989);const l={},c="implements",o={},d=[{value:"implements\ub780?",id:"implements\ub780",level:2}];function a(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"implements",children:"implements"})}),"\n",(0,t.jsx)(n.h2,{id:"implements\ub780",children:"implements\ub780?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ud074\ub798\uc2a4\uac00 \ud2b9\uc815 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\ub294 \uac83\uc744 \ub098\ud0c0\ub0b4\ub294 \ud0a4\uc6cc\ub4dc"}),"\n",(0,t.jsx)(n.li,{children:"class\uac00 interface\uc758 \ubaa8\ub4e0 \uba64\ubc84(\uc18d\uc131 & \uba54\uc11c\ub4dc)\uac00 \ucda9\uc871\uc774 \ub418\ub294\uc9c0 \ud655\uc778"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Shape {\r\n  len: number;\r\n  area(): number;\r\n}\r\n\r\nclass Square implements Shape {\r\n  len: number;\r\n\r\n  constructor(len: number) {\r\n    this.len = len;\r\n  }\r\n\r\n  area(): number {\r\n    return Math.pow(this.len, 2);\r\n  }\r\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Shape\ub294 interface\ub97c \ud1b5\ud574 \uc18d\uc131\uc744 \uc815\uc758\ud588\ub2e4.",(0,t.jsx)(n.br,{}),"\r\nSquare\ub77c\ub294 class\ub97c \ud1b5\ud574 Shape\ub97c implements\ub97c \ud588\ub2e4.",(0,t.jsx)(n.br,{}),"\r\n\uc989, Shape\uc5d0 \uc815\uc758\ub41c \uc18d\uc131\uc774 Square\uc5d0 \uc798 \uc0ac\uc6a9\ud588\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uc791\uc5c5\uc774\ub2e4.",(0,t.jsx)(n.br,{}),"\r\n\uc18d\uc131 len\uacfc \uba54\uc11c\ub4dc area\uc758 \ud0c0\uc785\uacfc \uc77c\uce58\ud558\uae30 \ub54c\ubb38\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uace0 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud55c\ub2e4.",(0,t.jsx)(n.br,{})]})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["interface\uc5d0\uc11c \uc815\uc758\ub41c \uba64\ubc84(\uc18d\uc131 & \uba54\uc18c\ub4dc)\uc758 \uc774\ub984\uacfc \ud0c0\uc785\uc774 \uc77c\uce58\ud574\uc57c \ud558\uba70, \uc77c\uce58\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4.\r\n",(0,t.jsx)(n.strong,{children:"\ud0c0\uc785\uc744 \uc9c0\uc815\ud558\uc9c0 \uc54a\uace0 class\uc758 \uba64\ubc84\ub85c \uc815\uc758\ud560 \uacbd\uc6b0, \ud0c0\uc785\uc740 any"}),"\uac00 \ub418\uba70 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd"]}),"\n"]})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"extends\uc640 implements\uc758 \ucc28\uc774\uc810"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"extends"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uc0c1\uc18d\uc758 \uac1c\ub150\uc744 \uac00\uc9d0(\ud655\uc7a5\uc131)"}),"\n",(0,t.jsx)(n.li,{children:"\ud558\ub098\uc758 \ud074\ub798\uc2a4\uac00 \ub2e4\ub978 \ud074\ub798\uc2a4\ub97c \uae30\ubc18\uc73c\ub85c \ud655\uc7a5\ub418\uc5b4 \uc0c8\ub85c\uc6b4 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4dc\ub294 \uac83"}),"\n",(0,t.jsx)(n.li,{children:"\uad00\uacc4: \ud074\ub798\uc2a4 - \ud074\ub798\uc2a4, \uc778\ud130\ud398\uc774\uc2a4 - \uc778\ud130\ud398\uc774\uc2a4"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"implements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ud074\ub798\uc2a4\uc758 \uc18d\uc131 \uac80\uc0ac\ub97c \uc704\ud55c \uc6a9\ub3c4"}),"\n",(0,t.jsx)(n.li,{children:"\ud074\ub798\uc2a4\uac00 \ud2b9\uc815 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc815\uc758\ub41c \uba64\ubc84(\uc18d\uc131 & \uba54\uc18c\ub4dc)\ub85c \uad6c\ud604"}),"\n",(0,t.jsx)(n.li,{children:"\uad00\uacc4: \uc778\ud130\ud398\uc774\uc2a4 - \ud074\ub798\uc2a4"}),"\n"]}),"\n"]}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},989:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var s=r(758);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
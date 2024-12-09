"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[3753],{2483:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"frontend/React/Axios","title":"Axios","description":"Axios\ub780?","source":"@site/docs/frontend/9-React/19-Axios.md","sourceDirName":"frontend/9-React","slug":"/frontend/React/Axios","permalink":"/FE-TIL-JJamVa/docs/frontend/React/Axios","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{},"sidebar":"frontend","previous":{"title":"useContext","permalink":"/FE-TIL-JJamVa/docs/frontend/React/useContext"},"next":{"title":"Custom Hook","permalink":"/FE-TIL-JJamVa/docs/frontend/React/CustomHook"}}');var i=s(6070),t=s(989);const o={},c="Axios",d={},l=[{value:"Axios\ub780?",id:"axios\ub780",level:2},{value:"Axios \uba54\uc18c\ub4dc",id:"axios-\uba54\uc18c\ub4dc",level:2},{value:"Axios \uad6c\ud604",id:"axios-\uad6c\ud604",level:2}];function a(n){const e={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"axios",children:"Axios"})}),"\n",(0,i.jsx)(e.h2,{id:"axios\ub780",children:"Axios\ub780?"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"HTTP \uc694\uccad\uc744 \ubcf4\ub0b4\uae30 \uc704\ud574 \ub110\ub9ac \uc0ac\uc6a9\ub418\ub294 Promise \uae30\ubc18\uc758 HTTP \ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac"}),"\n",(0,i.jsxs)(e.li,{children:["\ud574\ub2f9 React \ud504\ub85c\uc81d\ud2b8 \uacbd\ub85c \ud130\ubbf8\ub110\uc5d0 ",(0,i.jsx)(e.code,{children:"npm install axios"})," \uc785\ub825\ud558\uc5ec \uc124\uce58"]}),"\n"]}),"\n",(0,i.jsxs)(e.admonition,{type:"info",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"fetch\uc640 axios\uc758 \uacf5\ud1b5\uc810/\ucc28\uc774\uc810"})}),(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\uacf5\ud1b5\uc810"})}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Promise \uae30\ubc18\uc73c\ub85c \ub3d9\uc791: then, catch \ub610\ub294 async/await\uc744 \uc774\uc6a9\ud558\uc5ec \ube44\ub3d9\uae30 \ucc98\ub9ac"}),"\n"]}),(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\ucc28\uc774\uc810"}),(0,i.jsx)(e.br,{}),(0,i.jsx)(e.br,{}),"\r\n",(0,i.jsx)(e.code,{children:"fetch"}),(0,i.jsx)(e.br,{})]}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ud45c\uc900 API : \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ub0b4\uc7a5 API, \ubcc4\ub3c4\uc758 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc124\uce58\uac00 \ud544\uc694 \uc5c6\ub2e4."}),"\n",(0,i.jsxs)(e.li,{children:["JSON\ucc98\ub9ac : ",(0,i.jsx)(e.code,{children:"fetch"}),"\ub294 \uc751\ub2f5\uc744 JSON\uc73c\ub85c \uc790\ub3d9 \ubcc0\ud658\ud558\uc9c0 \uc54a\ub294\ub2e4."]}),"\n"]}),(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"axios"}),(0,i.jsx)(e.br,{})]}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac: axios\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc124\uce58\ub97c \ud574\uc57c\ub41c\ub2e4."}),"\n",(0,i.jsxs)(e.li,{children:["CRUD \uc774\uc678 \ub2e4\uc591\ud55c \uba54\uc18c\ub4dc \uc81c\uacf5: ",(0,i.jsx)(e.code,{children:"axios"}),"\uc758 \uba54\uc18c\ub4dc \uc911 ",(0,i.jsx)(e.code,{children:"get"}),",",(0,i.jsx)(e.code,{children:"post"}),",",(0,i.jsx)(e.code,{children:"delete"}),", ",(0,i.jsx)(e.code,{children:"put"})," \ub4f1 \ub2e4\uc591\ud55c \uba54\uc18c\ub4dc\uac00 \uc874\uc7ac"]}),"\n",(0,i.jsxs)(e.li,{children:["\uc790\ub3d9 JSON \ubcc0\ud658: ",(0,i.jsx)(e.code,{children:"axios"}),"\ub294 \uc790\ub3d9\uc73c\ub85c JSON\uac1d\uccb4\ub85c \ubcc0\ud658. \ub370\uc774\ud130\ub97c \uc804\uc1a1 \uc2dc\uc5d0\ub3c4 \uc790\ub3d9\uc73c\ub85c \ubb38\uc790\uc5f4\ud654"]}),"\n",(0,i.jsx)(e.li,{children:"\ud658\uacbd \uc9c0\uc6d0: \ube0c\ub77c\uc6b0\uc800\uc640 Node.js \ud658\uacbd \ubaa8\ub450 \uc0ac\uc6a9"}),"\n"]})]}),"\n",(0,i.jsx)(e.h2,{id:"axios-\uba54\uc18c\ub4dc",children:"Axios \uba54\uc18c\ub4dc"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["get(url[, config]): \uc11c\ubc84\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c \uc694\uccad\ud560 \ub54c \uc0ac\uc6a9(",(0,i.jsx)(e.code,{children:"GET \uc694\uccad"}),")."]}),"\n",(0,i.jsxs)(e.li,{children:["post(url[, data[, config]]): \uc11c\ubc84\uc5d0 \ub370\uc774\ud130\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9(",(0,i.jsx)(e.code,{children:"POST \uc694\uccad"}),")."]}),"\n",(0,i.jsxs)(e.li,{children:["put(url[, data[, config]]): \uc11c\ubc84\uc758 \ub370\uc774\ud130\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9(",(0,i.jsx)(e.code,{children:"PUT \uc694\uccad"}),")."]}),"\n",(0,i.jsxs)(e.li,{children:["delete(url[, config]): \uc11c\ubc84\uc758 \ub370\uc774\ud130\ub97c \uc0ad\uc81c\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9(",(0,i.jsx)(e.code,{children:"DELETE \uc694\uccad"}),")."]}),"\n",(0,i.jsxs)(e.li,{children:["patch(url[, data[, config]]): \uc11c\ubc84\uc758 \ub370\uc774\ud130 \uc77c\ubd80\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9(",(0,i.jsx)(e.code,{children:"PATCH \uc694\uccad"}),")."]}),"\n",(0,i.jsx)(e.li,{children:"head(url[, config]): HEAD \uc694\uccad\uc744 \uc11c\ubc84\ub85c \ubcf4\ub0b4\uba70, \uc11c\ubc84 \ud5e4\ub354\ub97c \uac00\uc838\uc624\uae30 \uc704\ud574 \uc0ac\uc6a9. \ubcf8\ubb38(body)\uc740 \ubc18\ud658\ud558\uc9c0 \uc54a\ub294\ub2e4."}),"\n",(0,i.jsxs)(e.li,{children:["options(url[, config]): \uc11c\ubc84\uc5d0\uc11c \ud2b9\uc815 URL\uc5d0 \ub300\ud574 \uc9c0\uc6d0\ud558\ub294 HTTP \uba54\uc18c\ub4dc\ub97c \uc870\ud68c\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9(",(0,i.jsx)(e.code,{children:"OPTIONS \uc694\uccad"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"axios \uba54\uc18c\ub4dc \uc635\uc158 \uc0ac\uc6a9"})}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Axios\uc758 post \ubc29\uc2dd"',children:'// name, username, email\uc774 \ud544\uc218 \uac12\r\naxios.post(\r\n  "https://jsonplaceholder.typicode.com/users",\r\n  {\r\n    name: "John Doe",\r\n    username: "johndoe",\r\n    email: "johndoe@example.com",\r\n  },\r\n  {\r\n    headers: {\r\n      "Content-Type": "application/json",\r\n      Authorization: "Bearer my-token",\r\n    },\r\n    timeout: 5000,\r\n  }\r\n);\n'})}),(0,i.jsxs)(e.p,{children:["\uccab \ubc88\uc9f8 \uc778\uc790\uac12(",(0,i.jsx)(e.code,{children:"url"}),")\uc740 ",(0,i.jsx)(e.strong,{children:"\uc694\uccad\ud560 \uc8fc\uc18c"}),"\ub97c \uc758\ubbf8",(0,i.jsx)(e.br,{}),"\r\n\ub450 \ubc88\uc9f8 \uc778\uc790\uac12(",(0,i.jsx)(e.code,{children:"data"}),")\uc740 ",(0,i.jsx)(e.strong,{children:"\uc11c\ubc84\uc5d0\uc11c \uc694\uad6c\ud55c \ub370\uc774\ud130"}),"\ub97c \uc758\ubbf8",(0,i.jsx)(e.br,{}),"\r\n\uc138 \ubc88\uc9f8 \uc778\uc790\uac12(",(0,i.jsx)(e.code,{children:"config"}),")\uc740 ",(0,i.jsx)(e.strong,{children:"\uc11c\ubc84\uc5d0\uac8c \uc804\uc1a1\ud560 \uacbd\uc6b0 \uc124\uc815"}),"\uc744 \uc758\ubbf8",(0,i.jsx)(e.br,{})]}),(0,i.jsxs)(e.p,{children:["\uc138 \ubc88\uc9f8 \uc778\uc790\uac12\uc758 \uacbd\uc6b0 \uc774\ubbf8\uc9c0 \uc804\uc1a1 \ud0c0\uc785 \ud639\uc740 \ud2b9\ubcc4\ud55c \uc0c1\ud669 \uc774\uc678\uc5d0\ub294 \uc0dd\ub7b5\ub3c4 \uac00\ub2a5\ud558\ub2e4.",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsx)(e.h2,{id:"axios-\uad6c\ud604",children:"Axios \uad6c\ud604"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Async.js"',children:'import React from "react";\r\nimport axios from "axios";\r\n\r\nasync function Async() {\r\n  return await axios\r\n    .get("https://jsonplaceholder.typicode.com/users/1")\r\n    .then((response) => response.data)\r\n    .catch((error) => {\r\n      console.log("\uc5d0\ub7ec \ubc1c\uc0dd");\r\n    });\r\n}\r\n\r\nexport default Async;\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",metastring:'title="App.js"',children:'import React, { useState, useEffect } from "react";\r\nimport Async from "./Async";\r\n\r\nfunction App() {\r\n  const [user, setUser] = useState(null);\r\n\r\n  useEffect(() => {\r\n    const fetchData = async () => {\r\n      const data = await Async();\r\n      setUser(data);\r\n    };\r\n    fetchData();\r\n  }, []);\r\n\r\n  return (\r\n    <div>\r\n      {user && (\r\n        <div>\r\n          <h1>\uc774\ub984: {user.name}</h1>\r\n          <p>\uc774\uba54\uc77c: {user.email}</p>\r\n          <p>\ubc88\ud638: {user.phone}</p>\r\n        </div>\r\n      )}\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default App;\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/41361a1c-9a8f-4ed6-882d-d3e24d9b0790",alt:"image"})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsxs)(e.p,{children:["Async\ub294 \ub370\uc774\ud130\ub97c \ud638\ucd9c\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \ucf54\ub4dc\uc774\ub2e4.",(0,i.jsx)(e.br,{}),"\r\nAsync\uc758 \ucf54\ub4dc\ub97c \ubcf4\uba74 \ud574\ub2f9 \uc8fc\uc18c\uc5d0\uac8c ",(0,i.jsx)(e.strong,{children:"get\uba54\uc18c\ub4dc\ub97c \uc774\uc6a9\ud558\uc5ec \uc11c\ubc84\uc5d0\uac8c \uc694\uccad"}),"\uc744 \ubcf4\ub0b8\uac83\uc744 \ud655\uc778 \uac00\ub2a5\ud558\ub2e4.",(0,i.jsx)(e.br,{}),"\r\naxios\ub3c4 \ub370\uc774\ud130\ub97c \ud1b5\uc2e0\ud558\ub294 \ube44\ub3d9\uae30 \ud568\uc218\uc774\uae30 \ub54c\ubb38\uc5d0 async\uc640 await\uc744 \ud1b5\ud574 \ud574\ub2f9 \uc11c\ubc84\uc5d0\uc11c response\uac00 \uc62c \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9b0\ub2e4.",(0,i.jsx)(e.br,{})]}),(0,i.jsxs)(e.p,{children:["App.js\uc5d0\uc11c \ubcf4\uba74 Async\ub97c \ud638\ucd9c\ud558\uc5ec, \ub370\uc774\ud130\ub97c \ud654\uba74 \ud45c\ud604\ud558\ub294 \ucf54\ub4dc\uc774\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\ucc98\uc74c \ud654\uba74\uc5d0 \ub744\uc6cc\uc9c0\uc790\ub9c8\uc790 \ub370\uc774\ud130\ub97c \ud45c\ud604\ud558\uc9c0 \uc54a\ub294\ub2e4.",(0,i.jsx)(e.br,{}),"\r\n\uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 ",(0,i.jsx)(e.strong,{children:"useEffect\ub97c \uc0ac\uc6a9"}),(0,i.jsx)(e.br,{}),"\r\nuseEffect\ub97c \ud1b5\ud574 \ucc98\uc74c \ub80c\ub354\ub9c1(",(0,i.jsx)(e.code,{children:"\ub9c8\uc6b4\ud2b8"}),")\uc774 \ub420 \uacbd\uc6b0, \uc6d0\ud558\ub294 \ub370\uc774\ud130\ub97c \ubfcc\ub824\uc904 \uc218 \uc788\uac8c\ub054 useState\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud55c\ub2e4.",(0,i.jsx)(e.br,{}),"\r\nuseEffect\uac00 \uc2e4\ud589\uc774 \ub05d\ub0a0 \uacbd\uc6b0, useState\uc758 \ub370\uc774\ud130\ub97c \uc774\uc6a9\ud558\uc5ec \ud654\uba74\uc5d0 \ub370\uc774\ud130\ub97c \ubcf4\uc5ec\uc8fc\uac8c \ud55c\ub2e4.",(0,i.jsx)(e.br,{})]})]}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'axios.get("https://jsonplaceholder.typicode.com/users/1");\r\naxios("https://jsonplaceholder.typicode.com/users/1");\n'})}),(0,i.jsxs)(e.p,{children:["\uc704\uc758 \ub450 \ucf54\ub4dc\ub294 \ub3d9\uc77c\ud55c GET \uc694\uccad",(0,i.jsx)(e.br,{}),"\r\n\ub530\ub77c\uc11c Axios\ub97c \uc0ac\uc6a9\ud560 \ub54c GET \uc694\uccad\uc744 \ubcf4\ub0bc \ub54c\ub294 \uba54\uc18c\ub4dc \uc774\ub984\uc744 \uc0dd\ub7b5\ud558\uc5ec \uac04\uacb0\ud558\uac8c \uc791\uc131 \uac00\ub2a5",(0,i.jsx)(e.br,{})]})]})]})}function x(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},989:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>c});var r=s(758);const i={},t=r.createContext(i);function o(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);
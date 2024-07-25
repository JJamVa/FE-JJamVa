"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[5744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,k=u["".concat(i,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,p[1]=o;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={},p="\ub77c\uc6b0\ud305 \uc2ec\ud654",o={unversionedId:"frontend/NextJS/\ub77c\uc6b0\ud305 \uc2ec\ud654",id:"frontend/NextJS/\ub77c\uc6b0\ud305 \uc2ec\ud654",title:"\ub77c\uc6b0\ud305 \uc2ec\ud654",description:"Route Group(\ub77c\uc6b0\ud2b8 \uadf8\ub8f9)",source:"@site/docs/frontend/12-NextJS/9-\ub77c\uc6b0\ud305 \uc2ec\ud654.md",sourceDirName:"frontend/12-NextJS",slug:"/frontend/NextJS/\ub77c\uc6b0\ud305 \uc2ec\ud654",permalink:"/FE-TIL-JJamVa/docs/frontend/NextJS/\ub77c\uc6b0\ud305 \uc2ec\ud654",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/12-NextJS/9-\ub77c\uc6b0\ud305 \uc2ec\ud654.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"frontend",previous:{title:"Data Fetch",permalink:"/FE-TIL-JJamVa/docs/frontend/NextJS/Data Fetch"},next:{title:"Mock Service Workder(MSW)",permalink:"/FE-TIL-JJamVa/docs/frontend/NextJS/MSW"}},i={},m=[{value:"Route Group(\ub77c\uc6b0\ud2b8 \uadf8\ub8f9)",id:"route-group\ub77c\uc6b0\ud2b8-\uadf8\ub8f9",level:2},{value:"Parallel Routes(\ubcd1\ub82c \ub77c\uc6b0\ud2b8)",id:"parallel-routes\ubcd1\ub82c-\ub77c\uc6b0\ud2b8",level:2},{value:"Intercepting Routes(\uac00\ub85c\ucc44\ub294 \ub77c\uc6b0\ud2b8)",id:"intercepting-routes\uac00\ub85c\ucc44\ub294-\ub77c\uc6b0\ud2b8",level:2},{value:"Intercepting Routes \uc608\uc2dc \ucf54\ub4dc",id:"intercepting-routes-\uc608\uc2dc-\ucf54\ub4dc",level:3},{value:"Catch-All Routes",id:"catch-all-routes",level:2},{value:"Optional Catch All Routes",id:"optional-catch-all-routes",level:2}],s={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ub77c\uc6b0\ud305-\uc2ec\ud654"},"\ub77c\uc6b0\ud305 \uc2ec\ud654"),(0,r.kt)("h2",{id:"route-group\ub77c\uc6b0\ud2b8-\uadf8\ub8f9"},"Route Group(\ub77c\uc6b0\ud2b8 \uadf8\ub8f9)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \uad00\ub828 \uacbd\ub85c\ub97c \uadf8\ub8f9\uc73c\ub85c \ubb36\uc5b4 \uad6c\uc870\ub97c \ub354 \uba85\ud655\ud558\uac8c \ud45c\ud604"),(0,r.kt)("li",{parentName:"ul"},"\ud3f4\ub354 \uc774\ub984\uc5d0 \uad04\ud638",(0,r.kt)("inlineCode",{parentName:"li"},"()"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec URL \uacbd\ub85c\uc5d0 \ud3ec\ud568\ub418\uc9c0 \uc54a\ub294\ub2e4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/(advertise)/layout.js"',title:'"(src/)app/(advertise)/layout.js"'},'import "../globals.css";\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang="en">\n      <body style={{ width: "100vw", height: "100vh" }}>\n        <div>{children}</div>\n      </body>\n    </html>\n  );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/(advertise)/page.js"',title:'"(src/)app/(advertise)/page.js"'},'"use client";\n\nimport { useRouter } from "next/navigation";\n\nexport default function HomePage() {\n  const router = useRouter();\n\n  const handleLinkPage = () => {\n    router.push("/content");\n  };\n\n  return (\n    <>\n      <h1>\uad11\uace0 \ud398\uc774\uc9c0 \uc785\ub2c8\ub2e4.</h1>\n      <button onClick={handleLinkPage}>\uad11\uace0 \ub2eb\uae30</button>\n    </>\n  );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/(main)/layout.js"',title:'"(src/)app/(main)/layout.js"'},"export default function Layout({ children }) {\n  return (\n    <html>\n      <body>{children}</body>\n    </html>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/(main)/content/page.js"',title:'"(src/)app/(main)/content/page.js"'},"export default function ContentPage() {\n  return <>\ub0b4\uc6a9 \ud398\uc774\uc9c0 \uc785\ub2c8\ub2e4.</>;\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"src/app\n\u251c\u2500\u2500 (advertise)\n\u2502   \u251c\u2500\u2500 layout.js\n\u2502   \u251c\u2500\u2500 loading.js\n\u2502   \u2514\u2500\u2500 page.js\n\u2514\u2500\u2500 (main)\n     \u251c\u2500\u2500 content\n     \u2502     \u2514\u2500\u2500 page.js\n     \u2514\u2500\u2500 layout.js\n")),(0,r.kt)("p",{parentName:"admonition"},"\uc704\uc758 \ucf54\ub4dc\ub294 Next.js\ub97c \uc2e4\ud589 \uc2dc\ud0a8 \ud6c4, \uad11\uace0 \ud398\uc774\uc9c0 \ubc84\ud2bc\uc744 \ub20c\ub7ec \ub0b4\uc6a9 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\uac8c \ud558\ub294 \ucf54\ub4dc",(0,r.kt)("br",null),"\n\ud3f4\ub354 \uad6c\uc870\ub97c \ubcf4\uba74 app\uc758 page.js\uac00 \uc5c6\uc74c\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 \ub3d9\uc791\uc774 \ub41c\ub2e4.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"(advertise)"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"(main)"),"\uc5d0\uc11c advertise\uc5d0\ub9cc page.js\uac00 \uc788\ub2e4.",(0,r.kt)("br",null),"\nNext.js\uac00 \ud310\ub2e8\ud558\uc5ec page.js\uac00 \uc874\uc7ac\ud558\ub294 \ub77c\uc6b0\ud2b8 \uadf8\ub8f9\uc758 \ud398\uc774\uc9c0\ub97c \ub80c\ub354\ub9c1 \uc2dc\ud0a8\ub2e4.",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\ub9cc\uc57d \ub77c\uc6b0\ud2b8 \uadf8\ub8f9 \uc911 page.js\uac00 2\uac1c\uc774\uc0c1 \uc788\uc744 \uacbd\uc6b0 \uc5d0\ub7ec\ub97c \ubc1c\uc0dd"),(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/88449f91-cd4f-4b94-8804-04e77121f643",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},"\ud398\uc774\uc9c0\uac00 \ub80c\ub354\ub9c1\uc774 \ub418\uace0 \uacbd\ub85c\ub97c \ud655\uc778\ud574\ubcf4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"/advertise"),"\ub85c \ub418\uc5b4\uc788\uc9c0 \uc54a\ub2e4.",(0,r.kt)("br",null),"\n\uc989, \uad04\ud638",(0,r.kt)("inlineCode",{parentName:"p"},"()"),"\ub85c \uac10\uc313\uc5ec\uc9c4 \ud3f4\ub354\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uacbd\ub85c\ub97c \ubb34\uc2dc\ud558\uba70, \ub77c\uc6b0\ud2b8\ub97c \ubb36\uae30 \uc704\ud55c \uad6c\uc870\ub85c \ud65c\uc6a9"),"\ub41c\ub2e4.",(0,r.kt)("br",null),"\n\ub300\uc2e0 \ub3d9\uc77c\ud55c \ub808\ubca8\uc758 \ub450 \uc601\uc5ed\uc73c\ub85c \ub098\ub258\uc5b4\uc9c8 \uacbd\uc6b0, \uac01\uac01\uc758 ",(0,r.kt)("strong",{parentName:"p"},"layout.js\uc744 \uc791\uc131"),"\ud574\uc57c\ub41c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"\uad11\uace0 \ub2eb\uae30"),"\ubc84\ud2bc\uc744 \ub204\ub974\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"(main)/content"),"\uc758 page.js\ud654\uba74\uc774 \ub098\uc624\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/dbe27f7c-828b-4eb0-a359-f2eb31bc4113",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},"Link\ub97c \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"/content")," \uacbd\ub85c\ub97c \uc124\uc815\ud558\uc600\uc74c\uc5d0\ub3c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"(main)"),"\uc774 \uacbd\ub85c\uc5d0 \uc601\ud5a5\uc744 \ub07c\uce58\uc9c0 \uc54a\ub294\ub2e4\ub294 \uac83\uc744 \ud655\uc778",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"parallel-routes\ubcd1\ub82c-\ub77c\uc6b0\ud2b8"},"Parallel Routes(\ubcd1\ub82c \ub77c\uc6b0\ud2b8)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc77c\ud55c \uacbd\ub85c \ub808\ubca8\uc5d0\uc11c \uc5ec\ub7ec \uac1c\uc758 \ub77c\uc6b0\ud2b8\uac00 \ub3d9\uc2dc\uc5d0 \ud65c\uc131\ud654\ub418\uace0 \uad00\ub9ac"),(0,r.kt)("li",{parentName:"ul"},"\ud558\ub098\uc758 \ub808\uc774\uc544\uc6c3\uc5d0 \uc5ec\ub7ec \ub77c\uc6b0\ud2b8\uac00 \ub3d9\uc2dc\uc5d0 \ub80c\ub354\ub9c1"),(0,r.kt)("li",{parentName:"ul"},"\ubcd1\ub82c \ub77c\uc6b0\ud2b8\ub97c \uc0dd\uc131 \uc2dc, \ud3f4\ub354\uba85\uc744 ",(0,r.kt)("inlineCode",{parentName:"li"},"@\ud3f4\ub354\uba85"),"\uc73c\ub85c \uc791\uc131")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/page.js"',title:'"(src/)app/page.js"'},"export default async function Home({ props }) {\n  return <div>Home Page\uc785\ub2c8\ub2e4.</div>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/layout.js"',title:'"(src/)app/layout.js"'},'import "./globals.css";\n\nexport default function RootLayout({ children, info, content }) {\n  return (\n    <html lang="en">\n      <body style={{ width: "100vw", height: "100vh" }}>\n        <div>{children}</div>\n        <div>{info}</div>\n        <div>{content}</div>\n      </body>\n    </html>\n  );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/loading.js"',title:'"(src/)app/loading.js"'},"export default function AppLoading() {\n  return <>\ub85c\ub529 \uc911...</>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/@info/page.js"',title:'"(src/)app/@info/page.js"'},"export default async function InfoPage() {\n  await new Promise((resolve) => setTimeout(resolve, 5000));\n  return <div>Info Page \uc785\ub2c8\ub2e4.</div>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/@content/page.js"',title:'"(src/)app/@content/page.js"'},"export default async function ContentPage() {\n  await new Promise((resolve) => setTimeout(resolve, 1000));\n  return <div>Conetent Page \uc785\ub2c8\ub2e4.</div>;\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"src/app\n\u251c\u2500\u2500 page.js (Home \ud398\uc774\uc9c0)\n\u251c\u2500\u2500 loading.js (loading \ud398\uc774\uc9c0)\n\u251c\u2500\u2500 layout.js (layout \ud398\uc774\uc9c0)\n\u251c\u2500\u2500 @info\n\u2502      \u2514\u2500\u2500 page.js (info \ud398\uc774\uc9c0)\n\u2514\u2500\u2500 @content\n       \u2514\u2500\u2500 page.js (content \ud398\uc774\uc9c0)\n")),(0,r.kt)("p",{parentName:"admonition"},"app\uacbd\ub85c\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," \ub77c\uc6b0\ud305 \ud398\uc774\uc9c0\ub97c \uc815\uc758\ud574\ub193\uc740 \ucf54\ub4dc",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"info"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"content"),"\uac00 \ubcd1\ub82c \ub77c\uc6b0\ud305\uc778\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574 setTimeout\uc744 \ud1b5\ud574 \uac01\uac01 \ub80c\ub354\ub9c1 \uc2dc\uac04\uc744 \uac78\uc5b4\ub450\uc5c8\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},"\ubcd1\ub82c \ub77c\uc6b0\ud305\uc744 \ud558\uae30 \uc704\ud574\uc11c\ub294 \ub3d9\uc77c\ud55c \ub808\ubca8\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"@\ud3f4\ub354\uba85"),"\uc73c\ub85c \ud3f4\ub354\ub97c \ub9cc\ub4e4\uace0 \uc548\uc5d0 page.js\ub97c \uc0dd\uc131\ud574\uc57c\ub41c\ub2e4.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"@ + \ud3f4\ub354\uba85"),"\uc744 ",(0,r.kt)("strong",{parentName:"p"},"\uc2ac\ub86f(slots)"),"\uc774\ub77c \ud55c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},"\ubcd1\ub82c \ub77c\uc6b0\ud305\uc5d0 \ub300\ud55c slots \ubc0f page.js\uac00 \uc0dd\uc131\ub418\uc5c8\ub2e4\uba74, \uc774 \ubcd1\ub82c \ub77c\uc6b0\ud305\uc744 \ub80c\ub354\ub9c1 \uc2dc\ucf1c\uc57c\ub41c\ub2e4.",(0,r.kt)("br",null),"\nslots\ub4e4\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\ubd80\ubaa8\uc758 ",(0,r.kt)("inlineCode",{parentName:"strong"},"layout.js"),"\uc5d0 \uc811\uadfc\uc774 \uac00\ub2a5"),"\ud558\ub2e4.",(0,r.kt)("br",null),"\n\uc989, ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"content"),"\uc758 \ubd80\ubaa8\uc778 app\uc601\uc5ed\uc758 layout.js\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc774\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default function RootLayout({ children, info, content }) {}\n")),(0,r.kt)("p",{parentName:"admonition"},"layout.js \ucf54\ub4dc\ub97c \ubcf4\uba74 props\uc601\uc5ed\uc5d0 \uc9c1\uc811\uc801\uc778 slots\uba85\uc744 \uc791\uc131\ud558\uba74 \ubcd1\ub82c \ub77c\uc6b0\ud305\uc73c\ub85c \uc120\uc5b8\ub41c slots\ub4e4\uc758 page.js\ub97c \ud638\ucd9c\ud55c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\uc2e4\ud589 \ud6c4 0\ucd08"),(0,r.kt)("br",null),"\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/fe9ba86b-62af-4105-af1e-a61908fb9699",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\uc2e4\ud589 \ud6c4 1\ucd08 \ub4a4"),(0,r.kt)("br",null),"\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/70a2c814-2c6b-4876-8b0f-e7e0eb8e54bc",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\uc2e4\ud589 \ud6c4 5\ucd08 \ub4a4"),(0,r.kt)("br",null),"\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/ba44c54f-c3ef-4910-8874-22f4cd033745",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},"\uacb0\uacfc \uc774\ubbf8\uc9c0\ub97c \ubcf4\uba74 \ubcd1\ub82c \ub77c\uc6b0\ud305\uc744 \ucc98\ub9ac\ud558\uac8c \ub418\uba74 \uc704\uc640 \uac19\uc774 \ub3c5\ub9bd\uc801\uc778 \ub85c\ub4dc \ubc0f \ub80c\ub354\ub9c1\uc774 \ub41c\ub2e4.",(0,r.kt)("br",null),"\n\uc989, \ubcd1\ub82c \ub77c\uc6b0\ud305\uc740 \uc11c\ub85c \ub3c5\ub9bd\uc801\uc778 \ub370\uc774\ud130\ub97c \ub85c\ub4dc\ud574\uc57c\ud560 \uacbd\uc6b0\uc5d0 \uc720\uc6a9\ud558\ub2e4.",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"intercepting-routes\uac00\ub85c\ucc44\ub294-\ub77c\uc6b0\ud2b8"},"Intercepting Routes(\uac00\ub85c\ucc44\ub294 \ub77c\uc6b0\ud2b8)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \ub77c\uc6b0\ud2b8\uc758 \uc811\uadfc\uc744 \uc870\uac74\uc5d0 \ub530\ub77c \uc81c\uc5b4\ud558\uac70\ub098 \ubcc0\uacbd\ud560 \uc218 \uc788\ub294 \ub77c\uc6b0\ud305 \uae30\ubc95"),(0,r.kt)("li",{parentName:"ul"},"\uc8fc\ub85c \ubaa8\ub2ec\uc758 \ub744\uc6b0\uae30 \ubaa9\uc801\uc5d0 \uc0ac\uc6a9")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Intercepting Routes \ud30c\uc77c \uc0dd\uc131 Convention")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(.)\ud3f4\ub354\uba85"),": \ub3d9\uc77c\ud55c \ub808\ubca8\uc758 \uc138\uadf8\uba3c\ud2b8\uc640 \uc77c\uce58"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(..)\ud3f4\ub354\uba85"),": \ud55c \ub808\ubca8 \uc704\uc758 \uc138\uadf8\uba3c\ud2b8\uc640 \uc77c\uce58"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(..)(..)\ud3f4\ub354\uba85"),": \ub450 \ub808\ubca8 \uc704\uc758 \uc138\uadf8\uba3c\ud2b8\uc640 \uc77c\uce58"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(...)\ud3f4\ub354\uba85"),": \ub8e8\ud2b8 \ub2e8\uc704\ubd80\ud130\uc640\uc758 \uc138\uadf8\uba3c\ud2b8\uc640 \uc77c\uce58")),(0,r.kt)("p",{parentName:"admonition"},"\ud3f4\ub354\uba85\uc740 \ubc18\ub4dc\uc2dc Intercept route\ub97c \uc801\uc6a9\ud560 \uacbd\ub85c \uc774\ub984\uacfc \ub611\uac19\uc774 \uc791\uc131\ud574\uc57c\ub41c\ub2e4.",(0,r.kt)("br",null))),(0,r.kt)("h3",{id:"intercepting-routes-\uc608\uc2dc-\ucf54\ub4dc"},"Intercepting Routes \uc608\uc2dc \ucf54\ub4dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src)/app/layout.js"',title:'"(src)/app/layout.js"'},'export default function RootLayout({ children, modal }) {\n  return (\n    <html lang="en">\n      <body>\n        {modal}\n        {children}\n      </body>\n    </html>\n  );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src)/app/page.js"',title:'"(src)/app/page.js"'},'import Link from "next/link";\n\nexport default function HomePage() {\n  return (\n    <>\n      <h1>\ud648\ud398\uc774\uc9c0 \uc785\ub2c8\ub2e4.</h1>\n      <Link href="/image">\uc774\ubbf8\uc9c0 \ud655\uc778\ud558\ub7ec \uac00\uae30</Link>\n    </>\n  );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/@modal/default.js"',title:'"(src/)app/@modal/default.js"'},"export default function ModalDefaultPage() {\n  return null;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="(src/)app/@modal/(.)image/page.module.css"',title:'"(src/)app/@modal/(.)image/page.module.css"'},".modal {\n  background-color: #bababa;\n  padding: 2rem;\n  border-radius: 4px;\n  border: none;\n  box-shadow: 0 0 10px 0 #181817;\n}\n\n.backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.85);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/@modal/(.)image/page.js"',title:'"(src/)app/@modal/(.)image/page.js"'},'"use client";\n\nimport { useRouter } from "next/navigation";\nimport classes from "./page.module.css";\n\nexport default function InterceptImage() {\n  const router = useRouter();\n  return (\n    <div className={classes.backdrop} onClick={router.back}>\n      <dialog className={classes.modal} open>\n        <img src="../favicon.ico" alt="Intercept Image" />\n      </dialog>\n    </div>\n  );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/image/page.js"',title:'"(src/)app/image/page.js"'},'export default function ImagePage() {\n  return <img src="../favicon.ico" />;\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"src/app\n\u251c\u2500\u2500 page.js (Home \ud398\uc774\uc9c0)\n\u251c\u2500\u2500 layout.js (layout \ud398\uc774\uc9c0)\n\u251c\u2500\u2500 @modal\n\u2502      \u251c\u2500\u2500 (.)image\n\u2502      \u2502        \u251c\u2500\u2500 page.module.css (intercepting css)\n\u2502      \u2502        \u2514\u2500\u2500 page.js (intercepting \ud398\uc774\uc9c0)\n\u2502      \u2514\u2500\u2500 default.js (default \ud398\uc774\uc9c0)\n\u2514\u2500\u2500 image\n       \u2514\u2500\u2500 page.js (image \ud398\uc774\uc9c0)\n")),(0,r.kt)("p",{parentName:"admonition"},"\uc704\uc758 \ucf54\ub4dc\ub294 \ubc84\ud2bc\uc744 \ub204\ub97c \uacbd\uc6b0, \ubaa8\ub2ec\ucc3d\uc5d0 \uc774\ubbf8\uc9c0\ub97c \ub744\uc6b0\ub294 \ucf54\ub4dc",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},"HomePage\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"\uc774\ubbf8\uc9c0 \ud655\uc778\ud558\ub7ec \uac00\uae30")," \ubc84\ud2bc\uc744 \ub204\ub97c \uacbd\uc6b0, ",(0,r.kt)("inlineCode",{parentName:"p"},"/image"),"\uacbd\ub85c\ub85c \uc774\ub3d9\ud55c\ub2e4.",(0,r.kt)("br",null),"\n\uc774 \ub54c, image\ud3f4\ub354\uc758 page.js\uac00 \ud45c\ud604\ub418\uc5b4\uc57c\uc9c0\ub9cc, \ub3d9\uc791\uc744 \ud574\ubcf4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"/@modal/(.)image"),"\uc758 page.js \ud398\uc774\uc9c0\uac00 \ud45c\ud604\ub41c\ub2e4.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/@modal/(.)image"),"\ub97c \uc774\uc6a9\ud558\uc5ec Intercept Route\ub97c \uc120\uc5b8\ud558\uc600\uae30 \ub54c\ubb38\uc774\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"@modal\uc5d0 default.js\uc758 \uc6a9\ub3c4\ub294 \ubb34\uc5c7\uc77c\uae4c?")),(0,r.kt)("p",{parentName:"admonition"},"default.js\uc5d0\ub294 Next.js\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc608\uc57d\uc5b4\uc774\ub2e4.",(0,r.kt)("br",null),"\n\uae30\ubcf8\uc801\uc73c\ub85c \ud574\ub2f9 \uacbd\ub85c\uc5d0 \uc811\uadfc\ud560 \ub54c ",(0,r.kt)("strong",{parentName:"p"},"\uac00\uc7a5 \uba3c\uc800 \ub80c\ub354\ub9c1\ub418\ub294 Component\ub97c \uc815\uc758"),(0,r.kt)("br",null)),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'export default function RootLayout({ children, modal }) {\n  return (\n    <html lang="en">\n      <body>\n        {modal}\n        {children}\n      </body>\n    </html>\n  );\n}\n')),(0,r.kt)("p",{parentName:"admonition"},"\uc2e4\uc9c8\uc801\uc73c\ub85c \ub80c\ub354\ub9c1\uacfc \ub3d9\uc2dc\uc5d0 modal\uc774 \ub3d9\uc791\ud558\ub294 \uac83\uc774 \uc544\ub2cc \ud2b9\uc815 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc600\uc744 \ub54c, \ud574\ub2f9 URL\ub85c \ubcc0\uacbd\ub418\uba70 modal\uc774 \ub728\uae30 \ub54c\ubb38\uc5d0",(0,r.kt)("br",null),"\n\ud574\ub2f9 \uacbd\ub85c\uc5d0 \ucc98\uc74c \uc811\uadfc\ud560 \ub54c ",(0,r.kt)("strong",{parentName:"p"},"\ube48 \ud654\uba74\uc744 \ub80c\ub354\ub9c1\ud558\uc5ec \ubaa8\ub2ec\uc774 \uc5f4\ub9ac\uae30 \uc804\uc5d0 \uae30\ubcf8 \uc0c1\ud0dc\ub97c \uc720\uc9c0"),"\ud558\uae30 \uc704\ud574 default.js\ub97c \uc0ac\uc6a9.",(0,r.kt)("br",null)),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"image\uacbd\ub85c\uc5d0 page.js\uac00 \uc65c \ud544\uc694\ud55c\uac00?")),(0,r.kt)("p",{parentName:"admonition"},"Intercept Route\ub294 \uacbd\ub85c\ub97c \uac00\ub85c\ucc44\uc11c \ud2b9\uc815 Component\ub97c \ub80c\ub354\ub9c1\ud558\ub294 \uae30\ub2a5",(0,r.kt)("br",null),"\n\uc989, Link \ud639\uc740 useRouter\ub97c \uc774\uc6a9\ud558\uac8c \ub418\uba74 \ud398\uc774\uc9c0\uac00 \uac00\ub85c\ucc44\uc11c Intercept Route\ub85c \uc124\uc815\ud55c \ud398\uc774\uc9c0\uac00 \ub80c\ub354\ub9c1\ub41c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},"\ub9cc\uc57d, \uc0ac\uc6a9\uc790\uac00 \uc9c1\uc811\uc801\uc73c\ub85c URL\uc744 \uc774\uc6a9\ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"p"},"/image"),"\uacbd\ub85c\ub97c \uc9c4\uc785\ud558\uac70\ub098,",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/image"),"\uacbd\ub85c\uc758 \uc9c4\uc785 \ud6c4, \uc0c8\ub85c\uace0\uce68\uc744 \ud558\uac8c \ub41c\ub2e4\uba74 Intercept Route\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"/image/page.js"),"\uac00 \ub80c\ub354\ub9c1\uc774 \ub41c\ub2e4.",(0,r.kt)("br",null),"\nNext.js\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"\uc11c\ubc84 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1")," \ub610\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uc815\uc801 \ud30c\uc77c \uc81c\uacf5\uc758 \uc6d0\uce59"),"\uc5d0 \ub530\ub974\uae30 \ub54c\ubb38\uc774\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\uc65c Intercepting Route\ub97c \uc774\uc6a9\ud574\uc11c modal\uc744 \ud45c\ud604\ud574\uc57c\ub418\ub098?")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"@modal/(.)image/page.js"),"\uc758 \ucf54\ub4dc\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"image/page.js"),"\uc5d0 \ub123\uc740 \ud6c4, ",(0,r.kt)("inlineCode",{parentName:"p"},"@modal"),"\ud3f4\ub354\ub97c \uc9c0\uc6b0\uace0 \uc2e4\ud589\ud574\ubcf4\uba74 \ub41c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Intercept Route \uc801\uc6a9 \ucf54\ub4dc\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/32ed32aa-ec12-4330-bf5e-ebc95098a815",alt:"image"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Intercept Route \ubbf8\uc801\uc6a9 \ucf54\ub4dc\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/a3ca2e78-97f3-49a2-ab3c-775116ee7749",alt:"image"})))),(0,r.kt)("p",{parentName:"admonition"},"\uc704\uc758 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \ubcc4\ub3c4\uc758 \ud398\uc774\uc9c0\ub85c \ub80c\ub354\ub9c1\uc774 \ub41c\ub2e4.",(0,r.kt)("br",null),"\n\uc989, Intercept Route\ub97c \uc0ac\uc6a9\ud558\ub294 \uc774\uc720\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uc0ac\uc6a9\uc790 \uacbd\ud5d8 \ud5a5\uc0c1"),"\uc774 \uc788\uc73c\uba70, SEO \ubc0f URL \uc77c\uad00\uc131 \uc720\uc9c0\uc5d0 \ub9e4\uc6b0 \uc911\uc694\ud55c \uae30\uc220\uc774\ub2e4.",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"catch-all-routes"},"Catch-All Routes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub3d9\uc801 \uacbd\ub85c\ub97c \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95"),(0,r.kt)("li",{parentName:"ul"},"URL\uc758 \uc5ec\ub7ec \uc138\uadf8\uba3c\ud2b8\ub97c \ud558\ub098\uc758 \uacbd\ub85c\ub85c \ucea1\ucc98\ud558\uc5ec \ub2e8\uc77c Component\uc5d0\uc11c \ucc98\ub9ac\ud560 \uc218 \uc788\uac8c \ud558\ub294 \uae30\ub2a5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[...\ud3f4\ub354\uba85]"),"\uc73c\ub85c \ud3f4\ub354\ub97c \uc0dd\uc131")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/page.js"',title:'"(src/)app/page.js"'},'import Link from "next/link";\n\nexport default function HomePage() {\n  return (\n    <>\n      <h1>HomePage \uc785\ub2c8\ub2e4.</h1>\n      <Link href="/catch">\ud398\uc774\uc9c0 \uc774\ub3d9</Link>\n    </>\n  );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/[...slug]/page.js"',title:'"(src/)app/[...slug]/page.js"'},'export default function CatchAllRouterPage(params) {\n  console.log("Catch All Routes \ud655\uc778", params);\n  return <h1>Catch All Router Page</h1>;\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Catch All Routes\uc5d0 \ub300\ud574 \ucd9c\ub825\ubb3c\uc744 \ud655\uc778\ud558\uae30 \uc704\ud55c \ucf54\ub4dc",(0,r.kt)("br",null),"\nCatch All Routes\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"[...slug]"),"\ub77c\ub294 \ud3f4\ub354\ub97c \uc0dd\uc131",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),"\ub294 \ub3d9\uc801 \ub77c\uc6b0\ud305\uc744 \uc758\ubbf8\ud558\uba70, ",(0,r.kt)("inlineCode",{parentName:"p"},"..."),"\uc740 \ubaa8\ub4e0 \ud558\uc704 \uacbd\ub85c\ub97c \ucea1\uccd0\ud558\ub294 \uac83\uc744 \uc758\ubbf8",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},"app\uc758 page.js\uc5d0\uc11c Link\ub97c \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"/catch")," \uacbd\ub85c\ub85c \uc774\ub3d9\uc744 \ud55c\ub2e4.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/catch"),"\ub85c \uc774\ub3d9 \ud6c4, params\ub97c \ucd9c\ub825\ud574\ubcf4\uba74 \ub3d9\uc801 \ub77c\uc6b0\ud305\uacfc \ub611\uac19\uc774 \ucd9c\ub825\uc744 \ud55c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/dd435ccc-8860-4477-af29-8b0f1c92c492",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},"\uc704\uc640 \uac19\uc774 params\ub97c \ud1b5\ud574 \ucea1\uccd0\ub41c \uacbd\ub85c \uc138\uadf8\uba3c\ud2b8\uc778 ",(0,r.kt)("inlineCode",{parentName:"p"},"catch"),"\uac00 \ucd9c\ub825\ub41c \uac83\uc744 \ubcf4\uc778\ub2e4.",(0,r.kt)("br",null),"\nCatch All Routes\ub294 \ubcc4\ub3c4\uc758 \ud3f4\ub354\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uace0\ub3c4 ",(0,r.kt)("strong",{parentName:"p"},"\ucd94\uac00\uc801\uc778 \uacbd\ub85c\ub3c4 \uc811\uadfc\uc774 \uac00\ub2a5"),"\ud558\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"/catch/all/routes"),"\ub77c\ub294 \uacbd\ub85c\ub97c \uc811\uadfc",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/d1ab3b99-1284-42b6-8967-29f2275b6ea3",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},"\uc704\uc640 \uac19\uc774 params\ub97c \ud1b5\ud574 \ucea1\uccd0\ub41c \uacbd\ub85c \uc138\uadf8\uba3c\ud2b8\uc778 ",(0,r.kt)("inlineCode",{parentName:"p"},"catch"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"all"),",",(0,r.kt)("inlineCode",{parentName:"p"},"routes"),"\uac00 \ucd9c\ub825\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,r.kt)("br",null),"\n\ub610\ud55c, ",(0,r.kt)("inlineCode",{parentName:"p"},"[...slug]"),"\uc758 page.js \ud398\uc774\uc9c0\ub97c \ub80c\ub354\ub9c1 \ud558\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"optional-catch-all-routes"},"Optional Catch All Routes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Catch All Routes\uc758 \ud655\uc7a5 \uac1c\ub150"),(0,r.kt)("li",{parentName:"ul"},"\uc9c0\uc815\ub41c \uacbd\ub85c \uc774\uc678\uc5d0 \uc0c1\uc704 \uacbd\ub85c\ub3c4 \ucea1\uccd0. \uc989, \uc138\uadf8\uba3c\ud2b8\uac00 \uc5c6\uc5b4\ub3c4 \ub9e4\uce6d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[[...\ud3f4\ub354\uba85]]"),"\uc73c\ub85c \ud3f4\ub354\ub97c \uc0dd\uc131")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/page.js"',title:'"(src/)app/page.js"'},'import Link from "next/link";\n\nexport default function HomePage() {\n  return (\n    <>\n      <h1>HomePage \uc785\ub2c8\ub2e4.</h1>\n      <Link href="/catch">\ud398\uc774\uc9c0 \uc774\ub3d9</Link>\n    </>\n  );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="(src/)app/catch/[[...slug]]/page.js"',title:'"(src/)app/catch/[[...slug]]/page.js"'},'export default function CatchAllRouterPage(params) {\n  console.log("Optional Catch All Routes \ud655\uc778", params);\n  return <h1>Optional Catch All Router Page</h1>;\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Optional Catch All Routes\uc5d0 \ub300\ud574 \ucd9c\ub825\ubb3c\uc744 \ud655\uc778\ud558\uae30 \uc704\ud55c \ucf54\ub4dc",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},"app\uc758 page.js\uc5d0\uc11c Link\ub97c \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"/catch"),"\uacbd\ub85c\ub85c \uc774\ub3d9",(0,r.kt)("br",null),"\ncatch\ud3f4\ub354\uc5d0 page.js\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uc558\uc74c\uc5d0\ub3c4 \ud398\uc774\uc9c0 \ub80c\ub354\ub9c1\uc774 \ub41c\ub2e4.",(0,r.kt)("br",null),"\n\ub80c\ub354\ub9c1\uc774 \ub41c \ud398\uc774\uc9c0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"[[...slug]]"),"\uc5d0 \uc0dd\uc131\ub41c page.js\uc774\ub2e4.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/catch"),"\uc758 page.js\uac00 \uc5c6\uc5b4\ub3c4 ",(0,r.kt)("strong",{parentName:"p"},"\ud558\uc704 \uacbd\ub85c\uc758 Optional Catch All Routes\uc758 page.js\ub97c \ucc3e\uc544 \ub80c\ub354\ub9c1"),"\ud55c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/fa03c528-307a-44b5-b37a-25e6d75da38c",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},"\uc704\uc758 \uc774\ubbf8\uc9c0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"/catch"),"\uc758 \uacbd\ub85c\uc5d0 \uc811\uadfc\ud588\uc744 \ub54c\uc758 \ucd9c\ub825\ubb3c",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/catch"),"\uacbd\ub85c\uc5d0 \uc811\uadfc\ud558\uc600\uc9c0\ub9cc ",(0,r.kt)("inlineCode",{parentName:"p"},"[[...slug]]"),"\uc758 page.js\ub97c \ub80c\ub354\ub9c1 \ud558\uc600\uae30 \ub54c\ubb38\uc5d0 \ucd9c\ub825\ud558\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,r.kt)("br",null),"\n\ud558\uc9c0\ub9cc ",(0,r.kt)("inlineCode",{parentName:"p"},"[[...slug]]"),"\uc5d0 \ub300\ud55c \ub77c\uc6b0\ud305\uc774 \uc544\ub2cc ",(0,r.kt)("inlineCode",{parentName:"p"},"/catch"),"\uc5d0 \ub300\ud55c \ub77c\uc6b0\ud305\uc774\uae30 \ub54c\ubb38\uc5d0 slug\uc5d0 \ub300\ud55c \uc138\uadf8\uba3c\ud2b8\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),"\uc73c\ub85c \ucd9c\ub825\uc774 \ub41c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/a983bb88-dff5-4698-a59b-04343d9d13f9",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},"\uc704\uc758 \uc774\ubbf8\uc9c0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"/catch/all/routes"),"\uc758 \uacbd\ub85c\uc5d0 \uc811\uadfc\ud588\uc744 \ub54c\uc758 \ucd9c\ub825\ubb3c",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/catch"),"\ub294 Optional Catch All Routes\ub97c \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),"\uc73c\ub85c \ucd9c\ub825\ub41c \uac83\uc744 \ud655\uc778",(0,r.kt)("br",null),"\n\uc774\uc678 ",(0,r.kt)("inlineCode",{parentName:"p"},"/catch")," \ud558\uc704 \uacbd\ub85c\uc758 \uc138\uadf8\uba3c\ud2b8\ub4e4\uc740 slug\uc5d0 \uc800\uc7a5\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,r.kt)("br",null))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Optional Catch All Router\ub294 \ucd5c\uc0c1\ub2e8 \uacbd\ub85c\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"[[...\ud3f4\ub354\uba85]]")," \uc0dd\uc131\uc774 \ubd88\uac00\ub2a5",(0,r.kt)("br",null),"\n\ubc18\ub4dc\uc2dc \uacbd\ub85c\ub97c \uc0dd\uc131 \ud6c4, Optional Catch All Router\ub97c \uc0dd\uc131\ud574\uc57c\ub41c\ub2e4.",(0,r.kt)("br",null))))}c.isMDXComponent=!0}}]);
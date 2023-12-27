"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[3925],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(t),f=r,d=u["".concat(p,".").concat(f)]||u[f]||s[f]||i;return t?a.createElement(d,l(l({ref:n},c),{},{components:t})):a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=t(7462),r=(t(7294),t(3905));const i={},l="interface",o={unversionedId:"frontend/Typescript/interface",id:"frontend/Typescript/interface",title:"interface",description:"interface\ub780?",source:"@site/docs/frontend/10-Typescript/10-interface.md",sourceDirName:"frontend/10-Typescript",slug:"/frontend/Typescript/interface",permalink:"/FE-TIL-JJamVa/docs/frontend/Typescript/interface",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/10-Typescript/10-interface.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"frontend",previous:{title:"\ud074\ub798\uc2a4(class)\uc758 type \uc9c0\uc815",permalink:"/FE-TIL-JJamVa/docs/frontend/Typescript/class\ud0c0\uc785\uc9c0\uc815"},next:{title:"rest parameter, destructuring",permalink:"/FE-TIL-JJamVa/docs/frontend/Typescript/rest,descturing"}},p={},m=[{value:"interface\ub780?",id:"interface\ub780",level:2},{value:"interface\uc640 extends",id:"interface\uc640-extends",level:2}],c={toc:m},u="wrapper";function s(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interface"},"interface"),(0,r.kt)("h2",{id:"interface\ub780"},"interface\ub780?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc0c8\ub85c\uc6b4 \ud0c0\uc785\uc744 \uc815\uc758\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ubb38\ubc95\uc801\uc778 \uad6c\uc870"),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4\uc758 \ud615\ud0dc\ub97c \uc815\uc758\ud558\uace0, \ud574\ub2f9 \ud615\ud0dc\ub97c \ub530\ub974\ub294 \uac1d\uccb4\ub97c \uc0dd\uc131")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Dot = {\n    x: number;\n    y: number;\n}\n\nlet locate: Dot = {\n    x: 10,\n    y: 10\n} \n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\ub610\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"interface"),"\uc5d0 \uac1d\uccb4 \uc18d\uc131\uc5d0 \ub300\ud55c \ud0c0\uc785 \uc785\ub825 \uc2dc, ",(0,r.kt)("inlineCode",{parentName:"p"},";"),"\ub098 ",(0,r.kt)("inlineCode",{parentName:"p"},","),"\ub97c \uc0ac\uc6a9\ud574\ub3c4 \uc0c1\uad00\uc5c6\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// ; \uc0ac\uc6a9\ninterface Dot = {\n    x: number;\n    y: number;\n}\n\n// , \uc0ac\uc6a9\ninterface Dot = {\n    x: number,\n    y: number\n}\n"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"type\uacfc interface\uc758 \uacf5\ud1b5\uc810\uacfc \ucc28\uc774\uc810")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uacf5\ud1b5\uc810"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\uc720\ub2c8\uc628(|)"),"\uacfc ",(0,r.kt)("inlineCode",{parentName:"li"},"\uc778\ud130\uc139\uc158(&)"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud0c0\uc785\uc744 \uacb0\ud569 \ubc0f \ud655\uc7a5 \uac00\ub2a5"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ucc28\uc774\uc810"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubb38\ubc95\uc801 \ucc28\uc774",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),": \uc720\ub2c8\uc628(|), \uc778\ud130\uc139\uc158(&), \ub9ac\ud130\ub7f4 \ub4f1\uc744 \ud65c\uc6a9\ud55c \ubcf5\uc7a1\ud55c \ud0c0\uc785\uc744 \uc815\uc758\ud560 \ub54c \uc0ac\uc6a9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interface"),": \uac1d\uccb4\uc758 \ud615\ud0dc\ub97c \ubb18\uc0ac\ud558\ub294\ub370 \uc0ac\uc6a9"))),(0,r.kt)("li",{parentName:"ul"},"\ud655\uc7a5 \uac00\ub2a5\uc131",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),": \uc720\ub2c8\uc628(|), \uc778\ud130\uc139\uc158(&)\uacfc \uac19\uc740 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud0c0\uc785\uc744 \uacb0\ud569\ud558\uac70\ub098 \ud655\uc7a5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interface"),": \uae30\ubcf8\uc801\uc73c\ub85c \ud655\uc7a5\uc774 \uac00\ub2a5\ud558\uba70, ",(0,r.kt)("inlineCode",{parentName:"li"},"extends"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\ub978 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud655\uc7a5"))),(0,r.kt)("li",{parentName:"ul"},"\uc120\uc5b8 \ubcd1\ud569",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),": \uac19\uc740 \uc774\ub984\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"type"),"\uc740 \uc911\ubcf5 \uc120\uc5b8\uc774 \ubd88\uac00\ub2a5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interface"),": \uac19\uc740 \uc774\ub984\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"interface"),"\ub294 \uc911\ubcf5 \uc120\uc5b8\uc774 \uac00\ub2a5(\ubcd1\ud569)"))),(0,r.kt)("li",{parentName:"ul"},"Implements",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),": \ud074\ub798\uc2a4\ub098 \uac1d\uccb4 \ub4f1\uc744 \uc9c1\uc811 \uad6c\ud604\uc774 \ubd88\uac00\ub2a5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interface"),": \ud074\ub798\uc2a4\ub098 \uac1d\uccb4 \ub4f1\uc744 \uc9c1\uc811 \uad6c\ud604\uac00\ub2a5, ",(0,r.kt)("inlineCode",{parentName:"li"},"implements")," \ud0a4\uc6cc\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud074\ub798\uc2a4\uc5d0\uc11c \ud574\ub2f9 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604"))))))),(0,r.kt)("h2",{id:"interface\uc640-extends"},"interface\uc640 extends"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"interface\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"extends"),"\ub97c \uc774\uc6a9\ud558\uc5ec \ud0c0\uc785 \ud655\uc7a5\uc774 \uac00\ub2a5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'interface Human{\n    iq: number,\n    eq: number\n}\n\ninterface MyInfo extends Human{\n    name: string,\n    age: number\n}\n\nlet info: MyInfo = {\n    name: "JJamVa",\n    age: 27,\n    iq: 100,\n    eq: 100\n}\n\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"interface \uc0ac\uc6a9\uc2dc \uc8fc\uc758 \uc0ac\ud56d")),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\uc911\ubcf5 \uc120\uc5b8 \uac00\ub2a5")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'interface Info{\n    name:string;\n    age: number;\n}\n\ninterface Info{\n    married:boolean;\n}\n\nlet my: Info = {\n    name:"JJamVa",\n    age:27,\n    married:false\n}\n')),(0,r.kt)("p",{parentName:"admonition"},"\uc704\uc758 \ucf54\ub4dc\uc640 \uac19\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"2\uac00\uc9c0\uc758 Info"),"\uac00 \uc874\uc7ac\ud55c\ub2e4.",(0,r.kt)("br",null),"\n\uccab\ubc88\uc9f8\uc5d0 \ub300\ud55c Info\ub098 \ub450\ubc88\uc9f8\uc5d0 \ub300\ud55c Info\uc758 \uac1d\uccb4 \ud0c0\uc785\uc73c\ub85c \ub530\ub85c \uc0dd\uc131\uc774 \ubd88\uac00\ub2a5\ud558\ub2e4.",(0,r.kt)("br",null),"\n\uc0dd\uc131 \uc2dc, \uaf2d \ub3d9\uc77c\ud55c interface\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uc18d\uc131 \uc804\ubd80\ub97c \ud638\ucd9c"),"\ud574\uc57c\uc9c0 \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\ub2e4.",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"\uc790\uae30 \uc790\uc2e0\uc5d0\uac8c extends"),"\ud55c\ub2e4\uace0 \uc0dd\uac01\ud558\uba74 \uc88b\uc744 \uac83 \uac19\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("ol",{parentName:"admonition",start:2},(0,r.kt)("li",{parentName:"ol"},"\ub3d9\uc77c interface \uc18d\uc131\uba85\uacfc \ud0c0\uc785\uc77c\uce58")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'interface Info{\n    name:string;\n    age: number;\n}\n\ninterface Info{\n    // name: undefined | string; //\ubd88\uac00\ub2a5\n    name: string; // \uac00\ub2a5\n}\n\nlet my: Info = {\n    name:"JJamVa",\n    age:27\n}\n')),(0,r.kt)("p",{parentName:"admonition"},"\ub610\ud55c \ub611\uac19\uc740 interface\uc548 \uac19\uc740 \uc18d\uc131 \uc0ac\uc6a9 \uc2dc, \uac19\uc740 \ud0c0\uc785\uc73c\ub85c \uc9c0\uc815\uc744 \ud574\uc57c \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("ol",{parentName:"admonition",start:3},(0,r.kt)("li",{parentName:"ol"},"extends\uc640 &\uc758 \ucc28\uc774\uc810")),(0,r.kt)("p",{parentName:"admonition"},"\uae30\ub2a5\uc801\uc73c\ub85c \ub611\uac19\uc740 \ub3d9\uc791\uc744 \ud558\uc9c0\ub9cc \ucc28\uc774\uc810\uc774 \uc874\uc7ac\ud55c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'interface Name{\n    name:string;\n}\n\ninterface Job{\n    job:string;\n}\n\ninterface Info extends Name, Job{\n    age: number\n}\n\n//extends\ub97c \uc774\uc6a9\ud55c \uac1d\uccb4 \uc0dd\uc131\nlet my1: Info = {\n    name: "JJamVa",\n    age:27,\n    job:"FE"\n}\n\n//&\ub97c \uc774\uc6a9\ud55c \uac1d\uccb4 \uc0dd\uc131\nlet my2: Name & Job & {age: number} = {\n    name: "JJamVa",\n    age:27,\n    job:"FE"\n}\n\n')),(0,r.kt)("p",{parentName:"admonition"},"\uc704\uc758 \ucf54\ub4dc\uc5d0\uc11c interface\uc640 &\ub85c \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc600\ub2e4.",(0,r.kt)("br",null),"\n\uae30\ub2a5\uc801\uc778 \ubd80\ubd84\uc5d0 \uc788\uc5b4 \ub3d9\uc77c\ud558\uc9c0\ub9cc, \ucc28\uc774\uc810\uc774 \uc874\uc7ac\ud55c\ub2e4.",(0,r.kt)("br",null),"\ninterface\uc640 extends\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0, \uac1d\uccb4\uc5d0 \ub300\ud55c \uc815\ubcf4 \ud0c0\uc785\uc744 \uc0dd\uc131\ud558\uc5ec \uc800\uc7a5\ud558\uae30 \ub54c\ubb38\uc5d0 \ud544\uc694\ub530\ub77c \uc27d\uac8c \uc0dd\uc131\uc774 \uac00\ub2a5\ud558\ub2e4.",(0,r.kt)("br",null),"\n\ubc18\uba74 &\ub97c \uc774\uc6a9\ud574\uc11c \uc0dd\uc131\ud560 \uacbd\uc6b0, \ud544\uc694\ud55c \uc18d\uc131\uc744 \uac00\uc9c4 \uac1d\uccb4\ub97c \uc120\ud0dd\uc801\uc73c\ub85c \uc0ac\uc6a9\ud574\uc11c \uac00\ub2a5\ud558\ub2e4",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},"interface\uc640 & \uc911 \uac19\uc740 \uac1d\uccb4 \ud0c0\uc785\uc758 \uc18d\uc131\uc744 \ubc18\ubcf5\uc801\uc73c\ub85c \uc791\uc5c5\ud574\uc57c\ud560 \uacbd\uc6b0",(0,r.kt)("br",null),"\ninterface\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 ",(0,r.kt)("strong",{parentName:"p"},"\ucf54\ub4dc \uc7ac\uc0ac\uc6a9")," \ubc29\uba74\uc5d0\uc5d0\uc11c \uc88b\uc73c\uba70",(0,r.kt)("br",null),"\n\ub9e4\ubc88 ",(0,r.kt)("strong",{parentName:"p"},"\uc0c8\ub85c\uc6b4 \ud0c0\uc785\uc758 \uac1d\uccb4\ub97c \uc0dd\uc131"),"\ud560 \uacbd\uc6b0 &\uac00 \uc88b\uc744 \uc218 \uc788\ub2e4.",(0,r.kt)("br",null))))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(n),N=r,s=d["".concat(p,".").concat(N)]||d[N]||u[N]||o;return n?a.createElement(s,l(l({ref:t},c),{},{components:n})):a.createElement(s,l({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=N;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},1685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={},l="Number\uc5f0\uc0b0\uc790",i={unversionedId:"frontend/JavaScript/Number",id:"frontend/JavaScript/Number",title:"Number\uc5f0\uc0b0\uc790",description:"Number \uc0b0\uc220 \uc5f0\uc0b0\uc790",source:"@site/docs/frontend/4-JavaScript/6-Number.md",sourceDirName:"frontend/4-JavaScript",slug:"/frontend/JavaScript/Number",permalink:"/FE-TIL-JJamVa/docs/frontend/JavaScript/Number",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/4-JavaScript/6-Number.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"frontend",previous:{title:"String \uba54\uc18c\ub4dc",permalink:"/FE-TIL-JJamVa/docs/frontend/JavaScript/String\uba54\uc18c\ub4dc"},next:{title:"Number \uba54\uc18c\ub4dc",permalink:"/FE-TIL-JJamVa/docs/frontend/JavaScript/Number\uba54\uc18c\ub4dc"}},p={},m=[{value:"Number \uc0b0\uc220 \uc5f0\uc0b0\uc790",id:"number-\uc0b0\uc220-\uc5f0\uc0b0\uc790",level:2},{value:"Number \ub2e8\ud56d \uc5f0\uc0b0",id:"number-\ub2e8\ud56d-\uc5f0\uc0b0",level:2},{value:"Number \uc99d\uac10\uc5f0\uc0b0\uc790",id:"number-\uc99d\uac10\uc5f0\uc0b0\uc790",level:2},{value:"Number \ube44\uad50\uc5f0\uc0b0\uc790",id:"number-\ube44\uad50\uc5f0\uc0b0\uc790",level:2},{value:"\uc22b\uc790\ub97c \ud45c\ud604\ud558\ub294 \uae30\ubc95(<code>Infinity</code> &amp; <code>NaN</code>)",id:"\uc22b\uc790\ub97c-\ud45c\ud604\ud558\ub294-\uae30\ubc95infinity--nan",level:2}],c={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"number\uc5f0\uc0b0\uc790"},"Number\uc5f0\uc0b0\uc790"),(0,r.kt)("h2",{id:"number-\uc0b0\uc220-\uc5f0\uc0b0\uc790"},"Number \uc0b0\uc220 \uc5f0\uc0b0\uc790"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(10 + 2); //12\nconsole.log(10 - 2); //8\nconsole.log(10 * 2); //20\nconsole.log(10 / 2); //5\nconsole.log(10 / 3); //3.33333 \uc18c\uc218\uc810\uae4c\uc9c0 \ub098\uc628\ub2e4.\nconsole.log(10 % 2); //0\nconsole.log(10 % 3); //1 \ub098\uba38\uc9c0\ub97c \uc758\ubbf8\ud55c\ub2e4.\nconsole.log(10 ** 2); //100 \uc81c\uacf1\uc744 \uc758\ubbf8\ud55c\ub2e4.\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ubd80\ub3d9\uc18c\uc218\uc810 \uc5f0\uc0b0"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(0.1 + 0.2); // 0.3000000000005\n")),(0,r.kt)("p",{parentName:"admonition"},"\uc18c\uc218\uc810\uc5d0 \ub300\ud55c \uc5f0\uc0b0\uc744 \ud558\uba74 \uc720\uc0ac\uac12\uc740 \ub098\uc624\uc9c0\ub9cc \uc644\uc804 \uc815\ud655\ud55c \uac12\uc740 \ub098\uc624\uc9c0 \uc54a\ub294\ub2e4.",(0,r.kt)("br",null),"\n\uba54\ubaa8\ub9ac \uc601\uc5ed\uc5d0\uc11c \uc18c\uc218\uc810\uc5d0 \ub300\ud55c \uc5f0\uc0b0\uc744 \ud560\ub54c, \ucd94\uac00\uc801\uc73c\ub85c \uc5f0\uc0b0 \uba54\ubaa8\ub9ac \uacf5\uac04\ud655\ubcf4\uac00 \ub418\uba74\uc11c \uc0dd\uae30\ub294 \ubb38\uc81c\uac19\ub2e4.",(0,r.kt)("br",null),"\n\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \ubc11\uc758 \uc601\uc0c1\ucc38\uace0\ub97c \ud558\uba74 \uc88b\uc744\uac70 \uac19\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/-GsrYvZoAdA"},"https://youtu.be/-GsrYvZoAdA"))),(0,r.kt)("h2",{id:"number-\ub2e8\ud56d-\uc5f0\uc0b0"},"Number \ub2e8\ud56d \uc5f0\uc0b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(-2); //-2\nconsole.log(-(-2)); //2\nconsole.log(+4); //4\nconsole.log(+"4"); //4\nconsole.log(~~3.14); //3 \uc18c\uc218\uc810\uc744 \uc81c\uac70\ud55c\ub2e4.\n')),(0,r.kt)("h2",{id:"number-\uc99d\uac10\uc5f0\uc0b0\uc790"},"Number \uc99d\uac10\uc5f0\uc0b0\uc790"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\ud615\ud0dc"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\ud2b9\uc9d5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\uc5f0\uc0b0\uc790"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"++value"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uac12\uc744 \uc5f0\uc0b0\ud558\uae30\uc804\uc5d0 \uc99d\uac00\uc2dc\ud0a8\ub2e4."),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc804\uc704\uc5f0\uc0b0\uc790")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"--value"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uac12\uc744 \uc5f0\uc0b0\uc804\uc5d0 \uac10\uc18c\uc2dc\ud0a8\ub2e4."),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc804\uc704\uc5f0\uc0b0\uc790")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"value++"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uac12\uc744 \uc5f0\uc0b0 \ud6c4, \uc99d\uac00\uc2dc\ud0a8\ub2e4."),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud6c4\uc704\uc5f0\uc0b0\uc790")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"value--"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uac12\uc744 \uc5f0\uc0b0 \ud6c4, \uac10\uc18c \uc2dc\ud0a8\ub2e4."),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud6c4\uc704\uc5f0\uc0b0\uc790")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var a = 1;\n\nconsole.log(++a); //2 \ucd9c\ub825\ud558\uae30 \uc804\uc5d0 1\uc744 \ub354\ud55c\ub2e4.\nconsole.log(a++); //2 \ucd9c\ub825\ud558\uace0 \ub09c \ud6c4\uc5d0 1\uc744 \ub354\ud55c\ub2e4.\nconsole.log(a); //3\n")),(0,r.kt)("h2",{id:"number-\ube44\uad50\uc5f0\uc0b0\uc790"},"Number \ube44\uad50\uc5f0\uc0b0\uc790"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ubc18\ud658\uac12\uc740 ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),",",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"\ub85c \ubc18\ud658\ub41c\ub2e4. (\ud0c0\uc785\uc740 ",(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"),")")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\ud615\ud0dc"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\ud2b9\uc9d5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"> , <"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub450\uc218\uc758 \ud06c\uae30\ub97c \ube44\uad50\ud55c\ub2e4.(\ucd08\uacfc,\ubbf8\ub9cc)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},">= , =<"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub450\uc218\uc758 \ud06c\uae30\ub97c \ube44\uad50\ud55c\ub2e4.(\uc774\uc0c1,\uc774\ud558)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"=="),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uac12\uc774 \uac19\uc740\uc9c0 \ube44\uad50\ud55c\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"==="),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uac12\uc774 \uac19\uc740\uc9c0 \ube44\uad50\ud55c\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"!="),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uac12\uc774 \ub2e4\ub978\uc9c0 \ube44\uad50\ud55c\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"!=="),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uac12\uc774 \ub2e4\ub978\uc9c0 \ube44\uad50\ud55c\ub2e4.")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"==")," \uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"==="),"\uc758 \ucc28\uc774\uc810\uc740 \ubb58\uae4c?"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(1 == "1"); //true\nconsole.log(1 == "11"); //false\nconsole.log(1 == "001"); //true\nconsole.log(1 === "1"); //false\nconsole.log(1 === 11); //false\nconsole.log(1 === 1); //true\n')),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"=="),"\uc740 \uc815\ub9d0 \uac12\ub9cc \uac19\uc740\uc9c0 \ud655\uc778\ub9cc \ud574\uc8fc\uba74\ub41c\ub2e4. \uc704\uc640 \uac19\uc740 \uacbd\uc6b0\uc5d0\uc11c \uc758\ub3c4\ud558\uc9c0 \uc54a\uc740 \uacb0\uacfc\uac00 \ub098\uc62c\uc218 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"==="),"\uc740 \uc870\uae08 \uc5c4\uaca9\ud558\uac8c \uac12\uc744 \ube44\uad50\ud55c\ub2e4. \uc989, \uac12\ub9cc \ube44\uad50\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c ",(0,r.kt)("strong",{parentName:"li"},"\uc790\ub8cc\ud615"),"\ub3c4 \uac19\uc774 \ube44\uad50\ud55c\ub2e4\ub294 \uac83\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uacb0\ub860: ",(0,r.kt)("inlineCode",{parentName:"li"},"==="),"\uc744 \uc4f0\uc790"))),(0,r.kt)("h2",{id:"\uc22b\uc790\ub97c-\ud45c\ud604\ud558\ub294-\uae30\ubc95infinity--nan"},"\uc22b\uc790\ub97c \ud45c\ud604\ud558\ub294 \uae30\ubc95(",(0,r.kt)("inlineCode",{parentName:"h2"},"Infinity")," & ",(0,r.kt)("inlineCode",{parentName:"h2"},"NaN"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Infinity"),": \ubb34\ud55c\ub300\ub97c \uc758\ubbf8."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NaN"),": Not a Number\uc758 \uc904\uc784\ub9d0\uc774\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(1/0)// Infinity\uac00 \ucd9c\ub825\ub41c\ub2e4. \uacb0\uacfc\uac00 \ub098\uc62c\uc218 \uc5c6\ub294 \uac12\nconsole.log(2e10)// 20000000000\nconsole.log(9999e10000 === Infinity)// true\nconsole.log("aa"*2)//NaN\n')),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(NaN === NaN)\n// \uc774\uac83\uc740 \uc5b4\ub5a4 \uacb0\uacfc\uac00 \ub098\uc62c\uae4c?\n")),(0,r.kt)("p",{parentName:"admonition"},"\uc815\ub2f5\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\uc774\ub2e4.",(0,r.kt)("br",null),"\n\uc5ec\ub7ec\uac00\uc9c0\ub97c \ucc3e\uc544\ubcf4\uc558\uc9c0\ub9cc, \ub300\ubd80\ubd84\uc758 ",(0,r.kt)("strong",{parentName:"p"},"JS\uc124\uacc4 \uc624\ub958"),"\ub77c\ub294 \uc774\uc720\uac00 \ub9ce\ub2e4.")))}u.isMDXComponent=!0}}]);
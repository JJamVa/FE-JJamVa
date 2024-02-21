"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[8133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="\uc774\ubbf8\uc9c0 \ube44\uc728 \uc720\uc9c0\ud558\uae30",c={unversionedId:"frontend/CSS/\uc774\ubbf8\uc9c0 \ube44\uc728",id:"frontend/CSS/\uc774\ubbf8\uc9c0 \ube44\uc728",title:"\uc774\ubbf8\uc9c0 \ube44\uc728 \uc720\uc9c0\ud558\uae30",description:"aspect-ratio",source:"@site/docs/frontend/3-CSS/10-\uc774\ubbf8\uc9c0 \ube44\uc728.md",sourceDirName:"frontend/3-CSS",slug:"/frontend/CSS/\uc774\ubbf8\uc9c0 \ube44\uc728",permalink:"/FE-TIL-JJamVa/docs/frontend/CSS/\uc774\ubbf8\uc9c0 \ube44\uc728",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/3-CSS/10-\uc774\ubbf8\uc9c0 \ube44\uc728.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"frontend",previous:{title:"Position",permalink:"/FE-TIL-JJamVa/docs/frontend/CSS/Position"},next:{title:"Float",permalink:"/FE-TIL-JJamVa/docs/frontend/CSS/Float"}},l={},p=[{value:"<code>aspect-ratio</code>",id:"aspect-ratio",level:2},{value:"<code>padding %\uac12</code>",id:"padding-\uac12",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\uc774\ubbf8\uc9c0-\ube44\uc728-\uc720\uc9c0\ud558\uae30"},"\uc774\ubbf8\uc9c0 \ube44\uc728 \uc720\uc9c0\ud558\uae30"),(0,o.kt)("h2",{id:"aspect-ratio"},(0,o.kt)("inlineCode",{parentName:"h2"},"aspect-ratio")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uac00\ub85c, \uc138\ub85c\uc5d0 \ub300\ud55c \uc774\ubbf8\uc9c0 \ube44\uc728\uc744 \uc124\uc815")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"img {\n  width: 300px;\n  /* \uc0ac\uc9c4\uc758 \uac00\ub85c \uae38\uc774 \uc124\uc815 */\n  aspect-ratio: 2 / 1;\n  /* \uc138\ub85c / \uac00\ub85c \uc5d0 \ub300\ud55c \ube44\uc728 \uc124\uc815 */\n  object-fit: cover;\n  /* object-fit\uc73c\ub85c \uc0ac\uc9c4\uc758 \ubcf4\uc5ec\uc8fc\ub294 \ud06c\uae30\ub97c \uc124\uc815\n  contain\uc740 \uc774\ubbf8\uc9c0\uac00 \ucc0c\uae00\uc5b4\uc9c0\uc9c0 \uc54a\uac8c \ube44\uc728\uc5d0 \ub9de\uac8c \uc870\uc808\ud558\uc5ec \uc0bd\uc785\ud55c\ub2e4.\n  cover\uc740 \uc6d0\ubcf8 \uc0ac\uc9c4\uc758 \ud06c\uae30\ub294 \uc720\uc9c0\ud558\uba70, \uc124\uc815\ud55c \uac12\uc5d0 \ub530\ub77c \uc774\ubbf8\uc9c0\uac00 \uc798\ub9b0\ub2e4.\n  \uc774\ubbf8\uc9c0\uc758 \uc124\uc815\uc758 \ud06c\uae30\ubcf4\ub2e4 \uac00\uc838\uc62c \uc774\ubbf8\uc9c0\uc758 \ud06c\uae30\uac00 \uc791\ub2e4\uba74 \uc124\uc815\uac12\uc5d0 \ub9de\uac8c \ucd9c\ub825.\n  */\n}\n")),(0,o.kt)("h2",{id:"padding-\uac12"},(0,o.kt)("inlineCode",{parentName:"h2"},"padding %\uac12")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".thumbnail {\n  position: relative;\n  height: 0;\n  padding-top: 50%;\n  overflow: hidden;\n}\n\n.thumbnail img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  /* top, left, right, bottom\uc73c\ub85c \uc88c\ud45c \uac12\uc744 \uc124\uc815 \n  top\uacfc bottom\uc740 \ubd80\ubaa8\uc758 \uc138\ub85c\uac00 \uc544\ub2cc, \uac00\ub85c \ub108\ube44\ub97c \uae30\uc900*/\n  width: 100%;\n  height: 100%;\n  /* \uc774\ubbf8\uc9c0\uc758 \ud06c\uae30\ub97c %\ub85c \uc870\uc815\ud55c\ub2e4. */\n  object-fit: cover;\n}\n")))}u.isMDXComponent=!0}}]);
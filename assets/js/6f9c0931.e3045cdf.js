"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[7073],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),p=c(r),s=a,m=p["".concat(u,".").concat(s)]||p[s]||d[s]||i;return r?n.createElement(m,l(l({ref:t},f),{},{components:r})):n.createElement(m,l({ref:t},f))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9863:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},l="JQuery-Effect \ud6a8\uacfc",o={unversionedId:"frontend/JQuery/JQuery-Effect\ud6a8\uacfc",id:"frontend/JQuery/JQuery-Effect\ud6a8\uacfc",title:"JQuery-Effect \ud6a8\uacfc",description:"basic",source:"@site/docs/frontend/5-JQuery/5-JQuery-Effect\ud6a8\uacfc.md",sourceDirName:"frontend/5-JQuery",slug:"/frontend/JQuery/JQuery-Effect\ud6a8\uacfc",permalink:"/FE-TIL-JJamVa/docs/frontend/JQuery/JQuery-Effect\ud6a8\uacfc",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/5-JQuery/5-JQuery-Effect\ud6a8\uacfc.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"frontend",previous:{title:"JQuery \ud0d0\uc0c9",permalink:"/FE-TIL-JJamVa/docs/frontend/JQuery/JQuery\ud0d0\uc0c9"},next:{title:"JQuery \uc18d\uc131",permalink:"/FE-TIL-JJamVa/docs/frontend/JQuery/JQuery\uc18d\uc131"}},u={},c=[{value:"basic",id:"basic",level:2},{value:"fading",id:"fading",level:2},{value:"slide",id:"slide",level:2}],f={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jquery-effect-\ud6a8\uacfc"},"JQuery-Effect \ud6a8\uacfc"),(0,a.kt)("h2",{id:"basic"},"basic"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".hide()"),": \uc120\ud0dd\ud55c \uc694\uc18c\ub97c \uc0ac\ub77c\uc9c0\uac8c \ud568"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".show()"),": \uc120\ud0dd\ud55c \uc694\uc18c\ub97c \ub098\ud0c0\ub098\uac8c \ud568"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".toggle()"),": \uc120\ud0dd\ud55c \uc694\uc18c\uc758 \ubcf4\uc5ec\uc9c0\ub294 \uc18d\uc131\uc744 \uc804\ud658(on/off)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".alert()"),": \uba54\uc2dc\uc9c0\ub97c \uc9c0\uc815\ud560 \uc218 \uc788\ub294 \uacbd\uace0 \ub300\ud654 \uc0c1\uc790\ub97c \ub744\uc6b4\ub2e4.")),(0,a.kt)("h2",{id:"fading"},"fading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".fadeIn()"),": \uc120\ud0dd\ud55c \uc694\uc18c\uac00 \uc11c\uc11c\ud788 \ud45c\ud604"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".fadeOut()"),": \uc120\ud0dd\ud55c \uc694\uc18c\uac00 \uc11c\uc11c\ud788 \uc0ac\ub77c\uc9d0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".fadeTo()"),": \uc120\ud0dd\ud55c \uc694\uc18c\uc758 \ubd88\ud22c\uba85\ub3c4 \uc124\uc815"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".fadeToggle()"),": \uc120\ud0dd\ud55c \uc694\uc18c\uac00 \ubcf4\uc5ec\uc9c0\ub294 \uc18d\uc131\uc744 \uc11c\uc11c\ud788 \uc804\ud658(on/off)")),(0,a.kt)("h2",{id:"slide"},"slide"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".slideDown()"),": \uc120\ud0dd\ud55c \uc694\uc18c\uac00 \uc2ac\ub77c\uc774\ub529\ub418\uba70 \ud45c\ud604"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".slideToggle()"),": \uc120\ud0dd\ud55c \uc694\uc18c\uac00 \ubcf4\uc5ec\uc9c0\ub294 \uc18d\uc131\uc744 \uc2ac\ub77c\uc774\ub529\uc73c\ub85c \uc804\ud658(on/off)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".slideUp()"),": \uc120\ud0dd\ud55c \uc694\uc18c\uac00 \uc2ac\ub77c\uc774\ub529\ub418\uba70 \uc0ac\ub77c\uc9d0")))}d.isMDXComponent=!0}}]);
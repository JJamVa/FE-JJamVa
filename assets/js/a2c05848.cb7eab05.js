"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(y,o(o({ref:t},i),{},{components:n})):r.createElement(y,o({ref:t},i))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const s={},o="\ud074\ub798\uc2a4(class)\uc758 type \uc9c0\uc815",c={unversionedId:"frontend/Typescript/class\ud0c0\uc785\uc9c0\uc815",id:"frontend/Typescript/class\ud0c0\uc785\uc9c0\uc815",title:"\ud074\ub798\uc2a4(class)\uc758 type \uc9c0\uc815",description:"class \ud544\ub4dc\uac12 type \uc9c0\uc815",source:"@site/docs/frontend/10-Typescript/9-class\ud0c0\uc785\uc9c0\uc815.md",sourceDirName:"frontend/10-Typescript",slug:"/frontend/Typescript/class\ud0c0\uc785\uc9c0\uc815",permalink:"/FE-TIL-JJamVa/docs/frontend/Typescript/class\ud0c0\uc785\uc9c0\uc815",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/10-Typescript/9-class\ud0c0\uc785\uc9c0\uc815.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"frontend",previous:{title:"\ud568\uc218(function)\uc640 \uba54\uc18c\ub4dc(methods)\uc758 type alias",permalink:"/FE-TIL-JJamVa/docs/frontend/Typescript/\ud568\uc218\uc640\uba54\uc18c\ub4dc\uc758\ud0c0\uc785"},next:{title:"interface",permalink:"/FE-TIL-JJamVa/docs/frontend/Typescript/interface"}},p={},l=[{value:"class \ud544\ub4dc\uac12 type \uc9c0\uc815",id:"class-\ud544\ub4dc\uac12-type-\uc9c0\uc815",level:2},{value:"class \uba54\uc18c\ub4dc(methods) type \uc9c0\uc815",id:"class-\uba54\uc18c\ub4dcmethods-type-\uc9c0\uc815",level:2}],i={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ud074\ub798\uc2a4class\uc758-type-\uc9c0\uc815"},"\ud074\ub798\uc2a4(class)\uc758 type \uc9c0\uc815"),(0,a.kt)("h2",{id:"class-\ud544\ub4dc\uac12-type-\uc9c0\uc815"},"class \ud544\ub4dc\uac12 type \uc9c0\uc815"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'class Person {\n  name: string;\n  age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n\n  sayHello() {\n    console.log(`${this.name}\ub2d8 \uc548\ub155\ud558\uc138\uc694!`);\n  }\n}\n\nconst human = new Person("JJamVa", 27);\nhuman.sayHello();\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\uc704\uc640 \uac19\uc740 \ucf54\ub4dc\uc5d0\uc11c class\ub0b4\uc5d0 \uc0ac\uc6a9\ud560 \ud544\ub4dc \ubcc0\uc218\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ubcc0\uc218\uba85:\ud0c0\uc785"),"\uc744 \ud1b5\ud574 \uc120\uc5b8\ud558\uba74\ub41c\ub2e4.",(0,a.kt)("br",null),"\n\ub2e8, class\ub0b4\uc5d0 \ubcc0\uc218 \ud0c0\uc785\uc9c0\uc815\ud560 \uacbd\uc6b0 \uc55e\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ubcc0\uc218 \uc120\uc5b8 \ud0a4\uc6cc\ub4dc(var, let, const)"),"\ub97c \uc791\uc131\ud558\uc9c0 \uc54a\ub294\ub2e4.",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"constructor"),"\uac19\uc740 \uacbd\uc6b0, \uac1d\uccb4 \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131\ud560 \ub54c \uc785\ub825\ubc1b\uc744 parameter\uac12\uc758 \ud0c0\uc785\uc744 \uc9c0\uc815\ud558\uba74 \ub41c\ub2e4.",(0,a.kt)("br",null))),(0,a.kt)("h2",{id:"class-\uba54\uc18c\ub4dcmethods-type-\uc9c0\uc815"},"class \uba54\uc18c\ub4dc(methods) type \uc9c0\uc815"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'class Car {\n  name: string;\n  speed: number;\n\n  constructor(name: string, speed: number) {\n    this.name = name;\n    this.speed = speed;\n  }\n\n  maxSpeed(speed: number): void {\n    console.log(`\ucd5c\uace0 \uc18d\ub825\uc740 ${speed + 50}km/h \uc785\ub2c8\ub2e4.`);\n  }\n}\n\nconst car = new Car("\uc0b0\ud0c0\ud398", 60);\ncar.maxSpeed(car.speed); // \ucd5c\uace0 \uc18d\ub825\uc740 110km/h \uc785\ub2c8\ub2e4.\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"class \uba54\uc18c\ub4dc(methods)\uc640 \uac19\uc740 \uacbd\uc6b0\ub3c4 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc758 \uc77c\ubc18 \ud568\uc218 \uc120\uc5b8\uc2dd\uacfc \uac19\uc774 \ub3d9\uc77c\ud558\uac8c parameter \ubc0f return \ud0c0\uc785\uc744 \uc815\ud574\uc8fc\uba74 \ub41c\ub2e4.",(0,a.kt)("br",null))))}u.isMDXComponent=!0}}]);
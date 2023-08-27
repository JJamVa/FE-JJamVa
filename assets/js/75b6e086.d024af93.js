"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1180],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(g,s(s({ref:n},u),{},{components:t})):a.createElement(g,s({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7573:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={},s="Nesting",i={unversionedId:"frontend/Sass/Nesting",id:"frontend/Sass/Nesting",title:"Nesting",description:"\uc911\ucca9(Nesting)",source:"@site/docs/frontend/8-Sass/2-Nesting.md",sourceDirName:"frontend/8-Sass",slug:"/frontend/Sass/Nesting",permalink:"/FE-TIL-JJamVa/docs/frontend/Sass/Nesting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/8-Sass/2-Nesting.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"frontend",previous:{title:"Sass",permalink:"/FE-TIL-JJamVa/docs/frontend/Sass/Sass"},next:{title:"\ubcc0\uc218(Variable)",permalink:"/FE-TIL-JJamVa/docs/frontend/Sass/\ubcc0\uc218"}},o={},c=[{value:"\uc911\ucca9(Nesting)",id:"\uc911\ucca9nesting",level:2},{value:"\uc18d\uc131 \uc911\ucca9(Nesting)",id:"\uc18d\uc131-\uc911\ucca9nesting",level:2},{value:"ampersand(<code>&amp;</code>)",id:"ampersand",level:2},{value:"\uac00\uc0c1\uc694\uc18c, \uac00\uc0c1\ud074\ub798\uc2a4, class, id \ub4f1 \ucc38\uc870",id:"\uac00\uc0c1\uc694\uc18c-\uac00\uc0c1\ud074\ub798\uc2a4-class-id-\ub4f1-\ucc38\uc870",level:3},{value:"\uacf5\ud1b5 class\uba85\uc744 \uac00\uc9c4 \uc120\ud0dd\uc790\ub4e4\uc744 \uc911\ucca9",id:"\uacf5\ud1b5-class\uba85\uc744-\uac00\uc9c4-\uc120\ud0dd\uc790\ub4e4\uc744-\uc911\ucca9",level:3},{value:"\uc911\ucca9\uc774 \uae4a\uc5b4\uc9c0\uba74 \ucd5c\uc0c1\uc704 \ubd80\ubaa8 \uc120\ud0dd\uc790\ub85c\ubd80\ud130 \ucc38\uc870",id:"\uc911\ucca9\uc774-\uae4a\uc5b4\uc9c0\uba74-\ucd5c\uc0c1\uc704-\ubd80\ubaa8-\uc120\ud0dd\uc790\ub85c\ubd80\ud130-\ucc38\uc870",level:3},{value:"@at-root",id:"at-root",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nesting"},"Nesting"),(0,r.kt)("h2",{id:"\uc911\ucca9nesting"},"\uc911\ucca9(Nesting)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTML\uc758 \ud0dc\uadf8\uc758 \uacc4\uce35 \ubc29\uc2dd\uacfc \uac19\uc774 CSS\ub97c \uc911\ucca9 \uc791\uc131"),(0,r.kt)("li",{parentName:"ul"},"CSS\ucf54\ub4dc\uac00 \uad6c\uc870\ud654 \ub418\uace0 \uac00\ub3c5\uc131 \ub192\uc544\uc9c4\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML\ucf54\ub4dc"',title:'"HTML\ucf54\ub4dc"'},"<section>\n  <ul>\n    <li>\uc548\ub155\ud558\uc138\uc694.</li>\n  </ul>\n</section>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Sass\ucf54\ub4dc"',title:'"Sass\ucf54\ub4dc"'},"section {\n  background-color: skyblue;\n  ul {\n    list-style: none;\n    li {\n      color: slateblue;\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Sass \uc804\ucc98\ub9ac\uae30 \ud6c4 CSS \ucf54\ub4dc"',title:'"Sass',"\uc804\ucc98\ub9ac\uae30":!0,"\ud6c4":!0,CSS:!0,'\ucf54\ub4dc"':!0},"section {\n  background-color: skyblue;\n}\nsection ul {\n  list-style: none;\n}\nsection ul li {\n  color: slateblue;\n} /*# sourceMappingURL=Practice.css.map */\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h3",{parentName:"admonition",id:"\uc911\ucca9nesting\uc744-\uc0ac\uc6a9\ud558\ub294-\uc774\uc720"},"\uc911\ucca9(Nesting)\uc744 \uc0ac\uc6a9\ud558\ub294 \uc774\uc720"),(0,r.kt)("p",{parentName:"admonition"},"\uc911\ucca9(Nesting)\uc744 \uc0ac\uc6a9\ud558\uba74 \ucd5c\uc0c1\uc704 \ud0dc\uadf8\ub97c \ud55c\ubc88\ub9cc \uc120\uc5b8\ud558\uc5ec \uc790\uc2dd \ud0dc\uadf8\uc5d0\uac8c \uc2a4\ud0c0\uc77c\uc744 \uc801\uc6a9\ud560 \uc218 \uc788\uc5b4 \ucf54\ub4dc \ubc18\ubcf5 \uc904\uc784.\n\ub2e8, \uacc4\uce35\uc774 \ub108\ubb34 \uae4a\uac8c \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uacbd\uc6b0 \ucf54\ub4dc \ubd84\uc11d\uc774 \uc5b4\ub824\uc6b8 \uc218 \uc788\ub2e4.")),(0,r.kt)("h2",{id:"\uc18d\uc131-\uc911\ucca9nesting"},"\uc18d\uc131 \uc911\ucca9(Nesting)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc120\ud0dd\uc790\uc758 \uc911\ucca9 \ubfd0\ub9cc\uc774 \uc544\ub2cc \uc2a4\ud0c0\uc77c \uc18d\uc131\uc5d0\uac8c\ub3c4 \uc801\uc6a9\uc774 \uac00\ub2a5"),(0,r.kt)("li",{parentName:"ul"},"\uc2a4\ud0c0\uc77c\uc758 \uc18d\uc131\uc744 \uc0ac\uc6a9 \ud560 \ub54c\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},":")," \uaf2d \uc0ac\uc6a9 \ud574\uc57c\ub41c\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Sass\ucf54\ub4dc"',title:'"Sass\ucf54\ub4dc"'},"section {\n  background: {\n    color: red;\n    position: center center;\n    size: 14px 14px;\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Sass \uc804\ucc98\ub9ac\uae30 \ud6c4 CSS \ucf54\ub4dc"',title:'"Sass',"\uc804\ucc98\ub9ac\uae30":!0,"\ud6c4":!0,CSS:!0,'\ucf54\ub4dc"':!0},"section {\n  background-color: red;\n  background-position: center center;\n  background-size: 14px 14px;\n} /*# sourceMappingURL=Practice.css.map */\n")),(0,r.kt)("h2",{id:"ampersand"},"ampersand(",(0,r.kt)("inlineCode",{parentName:"h2"},"&"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&"),"\ub294 \uc0c1\uc704 \ubd80\ubaa8\uc120\ud0dd\uc790\ub97c \uac00\ub974\ud0b4")),(0,r.kt)("h3",{id:"\uac00\uc0c1\uc694\uc18c-\uac00\uc0c1\ud074\ub798\uc2a4-class-id-\ub4f1-\ucc38\uc870"},"\uac00\uc0c1\uc694\uc18c, \uac00\uc0c1\ud074\ub798\uc2a4, class, id \ub4f1 \ucc38\uc870"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\uc608\uc2dc"),(0,r.kt)("div",{markdown:"1"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Sass\ucf54\ub4dc"',title:'"Sass\ucf54\ub4dc"'},"ul {\n  li {\n    &:hover {\n      background: skyblue;\n      cursor: pointer;\n    }\n    &:first-child {\n      border-bottom: 2px solid red;\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Sass \uc804\ucc98\ub9ac\uae30 \ud6c4 CSS \ucf54\ub4dc"',title:'"Sass',"\uc804\ucc98\ub9ac\uae30":!0,"\ud6c4":!0,CSS:!0,'\ucf54\ub4dc"':!0},"ul li:hover {\n  background: skyblue;\n  cursor: pointer;\n}\nul li:first-child {\n  border-bottom: 2px solid red;\n} /*# sourceMappingURL=Practice.css.map */\n")))),(0,r.kt)("h3",{id:"\uacf5\ud1b5-class\uba85\uc744-\uac00\uc9c4-\uc120\ud0dd\uc790\ub4e4\uc744-\uc911\ucca9"},"\uacf5\ud1b5 class\uba85\uc744 \uac00\uc9c4 \uc120\ud0dd\uc790\ub4e4\uc744 \uc911\ucca9"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\uc608\uc2dc"),(0,r.kt)("div",{markdown:"1"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML\ucf54\ub4dc"',title:'"HTML\ucf54\ub4dc"'},'<ul>\n  <li class="li-yellow">1</li>\n  <li class="li-green">2</li>\n  <li class="li-red">3</li>\n</ul>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Sass\ucf54\ub4dc"',title:'"Sass\ucf54\ub4dc"'},"ul {\n  .li {\n    &-yellow {\n      background: yellow;\n    }\n    &-red {\n      background: red;\n    }\n    &-green {\n      background: green;\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Sass \uc804\ucc98\ub9ac\uae30 \ud6c4 CSS \ucf54\ub4dc"',title:'"Sass',"\uc804\ucc98\ub9ac\uae30":!0,"\ud6c4":!0,CSS:!0,'\ucf54\ub4dc"':!0},"ul .li-yellow {\n  background: yellow;\n}\nul .li-red {\n  background: red;\n}\nul .li-green {\n  background: green;\n} /*# sourceMappingURL=Practice.css.map */\n")))),(0,r.kt)("h3",{id:"\uc911\ucca9\uc774-\uae4a\uc5b4\uc9c0\uba74-\ucd5c\uc0c1\uc704-\ubd80\ubaa8-\uc120\ud0dd\uc790\ub85c\ubd80\ud130-\ucc38\uc870"},"\uc911\ucca9\uc774 \uae4a\uc5b4\uc9c0\uba74 \ucd5c\uc0c1\uc704 \ubd80\ubaa8 \uc120\ud0dd\uc790\ub85c\ubd80\ud130 \ucc38\uc870"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\uc608\uc2dc"),(0,r.kt)("div",{markdown:"1"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML\ucf54\ub4dc"',title:'"HTML\ucf54\ub4dc"'},'<section class="sec">\n  <h1>\uc548\ub155\ud558\uc138\uc694.</h1>\n  <div class="wrapper">\n    <p>\ubc18\uac11\uc2b5\ub2c8\ub2e4.</p>\n    <div class="inner">\n      <div class="core">Hello</div>\n    </div>\n  </div>\n</section>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Sass\ucf54\ub4dc"',title:'"Sass\ucf54\ub4dc"'},".sec {\n  height: 300px;\n  width: 300px;\n  h1 {\n    color: #eee;\n  }\n  .wrapper {\n    p {\n      color: red;\n    }\n    .inner {\n      & .core {\n        background-color: skyblue;\n      }\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Sass \uc804\ucc98\ub9ac\uae30 \ud6c4 CSS \ucf54\ub4dc"',title:'"Sass',"\uc804\ucc98\ub9ac\uae30":!0,"\ud6c4":!0,CSS:!0,'\ucf54\ub4dc"':!0},".sec {\n  height: 300px;\n  width: 300px;\n}\n.sec h1 {\n  color: #eee;\n}\n.sec .wrapper p {\n  color: red;\n}\n.sec .wrapper .inner .core {\n  background-color: skyblue;\n} /*# sourceMappingURL=Practice.css.map */\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/521fa463-c53b-4304-aca2-5995a0f9697a",alt:"image"})))),(0,r.kt)("h2",{id:"at-root"},"@at-root"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@at-root"),"\ub97c \uc774\uc6a9\ud558\uba74 \uc911\ucca9\uc5d0\uc11c \ubc97\uc5b4\ub09c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc911\ucca9\ub41c \uc120\ud0dd\uc790\uc5d0\uac8c\ub9cc \uc0ac\uc6a9\uac00\ub2a5")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\uc608\uc2dc"),(0,r.kt)("div",{markdown:"1"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML\ucf54\ub4dc"',title:'"HTML\ucf54\ub4dc"'},'<ul class="one two three">\n  <li class="one"></li>\n  <li class="two"></li>\n  <li class="three"></li>\n</ul>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Sass\ucf54\ub4dc"',title:'"Sass\ucf54\ub4dc"'},".one {\n  background-color: black;\n  .two {\n    @at-root .three {\n      background-color: skyblue;\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Sass \uc804\ucc98\ub9ac\uae30 \ud6c4 CSS \ucf54\ub4dc"',title:'"Sass',"\uc804\ucc98\ub9ac\uae30":!0,"\ud6c4":!0,CSS:!0,'\ucf54\ub4dc"':!0},".one {\n  background-color: black;\n}\n.three {\n  background-color: skyblue;\n} /*# sourceMappingURL=Practice.css.map */\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/b1d60716-9f73-4b1f-9f5b-7cc16d31cb70",alt:"image"})))))}d.isMDXComponent=!0}}]);
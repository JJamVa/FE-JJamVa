"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,c=s["".concat(m,".").concat(d)]||s[d]||k[d]||l;return n?a.createElement(c,o(o({ref:t},u),{},{components:n})):a.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o="React Hook Form",i={unversionedId:"frontend/React/ReactHookForm",id:"frontend/React/ReactHookForm",title:"React Hook Form",description:"React Hook Form \uc774\ub780?",source:"@site/docs/frontend/9-React/25-ReactHookForm.md",sourceDirName:"frontend/9-React",slug:"/frontend/React/ReactHookForm",permalink:"/FE-TIL-JJamVa/docs/frontend/React/ReactHookForm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/9-React/25-ReactHookForm.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{},sidebar:"frontend",previous:{title:"React Query",permalink:"/FE-TIL-JJamVa/docs/frontend/React/ReactQuery"},next:{title:"Mobx",permalink:"/FE-TIL-JJamVa/docs/frontend/React/Mobx"}},m={},p=[{value:"React Hook Form \uc774\ub780?",id:"react-hook-form-\uc774\ub780",level:2},{value:"React Hook Form \ud575\uc2ec \uae30\ub2a5",id:"react-hook-form-\ud575\uc2ec-\uae30\ub2a5",level:2},{value:"useForm",id:"useform",level:2},{value:"Controller",id:"controller",level:2},{value:"Controller vs register",id:"controller-vs-register",level:2},{value:"ReactHookForm \uc2e4\uc2b5 \ucf54\ub4dc",id:"reacthookform-\uc2e4\uc2b5-\ucf54\ub4dc",level:2}],u={toc:p},s="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react-hook-form"},"React Hook Form"),(0,r.kt)("h2",{id:"react-hook-form-\uc774\ub780"},"React Hook Form \uc774\ub780?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ud3fc\uc744 \uad6c\ucd95\ud558\uace0 \uad00\ub9ac\ud558\uae30 \uc704\ud55c \uac04\ub2e8\ud558\uace0 \ud6a8\uc728\uc801\uc778 \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,r.kt)("li",{parentName:"ul"},"\ud3fc \uc0c1\ud0dc \ubc0f \ub85c\uc9c1\uc744 \uad00\ub9ac\ud558\uba70, \uc8fc\ub85c \uc720\ud6a8\uc131 \uac80\uc0ac(Validation)\uacfc \uc0c1\ud0dc \uad00\ub9ac\uc5d0 \uc911\uc810"),(0,r.kt)("li",{parentName:"ul"},"\ud574\ub2f9 React \ud504\ub85c\uc81d\ud2b8 \uacbd\ub85c \ud130\ubbf8\ub110\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install react-hook-form")," \uc785\ub825\ud558\uc5ec \uc124\uce58")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"React Hook Form \uc0ac\uc6a9\ud558\ub294 \uc774\uc720")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\uc131\ub2a5 \ucd5c\uc801\ud654: \ub9ac\uc561\ud2b8 \ud6c5\uc744 \uc774\uc6a9\ud558\uc5ec \uac00\ubccd\uace0 \ube60\ub978 \uc131\ub2a5\uc744 \uc81c\uacf5",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},"\uc0c1\ud0dc\uad00\ub9ac: \ubcc4\ub3c4\uc758 \uc0c1\ud0dc \uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \ud544\uc694\ud558\uc9c0 \uc54a\uc74c",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},"\uc720\ud6a8\uc131 \uac80\uc0ac: \ub0b4\uc7a5\ub41c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud3fc \ud544\ub4dc\uc758 \uc720\ud6a8\uc131\uc744 \uac80\uc0ac",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},"HTML\ud45c\uc900\uc744 \ub530\ub984: HTML\ud3fc \uc5d8\ub9ac\uba3c\ud2b8\uc640 \ud568\uaed8 \uc0ac\uc6a9 \uac00\ub2a5",(0,r.kt)("br",null)))),(0,r.kt)("h2",{id:"react-hook-form-\ud575\uc2ec-\uae30\ub2a5"},"React Hook Form \ud575\uc2ec \uae30\ub2a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useForm",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"React Hook Form\uc758 \ud575\uc2ec"),(0,r.kt)("li",{parentName:"ul"},"\ud3fc\uc758 \uc0c1\ud0dc\ub97c \ucd08\uae30\ud654 \ubc0f \uc81c\uc5b4"))),(0,r.kt)("li",{parentName:"ul"},"useFormContext",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc911\ucca9\ub41c \ud3fc\uc5d0\uc11c\ub3c4 \uc0c1\uc704 \ud3fc\uc758 useForm\uac1d\uccb4\uc5d0 \uc811\uadfc \uac00\ub2a5"),(0,r.kt)("li",{parentName:"ul"},"\uc911\ucca9\ub41c \ud3fc\uc5d0\uc11c\ub3c4 \uc0c1\ud0dc \uacf5\uc720 \ubc0f \uc870\uc791"))),(0,r.kt)("li",{parentName:"ul"},"watch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \ud544\ub4dc\uc758 \uac12\uc744 \uac10\uc2dc"),(0,r.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \ud544\ub4dc\uc758 \uac12\uc744 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \uc6d0\ud558\ub294 \ub3d9\uc791\uc744 \uc218\ud589"))),(0,r.kt)("li",{parentName:"ul"},"register",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac01\uac01\uc758 \ud3fc \ud544\ub4dc\ub97c React Hook Form\uc5d0 \ub4f1\ub85d"),(0,r.kt)("li",{parentName:"ul"},"\ud3fc \ud544\ub4dc\uc758 \uc0c1\ud0dc\ub97c \ucd94\uc801\ud558\uace0, \uac12\uc758 \uc720\ud6a8\uc131 \uac80\uc0ac \ubc0f \ub2e4\uc591\ud55c \uc124\uc815"))),(0,r.kt)("li",{parentName:"ul"},"Controller",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud3fc \ud53c\ub4dc\uc758 \uc0c1\ud0dc \ubc0f \uc774\ubca4\ud2b8 \ucc98\ub9ac\ud558\ub294\ub370 \ub3c4\uc6c0")))),(0,r.kt)("h2",{id:"useform"},"useForm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const {\n    control,\n    handleSubmit,\n    formState,\n    ...\n} = useForm();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"control: \uc785\ub825 \ud544\ub4dc\ub97c \uc81c\uc5b4\ud558\uae30 \uc704\ud55c \uac1d\uccb4. Controller Component\uc5d0 \uc804\ub2ec\ud558\uc5ec \ud3fc\uc758 \uc0c1\ud0dc\ub97c \uc81c\uc5b4"),(0,r.kt)("li",{parentName:"ul"},"handleSubmit: \ud3fc\uc774 \uc81c\ucd9c\ub420 \ub54c \ud638\ucd9c\ub418\ub294 \ud568\uc218. \uc774 \ud568\uc218\ub97c \ud3fc\uc758 onSubmit \uc18d\uc131\uc73c\ub85c \uc804\ub2ec\ud558\uc5ec \uc81c\ucd9c \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac"),(0,r.kt)("li",{parentName:"ul"},"formState: \ud3fc\uc758 \uc0c1\ud0dc\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ud3ec\ud568\ud558\ub294 \uac1d\uccb4. \uc8fc\uc694 \uc18d\uc131\uc73c\ub85c isDirty, isValid, errors \ub4f1\uc774 \uc874\uc7ac",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"isDirty: \uc0ac\uc6a9\uc790\uac00 \ud3fc \ud544\ub4dc \uc911 \ud558\ub098\ub77c\ub3c4 \uc218\uc815\ud588\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778"),(0,r.kt)("li",{parentName:"ul"},"isValid: \ud604\uc7ac \ud3fc\uc774 \uc720\ud6a8\ud55c\uc9c0 \uc5ec\ubd80\ub97c \ud45c\ud604"),(0,r.kt)("li",{parentName:"ul"},"errors: \ud3fc \ud544\ub4dc\uc758 \uc720\ud6a8\uc131 \uac80\uc0ac \uacb0\uacfc\ub97c \ub098\ud0c0\ub0b4\ub294 \uac1d\uccb4"))),(0,r.kt)("li",{parentName:"ul"},"register: \uc785\ub825 \ud544\ub4dc\ub97c form\uc5d0 \ub4f1\ub85d\ud558\ub294 \ud568\uc218. \uc774 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc785\ub825 \ud544\ub4dc\ub97c Controller\uc5d0 \uc5f0\uacb0"),(0,r.kt)("li",{parentName:"ul"},"setValue: \uc785\ub825 \ud544\ub4dc\uc758 \uac12\uc744 \ub3d9\uc801\uc73c\ub85c \ubcc0\uacbd\ud558\ub294 \ud568\uc218. \ud2b9\uc815 \uc785\ub825 \ud544\ub4dc\uc758 \uac12\uc744 \uc5c5\ub370\uc774\ud2b8\ud560 \ub54c \uc0ac\uc6a9"),(0,r.kt)("li",{parentName:"ul"},"getValues: \ud604\uc7ac \ud3fc\uc758 \ubaa8\ub4e0 \uc785\ub825 \ud544\ub4dc\uc758 \uac12\uc744 \uac00\uc838\uc624\ub294 \ud568\uc218"),(0,r.kt)("li",{parentName:"ul"},"reset: \ud3fc\uc758 \uac12\uc744 \ucd08\uae30\ud654\ud558\ub294 \ud568\uc218. \uae30\ubcf8\uc801\uc73c\ub85c\ub294 \ubaa8\ub4e0 \uc785\ub825 \ud544\ub4dc\ub97c \ucd08\uae30\ud654\ud558\uc9c0\ub9cc \ud2b9\uc815 \ud544\ub4dc\ub9cc \ucd08\uae30\ud654\ud558\ub3c4\ub85d \uad6c\uc131\ub3c4 \uac00\ub2a5"),(0,r.kt)("li",{parentName:"ul"},"clearErrors: \ubaa8\ub4e0 \uc785\ub825 \ud544\ub4dc\uc758 \uc624\ub958 \uba54\uc2dc\uc9c0\ub97c \uc81c\uac70\ud558\ub294 \ud568\uc218"),(0,r.kt)("li",{parentName:"ul"},"setError: \ud2b9\uc815 \uc785\ub825 \ud544\ub4dc\uc5d0 \uc624\ub958 \uba54\uc2dc\uc9c0\ub97c \uc124\uc815\ud558\ub294 \ud568\uc218"),(0,r.kt)("li",{parentName:"ul"},"formStateRef: formState \uac1d\uccb4\uc758 \ucc38\uc870. \uc9c1\uc811\uc801\uc73c\ub85c \uc218\uc815\ub418\uc9c0 \uc54a\ub294 \uac83\uc774 \uc88b\uc73c\uba70, \uc8fc\ub85c \ud2b9\uc815 \ud6a8\uacfc\ub098 \ub85c\uc9c1\uc5d0\uc11c \ucc38\uc870\ud560 \ub54c \uc0ac\uc6a9"),(0,r.kt)("li",{parentName:"ul"},"trigger: \ud2b9\uc815 \uc785\ub825 \ud544\ub4dc\uc758 \uc720\ud6a8\uc131 \uac80\uc0ac\ub97c \uc218\ub3d9\uc73c\ub85c \ud2b8\ub9ac\uac70\ud558\ub294 \ud568\uc218. \ud2b9\uc815 \uc0c1\ud669\uc5d0\uc11c \uc0ac\uc6a9\uc790 \uc815\uc758 \uc720\ud6a8\uc131 \uac80\uc0ac\ub97c \uc2e4\ud589\ud560 \ub54c \uc720\uc6a9")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://react-hook-form.com/docs/useform"},"useForm \ubb38\uc11c"))),(0,r.kt)("h2",{id:"controller"},"Controller"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Controller\n  name=""\n  control=""\n  render={{\n    () => {}\n  }}\n  ...\n>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name(\ud544\uc218 \uc18d\uc131)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ud544\ub4dc\uc758 ",(0,r.kt)("strong",{parentName:"li"},"\uace0\uc720\ud55c \uc774\ub984")),(0,r.kt)("li",{parentName:"ul"},"\ud3fc \ub370\uc774\ud130 \uac1d\uccb4\uc758 \uc18d\uc131\uc73c\ub85c \uc0ac\uc6a9\ub418\uba70, useForm hook\uc758 handleSubmit \ud568\uc218\ub97c \ud1b5\ud574 \uc81c\ucd9c \uc2dc \ud574\ub2f9 \uc774\ub984\uc73c\ub85c \ub370\uc774\ud130\uc5d0 \uc811\uadfc"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"control(\ud544\uc218 \uc18d\uc131)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"useForm hook\uc5d0\uc11c \ubc18\ud658\ub418\ub294 control \uac1d\uccb4\ub97c \uc804\ub2ec"),(0,r.kt)("li",{parentName:"ul"},"React Hook Form\uc758 \uc0c1\ud0dc\uc640 \uba54\uc11c\ub4dc\ub97c \uc81c\uacf5\ud558\uc5ec \ud3fc\uc744 \uc81c\uc5b4\ud558\ub294 \ub370 \uc0ac\uc6a9"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"render(\ud544\uc218 \uc18d\uc131)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud544\ub4dc \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub80c\ub354\ub9c1\ud558\ub294 \ub370 \uc0ac\uc6a9\ud558\ub294 \ud568\uc218 \uc18d\uc131"),(0,r.kt)("li",{parentName:"ul"},"\uc774 \ud568\uc218\uc5d0\ub294 field \uac1d\uccb4\uac00 \uc804\ub2ec\ub418\uba70, \uc774 \uac1d\uccb4\uc758 \uc18d\uc131\uc744 \ud544\ub4dc \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc804\ub2ec\ud558\uc5ec \uc5f0\uacb0\uc774 \uac00\ub2a5"))),(0,r.kt)("li",{parentName:"ul"},"defaultValue",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud544\ub4dc\uc758 \ucd08\uae30\uac12\uc744 \uc124\uc815"),(0,r.kt)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9c8\uc6b4\ud2b8\ub420 \ub54c \ud3fc \uc0c1\ud0dc\uc5d0 \ucd08\uae30\uac12\uc774 \ubc18\uc601"))),(0,r.kt)("li",{parentName:"ul"},"rules",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ud544\ub4dc\uc758 \uc720\ud6a8\uc131 \uac80\uc0ac \uaddc\uce59\uc744 \uc815\uc758"),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \ud615\ud0dc\ub85c \uaddc\uce59\uc744 \uc9c0\uc815(required\ub098 pattern, message\uc758 \uaddc\uce59\uc744 \uc0ac\uc6a9)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"required: \ud3fc \uc694\uc18c\uac00 \ubc18\ub4dc\uc2dc \ucc44\uc6cc\uc838\uc57c \ud558\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0b4\ub294 \ub370 \uc0ac\uc6a9"),(0,r.kt)("li",{parentName:"ul"},"pattern: \uc815\uaddc \ud45c\ud604\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc785\ub825\uac12\uc758 \ud615\uc2dd\uc744 \uc9c0\uc815\ud558\ub294 \ub370 \uc0ac\uc6a9"))))),(0,r.kt)("li",{parentName:"ul"},"shouldUnregister",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud3fc\uc5d0\uc11c \uc5b8\ub9c8\uc6b4\ud2b8 \ub420 \ub54c \ud574\ub2f9 \ud544\ub4dc\ub97c \ub4f1\ub85d \ud574\uc81c\ud560\uc9c0 \uc5ec\ubd80\ub97c \uacb0\uc815"),(0,r.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \uac12\uc740 false\uc774\uba70, true\ub85c \uc124\uc815\ud558\uba74 \ud544\ub4dc\uac00 \uc5b8\ub9c8\uc6b4\ud2b8\ub418\uba74 \uc790\ub3d9\uc73c\ub85c \ub4f1\ub85d\uc774 \ud574\uc81c"))),(0,r.kt)("li",{parentName:"ul"},"ref",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8 \ub0b4\ubd80\uc5d0\uc11c \uc9c1\uc811 \ucc38\uc870\ud560 \ud544\uc694\uac00 \uc788\uc744 \ub54c \uc0ac\uc6a9"),(0,r.kt)("li",{parentName:"ul"},"\ud544\ub4dc \ucef4\ud3ec\ub10c\ud2b8\uc5d0 ref \uc18d\uc131\uc744 \ud1b5\ud574 ref\ub97c \uc804\ub2ec \uac00\ub2a5")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://react-hook-form.com/docs/usecontroller/controller"},"Controller \ubb38\uc11c"))),(0,r.kt)("h2",{id:"controller-vs-register"},"Controller vs register"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\uacf5\ud1b5\uc810")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"form\uad00\ub9ac \ubc0f \ub370\uc774\ud130 \uc218\uc9d1"),(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub450 \ub3d9\uc77c\ud55c \uc720\ud6a8\uc131 \uac80\uc0ac \uaddc\uce59"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\ucc28\uc774\uc810")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Controller"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubcf5\uc7a1\ud55c Component\ub098 \uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \uc801\ud569(\uae30\ubcf8 \uc694\uc18c\uc5d0\ub3c4 \uc0ac\uc6a9\uac00\ub2a5)"),(0,r.kt)("li",{parentName:"ul"},"register\uc5d0 \ube44\ud574 \ucf54\ub4dc \uad6c\ud604 \ub09c\uc774\ub3c4\uac00 \ub192\uc74c"),(0,r.kt)("li",{parentName:"ul"},"Component \ub0b4\ubd80\uc5d0 ref \ubc0f \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \ud3b8\ud558\uac8c \uad00\ub9ac(render props\ub85c \uc804\ub2ec)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"register"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc8fc\ub85c \uae30\ubcf8 HTML \uc785\ub825 \uc694\uc18c(",(0,r.kt)("inlineCode",{parentName:"li"},"<input>"),",",(0,r.kt)("inlineCode",{parentName:"li"},"<textarea>"),",",(0,r.kt)("inlineCode",{parentName:"li"},"<select>"),")\uc5d0 \uc0ac\uc6a9"),(0,r.kt)("li",{parentName:"ul"},"Controller\ubcf4\ub2e4 \uc801\uc740 \ub9ac\ub80c\ub354\ub9c1\uc774 \ubc1c\uc0dd"),(0,r.kt)("li",{parentName:"ul"},"\uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 Component\uc5d0 \uc9c1\uc811 \uc0ac\uc6a9\uc2dc, ref\uc804\ub2ec \ubc0f \ucd94\uac00\uc801\uc778 props \uc804\ub2ec\uc774 \uc5b4\ub824\uc6c0")))))),(0,r.kt)("h2",{id:"reacthookform-\uc2e4\uc2b5-\ucf54\ub4dc"},"ReactHookForm \uc2e4\uc2b5 \ucf54\ub4dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { useForm, Controller } from "react-hook-form";\n\nconst App = () => {\n  const {\n    register,\n    handleSubmit,\n    control,\n    setValue,\n    formState: { errors },\n    watch,\n    reset,\n  } = useForm({\n    defaultValues: { name: "", sex: "", birth: "", email: "", password: "" },\n  });\n\n  const watchName = watch("name");\n\n  const handleBirthChange = (event) => {\n    const { value } = event.target;\n    let formattedValue = value\n      .replace(/[^\\d.]/g, "")\n      .replace(/(\\d{4})(\\d)/, "$1.$2")\n      .replace(/(\\d{4}\\.\\d{2})(\\d)/, "$1.$2")\n      .substring(0, 10);\n\n    setValue("birth", formattedValue, { shouldValidate: true });\n  };\n\n  const onSubmit = (data) => {\n    console.log(data);\n    reset();\n  };\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <div>\n        <label htmlFor="name">\uc774\ub984: </label>\n        <Controller\n          name="name"\n          control={control}\n          rules={{ required: "\uc774\ub984\uc744 \uc801\uc5b4\uc8fc\uc138\uc694." }}\n          render={({ field }) => <input {...field} placeholder="\uc774\ub984 \uc791\uc131" />}\n        />\n        {errors.name && <p>{errors.name.message}</p>}\n      </div>\n\n      {watchName.length >= 3 && (\n        <div>\n          <label htmlFor="sex">\uc131\ubcc4: </label>\n          <input\n            placeholder="\uc131\ubcc4 ex)\ub0a8\uc790, \uc5ec\uc790"\n            {...register("sex", {\n              required: "\uc131\ubcc4\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",\n              validate: (value) =>\n                value === "\ub0a8\uc790" ||\n                value === "\uc5ec\uc790" ||\n                "\uc131\ubcc4\uc740 \'\ub0a8\uc790\' \ub610\ub294 \'\uc5ec\uc790\'\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.",\n            })}\n          />\n          {errors.sex && <p>{errors.sex.message}</p>}\n        </div>\n      )}\n\n      <div>\n        <label htmlFor="birth">\uc0dd\ub144\uc6d4\uc77c: </label>\n        <input\n          placeholder="\uc0dd\uc77c ex) YYYY.MM.DD"\n          {...register("birth", {\n            required: "\uc0dd\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",\n            onChange: (e) => handleBirthChange(e),\n            minLength: { value: 10, message: "\uc0dd\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694." },\n          })}\n        />\n        {errors.birth && <p>{errors.birth.message}</p>}\n      </div>\n\n      <div>\n        <label htmlFor="email">\uc774\uba54\uc77c: </label>\n        <Controller\n          name="email"\n          control={control}\n          rules={{\n            required: "\uc774\uba54\uc77c\uc744 \uc801\uc5b4\uc8fc\uc138\uc694.",\n            pattern: { value: /^\\S+@\\S+$/i, message: "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc774\uba54\uc77c" },\n          }}\n          render={({ field }) => <input {...field} placeholder="\uc774\uba54\uc77c \uc791\uc131" />}\n        />\n        {errors.email && <p>{errors.email.message}</p>}\n      </div>\n\n      <div>\n        <label htmlFor="password">\ube44\ubc00\ubc88\ud638: </label>\n        <input\n          placeholder="\ube44\ubc00\ubc88\ud638"\n          type="password"\n          {...register("password", {\n            required: "\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",\n            minLength: { value: 1, message: "1\uc790\ub9ac \uc774\uc0c1\uc744 \uc785\ub825" },\n            maxLength: { value: 10, message: "10\uc790\ub9ac \uc774\ud558\ub85c \uc785\ub825" },\n            validate: (value) =>\n              !value.includes("123") || "\ube44\ubc00\ubc88\ud638\ub97c \uc5b4\ub835\uac8c \ubcc0\uacbd\ud574\uc8fc\uc138\uc694.",\n          })}\n        />\n        {errors.password && <p>{errors.password.message}</p>}\n      </div>\n\n      <button type="submit">\uc804\uc1a1</button>\n    </form>\n  );\n};\n\nexport default App;\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/6649e9be-09f7-4cd6-82a3-ef28292c6f3d",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},"\uc704\uc758 \uc774\ubbf8\uc9c0\ub294 \ucd08\uae30\ud654\uba74\uc774\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\uc774\ub984 \ud544\ub4dc"',title:'"\uc774\ub984','\ud544\ub4dc"':!0},'<div>\n  <label htmlFor="name">\uc774\ub984: </label>\n  <Controller\n    name="name"\n    control={control}\n    rules={{ required: "\uc774\ub984\uc744 \uc801\uc5b4\uc8fc\uc138\uc694." }}\n    render={({ field }) => <input {...field} placeholder="\uc774\ub984 \uc791\uc131" />}\n  />\n  {errors.name && <p>{errors.name.message}</p>}\n</div>\n')),(0,r.kt)("p",{parentName:"admonition"},"\uc774\ub984\uc744 \uc785\ub825\ud558\ub294 \ud544\ub4dc",(0,r.kt)("br",null),"\nController\ub97c \ud1b5\ud574 \uc785\ub825 \ud544\ub4dc\ub97c \uc81c\uc5b4\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9",(0,r.kt)("br",null),"\nController\uc758 \uc18d\uc131\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"control"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rules"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," \ub4f1 \uc874\uc7ac\ud55c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"name: \ud544\ub4dc\ub97c \uc2dd\ubcc4\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \uc774\ub984"),(0,r.kt)("li",{parentName:"ul"},"control: React Hook form\uc758 \uc81c\uc5b4 \uac1d\uccb4. form\uc0c1\ud0dc\uc640 \uba54\uc11c\ub4dc\uc5d0 \uc811\uadfc \uc124\uc815"),(0,r.kt)("li",{parentName:"ul"},"rules: \ud544\ub4dc\uc758 \uc785\ub825 \uaddc\uce59(\uc704\uc758 \ucf54\ub4dc\ub294 \uc785\ub825\uac12\uc744 \ud544\uc218\ub85c \uc124\uc815)"),(0,r.kt)("li",{parentName:"ul"},"render: \ud544\ub4dc\uc758 \ub80c\ub354\ub9c1\uc744 \ub2f4\ub2f9\ud558\ub294 \ud568\uc218")),(0,r.kt)("p",{parentName:"admonition"},"Controller \ub0b4\ubd80\uc5d0 render\ub97c \ud1b5\ud574 input\ud0dc\uadf8\uc5d0 field\uac12\uc744 \uc804\ub2ec\ud55c\ub2e4.",(0,r.kt)("br",null),"\n\uc774\ub54c\uc758 field\uac12\uc5d0\ub294 Controller\uc5d0 \uc791\uc131\ub418\uc5c8\ub358 \uc18d\uc131\uac12(name, control, rules)\ub4e4\uc744 ",(0,r.kt)("strong",{parentName:"p"},"render prop\ub85c \uc804\ub2ec"),"\ud55c\ub2e4.",(0,r.kt)("br",null),"\n\uc989, input\ud0dc\uadf8\uc5d0 React Hook Form \uae30\ub2a5\uc744 \uc801\uc6a9\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub41c \ucf54\ub4dc\uc774\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},"erros.name\uc740 Controller\uc5d0\uc11c \uc801\uc6a9\ud55c rules\ub97c \uc704\ubc30\ub420 \uacbd\uc6b0\uc5d0 \uc2e4\ud589\ub418\ub294 \ucf54\ub4dc\uc774\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\uc131\ubcc4 \ud544\ub4dc"',title:'"\uc131\ubcc4','\ud544\ub4dc"':!0},'const {\n  register,\n  setValue,\n  formState: { errors },\n  watch,\n} = useForm({\n  defaultValues: { name: "", sex: "", birth: "", email: "", password: "" },\n});\n\nconst watchName = watch("name");\n\n{\n  watchName.length >= 3 && (\n    <div>\n      <label htmlFor="sex">\uc131\ubcc4: </label>\n      <input\n        placeholder="\uc131\ubcc4 ex)\ub0a8\uc790, \uc5ec\uc790"\n        {...register("sex", {\n          required: "\uc131\ubcc4\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",\n          validate: (value) =>\n            value === "\ub0a8\uc790" ||\n            value === "\uc5ec\uc790" ||\n            "\uc131\ubcc4\uc740 \'\ub0a8\uc790\' \ub610\ub294 \'\uc5ec\uc790\'\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.",\n        })}\n      />\n      {errors.sex && <p>{errors.sex.message}</p>}\n    </div>\n  );\n}\n')),(0,r.kt)("p",{parentName:"admonition"},"\uc131\ubcc4\uc744 \uc785\ub825\ud558\ub294 \ud544\ub4dc",(0,r.kt)("br",null),"\n\ucf54\ub4dc\ub97c \ubcf4\uba74 useForm\uc758 \ubc18\ud658\uac12 \uc911 \ud558\ub098\uc778 watch\uac00 \uc788\ub2e4.",(0,r.kt)("br",null),"\nwatch\uc758 \uae30\ub2a5\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\ud544\ub4dc\uc758 \uac12\uc744 \uac10\uc2dc"),"\ud55c\ub2e4.",(0,r.kt)("br",null),"\n\uc989, \uc704\uc758 \ucf54\ub4dc\uc5d0\uc11c\ub294 name\ud544\ub4dc\ub97c \uac10\uc2dc\ud558\ub3c4\ub85d \uc124\uc815\ud558\uc600\ub2e4.",(0,r.kt)("br",null),"\nname\ud544\ub4dc\uc758 \uc785\ub825\uac12\uc774 3\uc790\ub9ac\uac00 \ub118\uc744 \uacbd\uc6b0, \uc131\ubcc4 \uc785\ub825\uc774 \uac00\ub2a5\ud55c \ud544\ub4dc\uac00 \ubcf4\uc5ec\uc9c0\uac8c \ub41c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/38ee34e8-eaad-4ca6-a6da-193f1be9bf5a",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/45d698d7-2a00-42d8-bacf-cedb17e30f02",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},"Controller\ub97c \uc774\uc6a9\ud558\uc9c0 \uc54a\uace0, input\ud0dc\uadf8\uc5d0 \uc9c1\uc811\uc801\uc73c\ub85c register\ub85c \uc124\uc815\ud558\uc600\ub2e4.",(0,r.kt)("br",null),"\nregister\ub294 \ub9d0\uadf8\ub300\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\ub4f1\ub85d\ud558\ub2e4"),"\ub294 \uc758\ubbf8\ub97c \uac00\uc9c4\ub2e4.",(0,r.kt)("br",null),"\n\uccab\ubc88\uc9f8 \uc778\uc790\uac12\uc740 \uc124\uc815\ud560 ",(0,r.kt)("strong",{parentName:"p"},"\ud544\ub4dc\uba85\uc744 \uc124\uc815"),"\ud55c\ub2e4.",(0,r.kt)("br",null),"\n\ub450\ubc88\uc9f8 \uc778\uc790\uac12\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\uac1d\uccb4 \ud615\ud0dc\ub85c \uc791\uc131"),"\uc744 \ud574\uc57c\ub418\uba70, \ud544\ub4dc\uba85\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uaddc\uce59\uc744 \uc124\uc815"),"\ud558\uba74 \ub41c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"required: \uc785\ub825\uac12\uc744 \ud544\uc218\ub85c \ubc1b\uac8c \uc124\uc815"),(0,r.kt)("li",{parentName:"ul"},"validate: \uc785\ub825\uac12\uc758 \uc720\ud6a8\uc131\uc744 \uac80\uc0ac\ud558\uae30 \uc704\ud55c \ud568\uc218")),(0,r.kt)("p",{parentName:"admonition"},"validate\ub85c \ud574\ub2f9 \uc785\ub825\uac12\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"\ub0a8\uc790")," \ud639\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"\uc5ec\uc790"),"\uac00 \uc544\ub2d0 \uacbd\uc6b0, \uc5d0\ub7ec \uba54\uc138\uc9c0\uac00 \ubc1c\uc0dd\ud558\ub3c4\ub85d \uc124\uc815\ud558\uc600\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\uc0dd\ub144\uc6d4\uc77c \ud544\ub4dc"',title:'"\uc0dd\ub144\uc6d4\uc77c','\ud544\ub4dc"':!0},'const {\n  register,\n  setValue,\n  formState: { errors },\n} = useForm({\n  defaultValues: { name: "", sex: "", birth: "", email: "", password: "" },\n});\n\nconst handleBirthChange = (event) => {\n  const { value } = event.target;\n  let formattedValue = value\n    .replace(/[^\\d.]/g, "")\n    .replace(/(\\d{4})(\\d)/, "$1.$2")\n    .replace(/(\\d{4}\\.\\d{2})(\\d)/, "$1.$2")\n    .substring(0, 10);\n\n  setValue("birth", formattedValue, { shouldValidate: true });\n};\n\n<div>\n  <label htmlFor="birth">\uc0dd\ub144\uc6d4\uc77c: </label>\n  <input\n    placeholder="\uc0dd\uc77c ex) YYYY.MM.DD"\n    {...register("birth", {\n      required: "\uc0dd\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",\n      onChange: (e) => handleBirthChange(e),\n      minLength: { value: 10, message: "\uc0dd\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694." },\n    })}\n  />\n  {errors.birth && <p>{errors.birth.message}</p>}\n</div>;\n')),(0,r.kt)("p",{parentName:"admonition"},"\uc0dd\ub144\uc6d4\uc77c\uc744 \uc785\ub825\ud558\ub294 \ud544\ub4dc",(0,r.kt)("br",null),"\nregister\ub97c \uc774\uc6a9\ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"p"},"\uc785\ub825\uac12\uc744 \ud544\uc218"),"\ub85c \ubc1b\uc73c\uba70, ",(0,r.kt)("inlineCode",{parentName:"p"},"\ucd5c\uc18c\ud55c\uc758 \uae38\uc774(minLength)")," \uc9c0\uc815\ud558\ub294 \uc18d\uc131\ub3c4 \uc0ac\uc6a9\ud558\uc600\ub2e4.",(0,r.kt)("br",null),"\n\uc785\ub825\uac12\uc774 \uc22b\uc790\ub85c\ub9cc \uad6c\uc131, \ud574\ub2f9 \uc785\ub825\uac12\uc758 \uae38\uc774\uc5d0 \ub530\ub77c ",(0,r.kt)("inlineCode",{parentName:"p"},"."),"\uc744 \uc790\ub3d9\uc801\uc73c\ub85c \uc785\ub825\ub418\uac8c \ud558\uae30 \uc704\ud574 handleBirthChange\ud568\uc218\ub97c \uad6c\ud604",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},"handleBirthChange\ud568\uc218\ub97c \uc0b4\ud3b4\ubcf4\uba74 \ud604\uc7ac \uc785\ub825\uac12\uc744 \ubc1b\uc544\uc640 \uc815\uaddc\ud45c\ud604\uc2dd\uc73c\ub85c \ubb38\uc790\uc5f4\uc744 \ubcc0\uacbd\ud558\uace0 \uc788\ub2e4.",(0,r.kt)("br",null),"\n\ubcc0\uacbd\ub41c \ubb38\uc790\ub294 useForm\uc758 \ubc18\ud658\uac12 \uc911 \ud558\ub098\uc778 setValue\ub97c \ud1b5\ud574 \ubcc0\uacbd\uc744 \ud55c\ub2e4.",(0,r.kt)("br",null),"\nsetValue\uc758 \uccab\ubc88\uc9f8 \uc778\uc790\uac12\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\ubcc0\uacbd\ud560 \ud544\ub4dc\uba85"),"\uc744 \uc791\uc131",(0,r.kt)("br",null),"\n\ub450\ubc88\uc9f8 \uc778\uc790\uac12\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\ubcc0\uacbd\ud560 \ud544\ub4dc\uba85\uc758 \uac12"),"\uc744 \uc791\uc131",(0,r.kt)("br",null),"\n\uc138\ubc88\uc9f8\ub294 \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc801\uc6a9\ud560 \ub54c ",(0,r.kt)("strong",{parentName:"p"},"\ucd94\uac00 \uc635\uc158\uc744 \uac1d\uccb4 \ud615\ud0dc\ub85c \uc124\uc815"),(0,r.kt)("br",null),"\n\uc138\ubc88\uc9f8 \uc778\uc790\uac12\uc5d0 shouldValidate \uc124\uc815\ud568\uc73c\ub85c\uc368 \uac12\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \uc720\ud6a8\uc131\uc744 \uc790\ub3d9\uc73c\ub85c \uac80\uc0ac\ud55c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="input onChange"',title:'"input','onChange"':!0},'<input\n  placeholder="\uc0dd\uc77c ex) YYYY.MM.DD"\n  onChange={(e) => handleBirthChange(e)}\n  {...register("birth", {\n    required: "\uc0dd\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",\n    minLength: { value: 10, message: "\uc0dd\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694." },\n  })}\n/>\n')),(0,r.kt)("p",{parentName:"admonition"},"input\ud0dc\uadf8\uc758 onChange\uc5d0 handleBirthChange\ud568\uc218\ub97c \uc801\uc6a9\ud558\uac8c \ub418\uba74 \ub3d9\uc791\uc744 \uc81c\ub300\ub85c \ud558\uc9c0\uc54a\ub294\ub2e4.",(0,r.kt)("br",null),"\n\ud574\ub2f9 register\ub97c \ucd9c\ub825\uc744 \ud574\ubcf4\uba74 \ubc11\uc758 \ucd9c\ub825 \uacb0\uacfc\uac00 \ub098\uc628\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/dacd9221-ea31-4b83-ab9e-88e5f2a413f1",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},"register\uac1d\uccb4 \ub0b4\ubd80\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onBlur"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ref"),"\uac00 \uc788\ub2e4.",(0,r.kt)("br",null),"\ninput\uc758 onChange\uac00 register\uc758 onChange\uacfc \uac19\uc740 \uc18d\uc131\uba85\uc744 \uac00\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0, \ub9c8\uc9c0\ub9c9\uc5d0 \uc9c0\uc815\ub41c \uac12\uc73c\ub85c \uc801\uc6a9\ub41c\ub2e4.",(0,r.kt)("br",null),"\nonChange\uc758 \ub3d9\uc791\uc744 \uc81c\ub300\ub85c \ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,r.kt)("strong",{parentName:"p"},"register \ub4a4\uc5d0 onChange\ub97c \uc791\uc131"),(0,r.kt)("br",null),"\n\ub610\ub294 ",(0,r.kt)("strong",{parentName:"p"},"register\uc758 onChange\uc5d0 \uc791\uc131"),"\ud558\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud558\uac8c \ub41c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\uc774\uba54\uc77c \ud544\ub4dc"',title:'"\uc774\uba54\uc77c','\ud544\ub4dc"':!0},'<div>\n  <label htmlFor="email">\uc774\uba54\uc77c: </label>\n  <Controller\n    name="email"\n    control={control}\n    rules={{\n      required: "\uc774\uba54\uc77c\uc744 \uc801\uc5b4\uc8fc\uc138\uc694.",\n      pattern: { value: /^\\S+@\\S+$/i, message: "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc774\uba54\uc77c" },\n    }}\n    render={({ field }) => <input {...field} placeholder="\uc774\uba54\uc77c \uc791\uc131" />}\n  />\n  {errors.email && <p>{errors.email.message}</p>}\n</div>\n')),(0,r.kt)("p",{parentName:"admonition"},"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\ub294 \ud544\ub4dc",(0,r.kt)("br",null),"\nname \ud544\ub4dc\uc640 \uac19\uc774 Controller\ub97c \uc0ac\uc6a9\ud558\uc5ec \uad6c\ud604\ud558\uc600\ub2e4.",(0,r.kt)("br",null),"\npattern\uc740 render\ub97c \ud1b5\ud574 \ud45c\ud604\ub420 Component\uc758 \uac12\uc774 \ud574\ub2f9 \uc815\uaddc\ud45c\ud604\uc2dd\uc758 \uc870\uac74\uacfc \ubd80\ud569\ud55c\uc9c0 \ud655\uc778\ud55c\ub2e4.",(0,r.kt)("br",null),"\n\uc870\uac74\uc774 \ubd80\ud569\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0, message\ub97c \ud1b5\ud574 \uc5d0\ub7ec\ub97c \ud45c\uc2dc\ud55c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\ube44\ubc00\ubc88\ud638 \ud544\ub4dc"',title:'"\ube44\ubc00\ubc88\ud638','\ud544\ub4dc"':!0},'<div>\n  <label htmlFor="password">\ube44\ubc00\ubc88\ud638: </label>\n  <input\n    placeholder="\ube44\ubc00\ubc88\ud638"\n    type="password"\n    {...register("password", {\n      required: "\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",\n      minLength: { value: 1, message: "1\uc790\ub9ac \uc774\uc0c1\uc744 \uc785\ub825" },\n      maxLength: { value: 10, message: "10\uc790\ub9ac \uc774\ud558\ub85c \uc785\ub825" },\n      validate: (value) =>\n        !value.includes("123") || "\ube44\ubc00\ubc88\ud638\ub97c \uc5b4\ub835\uac8c \ubcc0\uacbd\ud574\uc8fc\uc138\uc694.",\n    })}\n  />\n  {errors.password && <p>{errors.password.message}</p>}\n</div>\n')),(0,r.kt)("p",{parentName:"admonition"},"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\ub294 \ud544\ub4dc",(0,r.kt)("br",null),"\nregister\ub97c \uc774\uc6a9\ud558\uc5ec \ub2e4\uc591\ud55c \uc870\uac74\uc744 \uac78\uc5b4 \uad6c\ud604\ud558\uc600\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="submit"',title:'"submit"'},'const {\n  handleSubmit,\n  formState: { errors },\n  reset,\n} = useForm({\n  defaultValues: { name: "", sex: "", birth: "", email: "", password: "" },\n});\n\nconst onSubmit = (data) => {\n  console.log(data);\n  reset();\n};\n\nreturn (\n  <form onSubmit={handleSubmit(onSubmit)}>\n    // \ud544\ub4dc\n    <button type="submit">\uc804\uc1a1</button>\n  </form>\n);\n')),(0,r.kt)("p",{parentName:"admonition"},"\ubaa8\ub4e0 \ud544\ub4dc\uc758 \uac12\uc744 \uc785\ub825\ud588\uc744 \uacbd\uc6b0\uc5d0 \ubc84\ud2bc\uc744 \ub20c\ub7ec \ub370\uc774\ud130\ub97c \ud655\uc778\ud558\ub294 \ucf54\ub4dc",(0,r.kt)("br",null),"\n\ud574\ub2f9 \ubc84\ud2bc\uc744 \ub204\ub97c \uacbd\uc6b0, handleSubmit(onSubmit)\uc774 \uc2e4\ud589\ub41c\ub2e4.",(0,r.kt)("br",null),"\nhandleSubmit\uc740 ",(0,r.kt)("strong",{parentName:"p"},"form \uc81c\ucd9c \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac"),"\ud558\uae30 \uc704\ud55c React Hook Form\uc758 \ud568\uc218\uc774\ub2e4.",(0,r.kt)("br",null),"\nhandleSubmit\uc740 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uac00 \uc2e4\ud589\ub418\uc5b4 ",(0,r.kt)("strong",{parentName:"p"},"form\ub370\uc774\ud130\ub97c \uc218\uc9d1 \ubc0f \ubcf4\ub0b4\uc904 \ucf5c\ubc31 \ud568\uc218\ub97c \ud638\ucd9c"),(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/9a49b97a-f861-4aa8-84b9-faea2b52932f",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/4b6bea6a-1daf-4e5a-98b0-0a9745c402ef",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},"onSubmit\uc5d0 \uc804\ub2ec\ub41c data\ub77c\ub294 \ubcc0\uc218\ub294 Hook form\uc548\uc5d0 \ub370\uc774\ud130\uc774\ub2e4.",(0,r.kt)("br",null),"\nregister \ud639\uc740 Controller\ub97c \ud1b5\ud574 \uc124\uc815\ub41c \ud544\ub4dc \uac12\uc740 key\ub85c \ub4f1\ub85d\ub418\uc5b4\uc788\uace0,\uc785\ub825\uac12\ub4e4\uc740 value\ub85c \uc800\uc7a5\ub418\uc5b4\uc788\ub2e4.",(0,r.kt)("br",null),"\n\ucd9c\ub825 \ud6c4, useForm\uc758 \ubc18\ud658\uac12 \uc911 \ud558\ub098\uc778 reset\uc744 \uc774\uc6a9\ud558\uc5ec \uac12\ub4e4\uc744 \ucd08\uae30\ud654\ud55c\ub2e4.",(0,r.kt)("br",null),"\n\uc774\ub54c \ucd08\uae30\ud654\uac00 \ub418\ub294 \uac12\uc740 useForm\uc758 \ub9e4\uac1c\ubcc0\uc218\ub85c \uc124\uc815\ub41c defaultValues\ub85c \ucd08\uae30\ud654\uac00 \ub41c\ub2e4.",(0,r.kt)("br",null))))}k.isMDXComponent=!0}}]);
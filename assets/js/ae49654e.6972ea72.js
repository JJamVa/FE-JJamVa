"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[3517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o="Redux Toolkit",c={unversionedId:"frontend/React/ReduxToolKit",id:"frontend/React/ReduxToolKit",title:"Redux Toolkit",description:"Redux Toolkit\uc774\ub780?",source:"@site/docs/frontend/10-React/22-ReduxToolKit.md",sourceDirName:"frontend/10-React",slug:"/frontend/React/ReduxToolKit",permalink:"/FE-TIL-JJamVa/docs/frontend/React/ReduxToolKit",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/10-React/22-ReduxToolKit.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{},sidebar:"frontend",previous:{title:"Redux",permalink:"/FE-TIL-JJamVa/docs/frontend/React/Redux"},next:{title:"Stack\uacfc Queue",permalink:"/FE-TIL-JJamVa/docs/frontend/Algorithm/stack&queue"}},l={},s=[{value:"Redux Toolkit\uc774\ub780?",id:"redux-toolkit\uc774\ub780",level:2},{value:"Redux Toolkit \uad6c\ud604",id:"redux-toolkit-\uad6c\ud604",level:2},{value:"store \uc0dd\uc131 \ubc0f component\uc5d0 \uc804\ub2ec",id:"store-\uc0dd\uc131-\ubc0f-component\uc5d0-\uc804\ub2ec",level:3},{value:"Reducer \uc0dd\uc131 \ubc0f \uacb0\ud569\ud558\uc5ec store\ub97c \uc0dd\uc131",id:"reducer-\uc0dd\uc131-\ubc0f-\uacb0\ud569\ud558\uc5ec-store\ub97c-\uc0dd\uc131",level:3},{value:"state \uac00\uc838\uc624\uae30 \ubc0f action \uc804\ub2ec",id:"state-\uac00\uc838\uc624\uae30-\ubc0f-action-\uc804\ub2ec",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redux-toolkit"},"Redux Toolkit"),(0,r.kt)("h2",{id:"redux-toolkit\uc774\ub780"},"Redux Toolkit\uc774\ub780?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Redux\ub97c \ub354\uc6b1 \uc27d\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \uacf5\uc2dd\uc801\uc778 Redux \ub77c\uc774\ube0c\ub7ec\ub9ac \ud655\uc7a5\ud310"),(0,r.kt)("li",{parentName:"ul"},"\ubd88\ubcc0\uc131\uc744 \uc774\uc6a9\ud55c \uc0c1\ud0dc \uad00\ub9ac \uac1c\uc120"),(0,r.kt)("li",{parentName:"ul"},"Immer \ub77c\uc774\ube0c\ub7ec\ub9ac \uc0ac\uc6a9 \uac00\ub2a5"),(0,r.kt)("li",{parentName:"ul"},"\ud574\ub2f9 React \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud130\ubbf8\ub110\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install @reduxjs/toolkit"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install react-redux")," \uc785\ub825\ud558\uc5ec \uc124\uce58")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("h4",{parentName:"admonition",id:"immer\ub77c\uc774\ube0c\ub7ec\ub9ac\ub780"},"Immer\ub77c\uc774\ube0c\ub7ec\ub9ac\ub780?"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Immer\uc740 \ubd88\ubcc0\uc131\uc744 \uc720\uc9c0\ud558\uba74\uc11c \uac1d\uccb4\ub97c \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5"),(0,r.kt)("li",{parentName:"ul"},"\ubd88\ubcc0\uc131\uc740 \uac1d\uccb4\ub97c \uc9c1\uc811 \uc218\uc815\ud558\uc9c0 \uc54a\uace0 \uc0c8\ub85c\uc6b4 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uc5ec \uc0c1\ud0dc \ubcc0\uacbd\uc744 \ubc18\uc601\ud558\ub294 \uac1c\ub150\uc744 \uc758\ubbf8"))),(0,r.kt)("h2",{id:"redux-toolkit-\uad6c\ud604"},"Redux Toolkit \uad6c\ud604"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uad6c\ud604",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"1\uc529 \uc99d\uac00": \uac12\uc744 \ud558\ub098\uc529 \uc99d\uac00\ud558\uc5ec \ud654\uba74 \ucd9c\ub825'),(0,r.kt)("li",{parentName:"ul"},'"5\uc529 \uc99d\uac00": \uac12\uc744 5\uc529 \uc99d\uac00\ud558\uc5ec \ud654\uba74 \ucd9c\ub825'),(0,r.kt)("li",{parentName:"ul"},'"-1\uc529 \uac10\uc18c": \uac12\uc744 -1\uc529 \uac10\uc18c\ud558\uc5ec \ud654\uba74 \ucd9c\ub825'),(0,r.kt)("li",{parentName:"ul"},'"\uc22b\uc790 \uac00\ub9ac\uae30/\ucf1c\uae30": \ubc84\ud2bc\uc744 \ud074\ub9ad\uc2dc, \ud45c\ud604\ud558\uace0 \uc788\ub294 \uc22b\uc790 \uac00\ub9ac\uae30/\ucf1c\uae30')))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/46b3cc94-e719-4b50-90fb-e166e979f2b6",alt:"image"})),(0,r.kt)("h3",{id:"store-\uc0dd\uc131-\ubc0f-component\uc5d0-\uc804\ub2ec"},"store \uc0dd\uc131 \ubc0f component\uc5d0 \uc804\ub2ec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js"',title:'"index.js"'},'import React from "react";\nimport { createRoot } from "react-dom/client";\n\nimport Button from "./components/Button";\nimport { Provider } from "react-redux";\nimport store from "./store/store";\n\nconst container = document.getElementById("root");\nconst root = createRoot(container);\nroot.render(\n  <Provider store={store}>\n    <Button />\n  </Provider>\n);\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"store.js\uc5d0\uc11c \uc0dd\uc131\ud55c store\uc744 import \ubc1b\ub294\ub2e4.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"<Provider>"),"\ub97c \uc774\uc6a9\ud558\uc5ec \ud558\uc704 Component\ub4e4\uc5d0\uac8c Redux store\uc758 \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc804\ub2ec\ud55c\ub2e4.",(0,r.kt)("br",null))),(0,r.kt)("h3",{id:"reducer-\uc0dd\uc131-\ubc0f-\uacb0\ud569\ud558\uc5ec-store\ub97c-\uc0dd\uc131"},"Reducer \uc0dd\uc131 \ubc0f \uacb0\ud569\ud558\uc5ec store\ub97c \uc0dd\uc131"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"configureStore()"),": Redux Toolkit\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud568\uc218, Redux store\ub97c \uc124\uc815\ud558\uace0 \uc0dd\uc131\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \ud568\uc218"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createSlice()"),": Redux Toolkit\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud568\uc218, Redux Reducer\uc640 action \uc0dd\uc131\uc790\ub97c \ub2e8\uc77c \uc2ac\ub77c\uc774\uc2a4\ub85c \uacb0\ud569\ud558\uc5ec \ub354 \uac04\ub2e8\ud558\uace0 \ubaa8\ub4c8\ud654\ub41c \ubc29\uc2dd\uc73c\ub85c Redux \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \ub3c4\uad6c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="store.js"',title:'"store.js"'},'import { createSlice, configureStore } from "@reduxjs/toolkit";\n\nconst initialCounterState = { count: 0 };\n\nconst counterSlice = createSlice({\n  name: "\uc22b\uc790\uc138\uae30",\n  initialState: initialCounterState,\n  reducers: {\n    increase1(state) {\n      state.count++;\n    },\n    increase5(state, action) {\n      state.count = state.count + action.payload;\n    },\n    decrease(state) {\n      state.count--;\n    },\n  },\n});\n\nconst initialVisibleState = { visible: true };\n\nconst visibleSlice = createSlice({\n  name: "\ud654\uba74 \ud45c\uc2dc",\n  initialState: initialVisibleState,\n  reducers: {\n    onOff(state) {\n      state.visible = !state.visible;\n    },\n  },\n});\n\nconst store = configureStore({\n  reducer: {\n    sliceOfCount: counterSlice.reducer,\n    sliceOfVisible: visibleSlice.reducer,\n  },\n});\n\nexport const counterActions = counterSlice.actions;\nexport const visibleActions = visibleSlice.actions;\n\nexport default store;\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'"slice \uc0dd\uc131"','"slice':!0,'\uc0dd\uc131"':!0},'const initialCounterState = { count: 0 };\n\nconst counterSlice = createSlice({\n  name: "\uc22b\uc790\uc138\uae30",\n  initialState: initialCounterState,\n  reducers: {\n    increase1(state) {\n      state.count++;\n    },\n    increase5(state, action) {\n      state.count = state.count + action.payload;\n    },\n    decrease(state) {\n      state.count--;\n    },\n  },\n});\n')),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"initialCounterState")," \ubcc0\uc218\ub294 \uc0c1\ud0dc\uc758 \ucd08\uae30 \uac12\uc744 \uc758\ubbf8.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"createSlice"),"\ub294 Reducer\ub97c \uc0dd\uc131\ud558\ub294 \uc5ed\ud560\uc744 \ud558\uba70, \uac1d\uccb4(key,value) \ud615\ud0dc\ub85c \uad00\ub9ac\ub97c \ud55c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},"createSlice\uc5d0 \ud544\uc694\ud55c \uc18d\uc131\uc774 \uc788\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": slice\uc758 \uc774\ub984\uc744 \ud45c\ud604. action\uacfc Reducer\uc5d0 \ub300\ud55c \uc774\ub984 \uacf5\uac04\uc744 \uad6c\ubcc4\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initialState"),": slice\uc758 \ucd08\uae30 \uc0c1\ud0dc\ub97c \uc815\uc758"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reducers"),": slice\uc758 action\uc744 \uc815\uc758")),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Reducer\uac00 2\uac1c \uc774\uc0c1\uc77c \uacbd\uc6b0 store \uc0dd\uc131 \ucf54\ub4dc"',title:'"Reducer\uac00',"2\uac1c":!0,"\uc774\uc0c1\uc77c":!0,"\uacbd\uc6b0":!0,store:!0,"\uc0dd\uc131":!0,'\ucf54\ub4dc"':!0},"const store = configureStore({\n  reducer: {\n    sliceOfCount: counterSlice.reducer,\n    sliceOfVisible: visibleSlice.reducer,\n  },\n  // reducer: counterSlice.reducer\n  // reducer\uac00 \ub2e8\uc77c\ub85c \uc0ac\uc6a9\ub420 \uacbd\uc6b0\n});\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"configureStore"),"\ub294 store\ub97c \uc0dd\uc131\ud558\ub294 \ud568\uc218\uc774\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},"configureStore\uc5d0 \ud544\uc694\ud55c \uc18d\uc131\uc774 \uc788\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reducer"),": store\uac00 \uad00\ub9ac\ud560 \uc5ec\ub7ec \uac1c\uc758 slice\ub97c \uc815\uc758.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"key\uac12\uc740 slice\ub97c \ud638\ucd9c\ud560 \ub54c, \ubd80\ub97c \uc774\ub984\uc744 \uc815\uc758"),(0,r.kt)("li",{parentName:"ul"},"value\ub294 slice\uc758 reducer\ub97c \ud638\ucd9c")))),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="export slice action"',title:'"export',slice:!0,'action"':!0},"export const counterActions = counterSlice.actions;\nexport const visibleActions = visibleSlice.actions;\n")),(0,r.kt)("p",{parentName:"admonition"},"\uc704\uc758 \ucf54\ub4dc\ub294 \ud574\ub2f9 slice\uc758 actions\uc744 \uc0ac\uc6a9\ud560 Component\uc5d0 \ubcf4\ub0b4\uae30 \uc704\ud574 \uc791\uc131\ub41c \ucf54\ub4dc\uc774\ub2e4.",(0,r.kt)("br",null))),(0,r.kt)("h3",{id:"state-\uac00\uc838\uc624\uae30-\ubc0f-action-\uc804\ub2ec"},"state \uac00\uc838\uc624\uae30 \ubc0f action \uc804\ub2ec"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useSelector()"),": react-redux\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud568\uc218, Redux store\uc758 \uc0c1\ud0dc\ub97c \uc77d\uc5b4\uc624\uba70, \uc120\ud0dd\ud558\ub294\ub370 \uc0ac\uc6a9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useDispatch()"),": react-redux\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud568\uc218, action\uc744 Conponent \ub0b4\ubd80\uc5d0\uc11c \ubc1c\uc0dd\uc2dc\ud0a4\uace0, Redux store\uc5d0 action\uc758 type \ubc0f \ucd94\uac00 \ub370\uc774\ud130\ub97c \uc804\ub2ec")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Button.jsx"',title:'"Button.jsx"'},'import React from "react";\nimport { useDispatch, useSelector } from "react-redux";\nimport { counterActions, visibleActions } from "../store/store";\n\nfunction Button() {\n  const { count } = useSelector((state) => state.sliceOfCount);\n  const { visible } = useSelector((state) => state.sliceOfVisible);\n\n  const dispatch = useDispatch();\n\n  const increase1 = () => {\n    dispatch(counterActions.increase1());\n  };\n  const increase5 = () => {\n    dispatch(counterActions.increase5(5));\n  };\n  const decrease = () => {\n    dispatch(counterActions.decrease());\n  };\n  const isVisible = () => {\n    dispatch(visibleActions.onOff());\n  };\n\n  return (\n    <div>\n      {visible && <p>{count}</p>}\n      <button onClick={increase1}>1\uc529 \uc99d\uac00</button>\n      <button onClick={increase5}>5\uc529 \uc99d\uac00</button>\n      <button onClick={decrease}>-1\uc529 \uac10\uc18c</button>\n      <button onClick={isVisible}>\uc22b\uc790 {visible ? "\uac00\ub9ac\uae30" : "\ucf1c\uae30"}</button>\n    </div>\n  );\n}\n\nexport default Button;\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const { count } = useSelector((state) => state.sliceOfCount);\nconst { visible } = useSelector((state) => state.sliceOfVisible);\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/94f34884-f4bb-4c34-a58f-3245fd158d8b",alt:"image"})),(0,r.kt)("p",{parentName:"admonition"},"useSelector\ud568\uc218 \uc548 state\uc758 \uac12\uc744 \ucd9c\ub825\ud558\uba74 \uc704\uc758 \uac12\uc774 \ucd9c\ub825\ub41c\ub2e4.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"sliceOfCount"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"sliceOfVisible"),"\uc758 \uac12\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"configureStore")," \uc0dd\uc131\ud560 \ub54c, ",(0,r.kt)("strong",{parentName:"p"},"reducer \uc18d\uc131\uc548 \uac1d\uccb4\uc758 key\uac12\uc778 \uac83\uc744 \ud655\uc778"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"sliceOfCount"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"sliceOfVisible"),"\uc758 ",(0,r.kt)("strong",{parentName:"p"},"\uc18d\uc131 \uac12\uc778 ",(0,r.kt)("inlineCode",{parentName:"strong"},"count"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"strong"},"visible")," \uac01 slice\uc5d0 \uc0ac\uc6a9\ub41c state \uac12"),"\uc744 \uad6c\uc870\ubd84\ud574 \ud560\ub2f9\uc73c\ub85c \uc0dd\uc131\ud588\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { counterActions, visibleActions } from "../store/store";\n\nconst dispatch = useDispatch();\n\nconst increase1 = () => {\n  dispatch(counterActions.increase1());\n};\nconst increase5 = () => {\n  dispatch(counterActions.increase5(5));\n};\nconst decrease = () => {\n  dispatch(counterActions.decrease());\n};\nconst isVisible = () => {\n  dispatch(visibleActions.onOff());\n};\n')),(0,r.kt)("p",{parentName:"admonition"},"store.js\uc5d0\uc11c slice\uc758 action\uc744 export\ub97c \ud558\uc600\uc5c8\ub2e4.",(0,r.kt)("br",null),"\n\ud574\ub2f9 Component\uc5d0 state\uac12\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 import\ub97c \ud558\uc600\ub2e4.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"useDispatch"),"\ub97c \uc774\uc6a9\ud558\uc5ec \uac01 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uac00 \ud638\ucd9c\ub418\uc5c8\uc744 \ub54c\uc758 Redux\uc758 action\uc744 store\uc5d0 \uc804\ub2ec\ud558\uc5ec \ud574\ub2f9 slice\uc758 \ud568\uc218\ub97c \uc2e4\ud589\ud55c\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},'\ub9cc\uc57d "1\uc529 \uc99d\uac00" \ub77c\ub294 \ubc84\ud2bc\uc744 \ud074\ub9ad \uc2dc, increase1 \ud568\uc218\uac00 \uc2e4\ud589\ud55c\ub2e4.',(0,r.kt)("br",null),"\nincrease1\ud568\uc218 \uc548\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch(counterActions.increase1())"),"\uc774 \uc2e4\ud589\ub41c\ub2e4.",(0,r.kt)("br",null),"\n\uadf8\ub7fc, Redux store\uc5d0 action\uc744 \ubc1b\uc544, \ud574\ub2f9 action\uc5d0 \uc815\uc758\ub41c slice\uc5d0 increase1\uc774\ub77c\ub294 \ud568\uc218\ub97c \uc2e4\ud589\uc2dc\ud0a8\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Button.jsx\uc758 increas5\ud568\uc218"',title:'"Button.jsx\uc758','increas5\ud568\uc218"':!0},'import { counterActions, visibleActions } from "../store/store";\n\nconst dispatch = useDispatch();\n\nconst increase5 = () => {\n  dispatch(counterActions.increase5(5));\n};\n')),(0,r.kt)("p",{parentName:"admonition"},"\uc704\uc640 \uac19\uc774 store\uc5d0 action\uc744 \ubcf4\ub0b4 \ud574\ub2f9 slice\ub0b4\uc758 \ud568\uc218\ub97c \uc2e4\ud589\uc2dc\ud0a4\ub294 \uac83\uc740 \ub611\uac19\uc9c0\ub9cc Argument\uc5d0 \ucd94\uac00\uc801\uc778 \uac12\uc744 \uc804\ub2ec\ubcf4\ub0b8\ub2e4.",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/93bf09ee-1116-416a-ba9a-b6cd0740a050",alt:"image"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="store.js\uc758 counterSlice"',title:'"store.js\uc758','counterSlice"':!0},'const counterSlice = createSlice({\n  name: "\uc22b\uc790\uc138\uae30",\n  initialState: initialCounterState,\n  reducers: {\n    // increase1(state) {\n    //   state.count++;\n    // },\n    increase5(state, action) {\n      console.log(action);\n      state.count = state.count + action.payload;\n    },\n    // decrease(state) {\n    //   state.count--;\n    // },\n  },\n});\n')),(0,r.kt)("p",{parentName:"admonition"},'\uc704\uc758 \ucd9c\ub825 \uacb0\uacfc\ubb3c\uc740 "5\uc529 \uc99d\uac00"\ub77c\ub294 \ubc84\ud2bc\uc744 \ub20c\ub800\uc744 \ub584,',(0,r.kt)("br",null),"\ncounterSlice\uc758 reducers \uc18d\uc131\uc548 increase5 \ud568\uc218\uc5d0 action \uac12\uc5d0 \ub300\ud55c \ucd9c\ub825 \uacb0\uacfc\uc774\ub2e4.",(0,r.kt)("br",null),"\n\uc9c1\uc811\uc801\uc73c\ub85c \uac1d\uccb4\uc758 \uc18d\uc131 \uac12\uc744 \uc815\ud558\uc9c0\ub294 \uc54a\uc558\uc9c0\ub9cc, Argument\uac12\uc744 \uc804\ub2ec\ud568\uc73c\ub85c type\uac12\uacfc \ud568\uaed8",(0,r.kt)("strong",{parentName:"p"},"payload\uac12\ub3c4 \uc804\ub2ec"),"\ub41c\ub2e4.",(0,r.kt)("br",null),"\naction.payload\ub97c \uc774\uc6a9\ud558\uc5ec state\uac12 \uc5f0\uc0b0\uc5d0 \uc0ac\uc6a9 \ud6c4, store\uc5d0 \uc5c5\ub370\uc774\ud2b8\ub97c \uc2dc\ud0a8\ub2e4.",(0,r.kt)("br",null))))}m.isMDXComponent=!0}}]);
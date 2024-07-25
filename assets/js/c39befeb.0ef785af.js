"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1963],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),u=p(n),c=o,k=u["".concat(i,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,l(l({ref:e},s),{},{components:n})):a.createElement(k,l({ref:e},s))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=c;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d[u]="string"==typeof t?t:o,l[1]=d;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2250:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},l="Zustand",d={unversionedId:"frontend/React/Zustand",id:"frontend/React/Zustand",title:"Zustand",description:"Zustand\ub780?",source:"@site/docs/frontend/9-React/27-Zustand.md",sourceDirName:"frontend/9-React",slug:"/frontend/React/Zustand",permalink:"/FE-TIL-JJamVa/docs/frontend/React/Zustand",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/9-React/27-Zustand.md",tags:[],version:"current",sidebarPosition:27,frontMatter:{},sidebar:"frontend",previous:{title:"Mobx",permalink:"/FE-TIL-JJamVa/docs/frontend/React/Mobx"},next:{title:"useCallback",permalink:"/FE-TIL-JJamVa/docs/frontend/React/useCallback"}},i={},p=[{value:"Zustand\ub780?",id:"zustand\ub780",level:2},{value:"Zustand\uc758 \uc8fc\uc694 \ud2b9\uc9d5",id:"zustand\uc758-\uc8fc\uc694-\ud2b9\uc9d5",level:2},{value:"Zustand\uc758 \ud568\uc218 \ubc0f \uba54\uc18c\ub4dc",id:"zustand\uc758-\ud568\uc218-\ubc0f-\uba54\uc18c\ub4dc",level:2},{value:"Zustand \uad6c\ud604",id:"zustand-\uad6c\ud604",level:2}],s={toc:p},u="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(u,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zustand"},"Zustand"),(0,o.kt)("h2",{id:"zustand\ub780"},"Zustand\ub780?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React \uc0c1\ud0dc \uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac \uc911 \ud558\ub098"),(0,o.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \uc0c1\ud0dc \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \ube44\ud574 \uac04\ub2e8\ud558\uace0 \uac04\uacb0"),(0,o.kt)("li",{parentName:"ul"},"\ud574\ub2f9 React \ud504\ub85c\uc81d\ud2b8 \uacbd\ub85c \ud130\ubbf8\ub110\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install zustand")," \uc785\ub825\ud558\uc5ec \uc124\uce58")),(0,o.kt)("h2",{id:"zustand\uc758-\uc8fc\uc694-\ud2b9\uc9d5"},"Zustand\uc758 \uc8fc\uc694 \ud2b9\uc9d5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\uac04\ub2e8\ud568\uacfc \uac00\ubcbc\uc6c0"),": \uc124\uc815\uc774 \uac70\uc758 \ud544\uc694\uc5c6\uc774 \uba87 \uc904\uc758 \ucf54\ub4dc\ub85c \uad6c\ud604 \uac00\ub2a5"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Hooks \uae30\ubc18"),": React\uc758 Hooks \uc2dc\uc2a4\ud15c\uc744 \ud65c\uc6a9\ud558\uc5ec \uc0c1\ud0dc\ub97c \uad6c\ub3c5\ud558\uace0 \uc5c5\ub370\uc774\ud2b8"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\ubd88\ubcc0\uc131\uc744 \uc9c0\ud0a4\uc9c0 \uc54a\ub294 \uc120\ud0dd\uc801 \uc811\uadfc"),": \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud560 \ub54c, \ubd88\ubcc0\uc131\uc744 \uc720\uc9c0\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac"),": Component \uac04 \uc0c1\ud0dc \uacf5\uc720\uac00 \uac04\ub2e8"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\uc131\ub2a5 \ucd5c\uc801\ud654"),": Zustand\ub294 \ud544\uc694\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub9cc \ub9ac\ub80c\ub354\ub9c1\ud558\ub3c4\ub85d \ucd5c\uc801\ud654(",(0,o.kt)("strong",{parentName:"li"},"\uc120\ud0dd\uc801 \uad6c\ub3c5"),")")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\uc120\ud0dd\uc801 \uad6c\ub3c5\uc774\ub780?")),(0,o.kt)("p",{parentName:"admonition"},"\ud558\ub098\uc758 store\uc548\uc5d0 \uc5ec\ub7ec\uac00\uc9c0\uc758 \uc0c1\ud0dc \ubc0f \uba54\uc18c\ub4dc\uac00 \uc874\uc7ac\ud560 \uacbd\uc6b0,",(0,o.kt)("br",null),"\n\ud574\ub2f9 Component\uc5d0 \ud544\uc694\ub85c\ud55c \uc0c1\ud0dc\uc640 \uba54\uc18c\ub4dc\ub9cc \ud638\ucd9c\ud558\uc5ec \uc0ac\uc6a9.",(0,o.kt)("br",null)),(0,o.kt)("p",{parentName:"admonition"},"\uc774\ub97c \ud1b5\ud574, \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 store\uc758 \uc0c1\ud0dc\uc640 \uba54\uc18c\ub4dc\uc5d0 \ub300\ud574 ",(0,o.kt)("strong",{parentName:"p"},"\uc7ac\ub80c\ub354\ub9c1\uc774 \ubc1c\uc0dd\uc744 \ubc29\uc9c0\ud55c\ub2e4"),".",(0,o.kt)("br",null),"\n\uc131\ub2a5 \ud5a5\uc0c1 \ubc0f \ucf54\ub4dc \uad00\ub9ac\uc758 \ud6a8\uc728\uc131\uc774 \uc88b\uc544\uc9c4\ub2e4.",(0,o.kt)("br",null))),(0,o.kt)("h2",{id:"zustand\uc758-\ud568\uc218-\ubc0f-\uba54\uc18c\ub4dc"},"Zustand\uc758 \ud568\uc218 \ubc0f \uba54\uc18c\ub4dc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"create"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Zustand ",(0,o.kt)("strong",{parentName:"li"},"\uc2a4\ud1a0\uc5b4\ub97c \uc0dd\uc131")),(0,o.kt)("li",{parentName:"ul"},"\uc0c1\ud0dc\uc640 \uadf8 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ud568\uc218\ub4e4\uc744 \uc815\uc758\ud55c\ub290 \uac1d\uccb4\ub97c \ubc18\ud658\ud558\uc5ec \ucf5c\ubc31 \ud568\uc218\ub97c \uc778\uc790\ub85c \ubc1b\ub294\ub2e4"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8")),(0,o.kt)("li",{parentName:"ul"},"\uc2a4\ud1a0\uc5b4\ub97c \uc0dd\uc131\ud560 \ub54c \uac19\uc774 \uc0dd\uc131, \uc0c1\ud0dc\ub97c \uc9c1\uc811 \uc218\uc815\ud558\ub294 \ud568\uc218\ub97c \uc778\uc790\ub85c \ubc1b\ub294\ub2e4"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\uc2a4\ud1a0\uc5b4\uc758 ",(0,o.kt)("strong",{parentName:"li"},"\ud604\uc7ac \uc0c1\ud0dc\ub97c \ubc18\ud658")),(0,o.kt)("li",{parentName:"ul"},"\ube44\ub3d9\uae30 \uc791\uc5c5\uc774\ub098 Component \uc678\ubd80\uc5d0\uc11c \uc0c1\ud0dc\ub97c \uc870\ud68c\ud560 \ub54c \uc0ac\uc6a9"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subscribe"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\uc0c1\ud0dc \ubcc0\uacbd\uc744 \uad6c\ub3c5")),(0,o.kt)("li",{parentName:"ul"},"\uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \ud638\ucd9c\ub420 \ucf5c\ubc31 \ud568\uc218\ub97c \uc778\uc790\ub85c \ubc1b\ub294\ub2e4"),(0,o.kt)("li",{parentName:"ul"},"\uc0c1\ud0dc \ubcc0\uacbd \uac10\uc9c0 \ud639\uc740 \ud544\uc694 \ub3d9\uc791 \uc218\ud589"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getState"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\uc2a4\ud1a0\uc5b4\uc758 ",(0,o.kt)("strong",{parentName:"li"},"\ud604\uc7ac \uc0c1\ud0dc\ub97c \ubc18\ud658")),(0,o.kt)("li",{parentName:"ul"},"Component \ub0b4\ubd80/\uc678\ubd80\uc5d0\uc11c\ub3c4 \ud604\uc7ac \uc0c1\ud0dc\ub97c \uc870\ud68c \uac00\ub2a5"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"destory"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\uc2a4\ud1a0\uc5b4\uc758 ",(0,o.kt)("strong",{parentName:"li"},"\uad6c\ub3c5\uc744 \ud574\uc81c\ud558\uace0 \uc0ad\uc81c")),(0,o.kt)("li",{parentName:"ul"},"\uc2a4\ud1a0\uc5b4\uc758 \uae30\ub2a5\uc774 \ud544\uc694 \uc5c6\uc744 \ub54c \uc0ac\uc6a9")))),(0,o.kt)("h2",{id:"zustand-\uad6c\ud604"},"Zustand \uad6c\ud604"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Zustand\ub97c \uc774\uc6a9\ud558\uc5ec \uac04\ub2e8\ud55c TodoList\ub97c \uad6c\ud604")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="TodoStore.js"',title:'"TodoStore.js"'},'import create from "zustand";\n\nconst useTodoStore = create((set) => ({\n  todos: [],\n  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),\n  completeTodo: (id) =>\n    set((state) => ({\n      todos: state.todos.map((todo) =>\n        todo.id === id ? { ...todo, completed: true } : todo\n      ),\n    })),\n  completedTodosCount: () => {\n    const { todos } = useTodoStore.getState();\n    return todos.filter((todo) => todo.completed).length;\n  },\n}));\n\nexport default useTodoStore;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},'import React, { useState } from "react";\nimport useTodoStore from "./TodoStore";\n\nconst App = () => {\n  const { todos, addTodo, completeTodo, completedTodosCount } = useTodoStore();\n  const [newTodo, setNewTodo] = useState("");\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    addTodo({\n      id: Math.random(),\n      title: newTodo,\n      completed: false,\n    });\n    setNewTodo("");\n  };\n\n  return (\n    <div>\n      <form onSubmit={handleSubmit}>\n        <input\n          type="text"\n          value={newTodo}\n          onChange={(e) => setNewTodo(e.target.value)}\n          placeholder="Add new todo"\n        />\n        <button type="submit">Todo List \ucd94\uac00</button>\n      </form>\n\n      <ul>\n        {todos &&\n          todos.map((todo) => (\n            <li\n              key={todo.id}\n              style={{\n                width: "20vw",\n                display: "flex",\n                justifyContent: "space-between",\n              }}\n            >\n              <span>{todo.title}</span>\n              <button\n                disabled={todo.completed}\n                onClick={() => completeTodo(todo.id)}\n              >\n                {todo.completed ? "\uc644\ub8cc" : "\uc791\uc5c5 \uc911"}\n              </button>\n            </li>\n          ))}\n      </ul>\n\n      <div>\uc644\ub8cc\ud55c TodosList \uac1c\uc218: {completedTodosCount()}</div>\n    </div>\n  );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/c1fc871a-c858-4278-82cd-b33dba860a44",alt:"image"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/JJamVa/JJamVa/assets/80045006/b77ca50e-555f-4881-92e5-4d6cd5d8d031",alt:"image"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"TodoStore.js\uc758 \ucf54\ub4dc\ub294 Zustand\ub97c \uc774\uc6a9\ud55c store\ub97c \uc815\uc758\ud55c \ucf54\ub4dc\uc774\ub2e4.",(0,o.kt)("br",null),"\ncreate\ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec todos\ub77c\ub294 \uc0c1\ud0dc\uc640 \uad00\ub828 \ud568\uc218\ub4e4\uc744 \uac1d\uccb4 \ud615\ud0dc\ub85c store\ub97c \uc815\uc758\ud55c\ub2e4.",(0,o.kt)("br",null)),(0,o.kt)("hr",{parentName:"admonition"}),(0,o.kt)("p",{parentName:"admonition"},"addTodo, completeTodo\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"set"),"\ud568\uc218\uac00 \uc874\uc7ac\ud55c\ub2e4.",(0,o.kt)("br",null),"\naddTodo, completeTodo\uac00 \ud638\ucd9c\ub420 \uacbd\uc6b0, ",(0,o.kt)("strong",{parentName:"p"},"set\ud568\uc218\uac00 \uc2e4\ud589")," \ub418\uba70 todos\uc758 ",(0,o.kt)("strong",{parentName:"p"},"\uc0c1\ud0dc\uac00 \uc5c5\ub370\uc774\ud2b8"),"\uac00 \ub41c\ub2e4.",(0,o.kt)("br",null)),(0,o.kt)("hr",{parentName:"admonition"}),(0,o.kt)("p",{parentName:"admonition"},"completedTodosCount\ud568\uc218\ub294 completed(\uc644\ub8cc) \uac1c\uc218\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\uc774\ub2e4.",(0,o.kt)("br",null),"\n\ud568\uc218 \ub0b4\ubd80\uc5d0 getState\ub97c \uc774\uc6a9\ud558\uc5ec todos\uc758 \ud604\uc7ac \uc0c1\ud0dc\ub97c \uac00\uc838\uc640 \uae38\uc774\ub97c \ubc18\ud658\ud55c\ub2e4.",(0,o.kt)("br",null),"\ncompletedTodosCount\uba54\uc18c\ub4dc\uc758 \ub3d9\uc791\uc5d0\ub294 \ubb38\uc81c \uc5c6\uc9c0\ub9cc, getState \uc0ac\uc6a9 \uc608\uc2dc\ub97c \ubcf4\uc5ec\uc8fc\uae30 \uc704\ud55c \ucf54\ub4dc\uc774\ub2e4.",(0,o.kt)("br",null),"\ncompletedTodosCount\uba54\uc18c\ub4dc\ub294 store\uc758 \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4, \uacc4\uc0b0\uc774 ",(0,o.kt)("strong",{parentName:"p"},"\ubd88\ud544\uc694\ud558\uac8c \ubc18\ubcf5\ub418\uc5b4 \uc2e4\ud589"),"\ub418\ubbc0\ub85c,",(0,o.kt)("br",null),"\n\uc131\ub2a5\uc5d0 \ubd80\uc815\uc801\uc778 \uc601\ud5a5\uc744 \ubbf8\uce60 \uc218 \uc788\ub294 \ubd88\ud544\uc694\ud55c \uacc4\uc0b0\uc774 \ub420 \uc218 \uc788\ub2e4.",(0,o.kt)("br",null),"\n\uc704\uc758 \ucf54\ub4dc \uae30\ubc18\uc73c\ub85c\ub294 App.js\uc5d0 \uc9c1\uc811 todos\ub97c \uae38\uc774\ub97c \uad6c\ud604\ud558\uace0 \ud45c\ud604\ud558\ub294 \uac83\uc774 \uc131\ub2a5 \uac1c\uc120\uc774 \ub420 \uac83\uc774\ub2e4.",(0,o.kt)("br",null)),(0,o.kt)("hr",{parentName:"admonition"}),(0,o.kt)("p",{parentName:"admonition"},"App.js\uc5d0\uc11c useTodoStore\uc744 \ud638\ucd9c\ud558\uc5ec, \uc77c\ubc18 \uac1d\uccb4\uc758 \uc0ac\uc6a9\ubc95\uacfc \uac19\uc774 \uc0c1\ud0dc \ubc0f \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4.")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[9643],{3802:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"frontend/JavaScript/\ucd5c\uc801\ud654","title":"\ucd5c\uc801\ud654(Optimization)","description":"\ucd5c\uc801\ud654\ub780?","source":"@site/docs/frontend/4-JavaScript/30-\ucd5c\uc801\ud654.md","sourceDirName":"frontend/4-JavaScript","slug":"/frontend/JavaScript/\ucd5c\uc801\ud654","permalink":"/FE-TIL-JJamVa/docs/frontend/JavaScript/\ucd5c\uc801\ud654","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/4-JavaScript/30-\ucd5c\uc801\ud654.md","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{},"sidebar":"frontend","previous":{"title":"\uac1d\uccb4\uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d","permalink":"/FE-TIL-JJamVa/docs/frontend/JavaScript/\uac1d\uccb4\uc9c0\ud5a5\ud504\ub85c\uadf8\ub798\ubc0d"},"next":{"title":"Ajax","permalink":"/FE-TIL-JJamVa/docs/frontend/JavaScript/Ajax"}}');var l=i(6070),s=i(989);const d={},c="\ucd5c\uc801\ud654(Optimization)",t={},o=[{value:"\ucd5c\uc801\ud654\ub780?",id:"\ucd5c\uc801\ud654\ub780",level:2},{value:"\ucd5c\uc801\ud654\ub97c \ud558\ub294 \uc774\uc720\ub294?",id:"\ucd5c\uc801\ud654\ub97c-\ud558\ub294-\uc774\uc720\ub294",level:3},{value:"\uc131\ub2a5 \uce21\uc815\uc758 \ucc99\ub3c4",id:"\uc131\ub2a5-\uce21\uc815\uc758-\ucc99\ub3c4",level:2},{value:"\uc2dc\uac04",id:"\uc2dc\uac04",level:2},{value:"\ucd08\uae30 \uad6c\ub3d9 \uc2dc\uac04",id:"\ucd08\uae30-\uad6c\ub3d9-\uc2dc\uac04",level:3},{value:"\ucd08\uae30 \uad6c\ub3d9 \uc2dc\uac04\uc744 \ube60\ub974\uac8c \ud558\ub294 \ubc29\ubc95",id:"\ucd08\uae30-\uad6c\ub3d9-\uc2dc\uac04\uc744-\ube60\ub974\uac8c-\ud558\ub294-\ubc29\ubc95",level:3},{value:"<strong>minify</strong>\ub780?",id:"minify\ub780",level:3},{value:"<strong>\ub808\uc774\uc9c0 \ub85c\ub529</strong>\uc774\ub780?",id:"\ub808\uc774\uc9c0-\ub85c\ub529\uc774\ub780",level:3},{value:"\uacc4\uc0b0 \uc2dc\uac04",id:"\uacc4\uc0b0-\uc2dc\uac04",level:3},{value:"\ubc18\uc751 \uc2dc\uac04",id:"\ubc18\uc751-\uc2dc\uac04",level:3},{value:"\ubc18\uc751 \uc2dc\uac04\uc744 \ud5a5\uc0c1 \uc2dc\ud0a4\uae30 \uc704\ud55c \ubc29\ubc95",id:"\ubc18\uc751-\uc2dc\uac04\uc744-\ud5a5\uc0c1-\uc2dc\ud0a4\uae30-\uc704\ud55c-\ubc29\ubc95",level:3},{value:"requestAnimationFrame\uc774\ub780?<br/>",id:"requestanimationframe\uc774\ub780",level:4},{value:"\ubc29\ud5a5\ud0a4\ub97c \ub204\ub974\uba74 \ubc15\uc2a4\uac00 \uc6c0\uc9c1\uc774\ub294 \ucf54\ub4dc",id:"\ubc29\ud5a5\ud0a4\ub97c-\ub204\ub974\uba74-\ubc15\uc2a4\uac00-\uc6c0\uc9c1\uc774\ub294-\ucf54\ub4dc",level:4},{value:"DocumentFragment\ub780?",id:"documentfragment\ub780",level:4},{value:"\ub80c\ub354\ub9c1 \uc131\ub2a5 &amp; DOM \uc870\uc791 \ud69f\uc218",id:"\ub80c\ub354\ub9c1-\uc131\ub2a5--dom-\uc870\uc791-\ud69f\uc218",level:4},{value:"\uba54\ubaa8\ub9ac",id:"\uba54\ubaa8\ub9ac",level:2},{value:"\uba54\ubaa8\ub9ac \uc0dd\uba85 \uc8fc\uae30",id:"\uba54\ubaa8\ub9ac-\uc0dd\uba85-\uc8fc\uae30",level:3},{value:"\uba54\ubaa8\ub9ac \ub204\uc218",id:"\uba54\ubaa8\ub9ac-\ub204\uc218",level:4},{value:"Garbage Collection",id:"garbage-collection",level:4},{value:"<strong>\ucc38\uc870 \uce74\uc6b4\ud305</strong>(reference counting)",id:"\ucc38\uc870-\uce74\uc6b4\ud305reference-counting",level:4},{value:"\ucd5c\uc801\ud654 \ucf54\ub529 \ubc29\ubc95",id:"\ucd5c\uc801\ud654-\ucf54\ub529-\ubc29\ubc95",level:2},{value:"\ubc30\uc5f4, \uac1d\uccb4",id:"\ubc30\uc5f4-\uac1d\uccb4",level:3},{value:"\uc5c4\uaca9\ubaa8\ub4dc(strict mode) \uc0ac\uc6a9",id:"\uc5c4\uaca9\ubaa8\ub4dcstrict-mode-\uc0ac\uc6a9",level:3},{value:"\uc5c4\uaca9\ubaa8\ub4dc(strict mode)\uc758 \ud2b9\uc9d5",id:"\uc5c4\uaca9\ubaa8\ub4dcstrict-mode\uc758-\ud2b9\uc9d5",level:4},{value:"\uc77c\uce58\uc5f0\uc0b0\uc790 \uc0ac\uc6a9",id:"\uc77c\uce58\uc5f0\uc0b0\uc790-\uc0ac\uc6a9",level:3},{value:"<code>==</code>\uc640 <code>===</code>\uc758 \ucc28\uc774\uc810",id:"\uc640-\uc758-\ucc28\uc774\uc810",level:4}];function a(n){const e={admonition:"admonition",br:"br",code:"code",details:"details",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\ucd5c\uc801\ud654optimization",children:"\ucd5c\uc801\ud654(Optimization)"})}),"\n",(0,l.jsx)(e.h2,{id:"\ucd5c\uc801\ud654\ub780",children:"\ucd5c\uc801\ud654\ub780?"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uc790\uc6d0\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uc5ec \ud648\ud398\uc774\uc9c0 \ud654\uba74\uc744 \ub354 \ube60\ub974\uac8c \ud45c\ud604"}),"\n"]}),"\n",(0,l.jsxs)(e.admonition,{type:"tip",children:[(0,l.jsx)(e.h3,{id:"\ucd5c\uc801\ud654\ub97c-\ud558\ub294-\uc774\uc720\ub294",children:"\ucd5c\uc801\ud654\ub97c \ud558\ub294 \uc774\uc720\ub294?"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uc0ac\uc6a9\uc790(\uc774\uc6a9\uc790)\uc5d0\uac8c \ud5a5\uc0c1\ub41c UX\uc81c\uacf5"}),"\n",(0,l.jsx)(e.li,{children:"\uc218\uc775 \uc99d\uac00"}),"\n"]})]}),"\n",(0,l.jsx)(e.h2,{id:"\uc131\ub2a5-\uce21\uc815\uc758-\ucc99\ub3c4",children:"\uc131\ub2a5 \uce21\uc815\uc758 \ucc99\ub3c4"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uba54\ubaa8\ub9ac, \ub124\ud2b8\uc6cc\ud06c \ud2b8\ub798\ud53d, \ubc31\uc5d4\ub4dc \uc790\uc6d0\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \uc0ac\uc6a9"}),"\n",(0,l.jsx)(e.li,{children:"\ube60\ub974\uac8c \ub3d9\uc791(\uc2dc\uac04)"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\uc2dc\uac04",children:"\uc2dc\uac04"}),"\n",(0,l.jsx)(e.h3,{id:"\ucd08\uae30-\uad6c\ub3d9-\uc2dc\uac04",children:"\ucd08\uae30 \uad6c\ub3d9 \uc2dc\uac04"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\ucd08\uae30 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uad6c\ub3d9\ub418\ub294 \uc2dc\uac04"}),"\n"]}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsx)(e.h3,{id:"\ucd08\uae30-\uad6c\ub3d9-\uc2dc\uac04\uc744-\ube60\ub974\uac8c-\ud558\ub294-\ubc29\ubc95",children:"\ucd08\uae30 \uad6c\ub3d9 \uc2dc\uac04\uc744 \ube60\ub974\uac8c \ud558\ub294 \ubc29\ubc95"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\ub2e4\uc6b4\ub85c\ub4dc\ud558\ub294 \ud30c\uc77c\uc758 \uac1c\uc218\uc640 \uc6a9\ub7c9\uc744 \uc791\uac8c \uc720\uc9c0\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uc774\ubbf8\uc9c0 Sprite \uae30\ubc95 \uc774\uc6a9"}),"\n",(0,l.jsx)(e.li,{children:"\ucd5c\uc2e0 \ud3ec\ub9f7\uc758 \uc774\ubbf8\uc9c0(WebP)\ub098 \ud3f0\ud2b8\ub97c \uc0ac\uc6a9"}),"\n",(0,l.jsx)(e.li,{children:"\ud3f0\ud2b8 \uc0ac\uc6a9 \ube48\ub3c4\uac00 \uc801\uc744 \uacbd\uc6b0 \uc774\ubbf8\uc9c0 \ud3f0\ud2b8\ub97c \uc0ac\uc6a9"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"minify"}),"\ub97c \uc774\uc6a9\ud558\uc5ec CSS,JS \ud30c\uc77c \uc6a9\ub7c9\uc744 \uc904\uc778\ub2e4."]}),"\n",(0,l.jsx)(e.li,{children:"\ud544\uc694\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac, \ud504\ub808\uc784\uc6cc\ud06c\ub9cc \uc0ac\uc6a9"}),"\n",(0,l.jsxs)(e.li,{children:["\uc6b0\uc120 \uc21c\uc704\uac00 \ub5a8\uc5b4\uc9c0\ub294 \ucee8\ud150\uce20\ub77c\uba74 ",(0,l.jsx)(e.code,{children:"\ub808\uc774\uc9c0 \ub85c\ub529"}),"\uc744 \uace0\ub824"]}),"\n",(0,l.jsx)(e.li,{children:"\uad6c\ub3d9\uc2dc\uac04\uc744 \uc790\uc8fc \uce21\uc815"}),"\n"]})]}),"\n",(0,l.jsxs)(e.admonition,{type:"tip",children:[(0,l.jsxs)(e.h3,{id:"minify\ub780",children:[(0,l.jsx)(e.strong,{children:"minify"}),"\ub780?"]}),(0,l.jsxs)(e.p,{children:["\ud504\ub85c\uadf8\ub798\ubc0d \ucf54\ub4dc\ub098 \uc6f9 \ub9ac\uc18c\uc2a4\ub97c \uc791\uac8c \ub9cc\ub4e4\uae30 \uc704\ud574 \uacf5\ubc31, \uc8fc\uc11d, \uc904\ubc14\uafc8 \ub4f1\uc758 \ubd88\ud544\uc694\ud55c \uc694\uc18c\ub97c \uc81c\uac70\ud558\uac70\ub098 \uc904\uc774\ub294 \uacfc\uc815",(0,l.jsx)(e.br,{}),"\r\n\ud30c\uc77c \ud06c\uae30\ub97c \ucd5c\uc18c\ud654, \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 ",(0,l.jsx)(e.strong,{children:"\ub85c\ub529 \uc18d\ub3c4\ub97c \ud5a5\uc0c1"}),", \ucf54\ub4dc \uc804\uc1a1 \uc2dc \ud544\uc694\ud55c \ub300\uc5ed\ud3ed\uc744 \uc904\uc774\ub294 \uc774\uc810\uc774 \uc788\ub2e4.",(0,l.jsx)(e.br,{}),"\r\nVscode Extension\uc5d0 minify\ub97c \uc774\uc6a9\ud558\uc5ec \uc27d\uac8c \uc0ac\uc6a9\uac00\ub2a5"]}),(0,l.jsxs)(e.h3,{id:"\ub808\uc774\uc9c0-\ub85c\ub529\uc774\ub780",children:[(0,l.jsx)(e.strong,{children:"\ub808\uc774\uc9c0 \ub85c\ub529"}),"\uc774\ub780?"]}),(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"<img>"})," \ud0dc\uadf8\uc758 loading \uc18d\uc131 \uc911 lazy \uac12\uc744 \uc0ac\uc6a9\ud55c\ub2e4.",(0,l.jsx)(e.br,{}),"\r\n\uc774\ubbf8\uc9c0\uac00 (Viewport)\ub0b4\uc5d0 \ubcf4\uc774\uae30 \uc2dc\uc791\ud558\uae30 \uc804\uae4c\uc9c0 \uc774\ubbf8\uc9c0\ub97c \ub85c\ub4dc\ud558\uc9c0 \uc54a\ub294\ub2e4.",(0,l.jsx)(e.br,{}),"\r\nViewport\uc601\uc5ed \ub0b4\uc5d0 \ub4e4\uc5b4\uc624\ub294 \uc21c\uac04\uc5d0 \uc774\ubbf8\uc9c0\uac00 \ub85c\ub4dc\ub41c\ub2e4.",(0,l.jsx)(e.br,{}),"\r\n\ucd08\uae30 \ud398\uc774\uc9c0 ",(0,l.jsx)(e.strong,{children:"\ub85c\ub529 \uc2dc\uac04\uc744 \ub2e8\ucd95"}),", \uc0ac\uc6a9\uc790\uac00 \uc2a4\ud06c\ub864\uc744 \ub0b4\ub9ac\uba74\uc11c \ud544\uc694\ud55c \uc774\ubbf8\uc9c0\ub9cc \ub85c\ub4dc\ud558\uc5ec \ub124\ud2b8\uc6cc\ud06c \ub300\uc5ed\ud3ed\uc744 \uc808\uc57d."]})]}),"\n",(0,l.jsx)(e.h3,{id:"\uacc4\uc0b0-\uc2dc\uac04",children:"\uacc4\uc0b0 \uc2dc\uac04"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\ud6a8\uc728\uc801\uc774\uace0 \ube60\ub974\uac8c \ub3d9\uc791\ud560 \uc218 \uc788\ub294 \ucf54\ub4dc\ub97c \uc791\uc131(\uc54c\uace0\ub9ac\uc998)"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\ubc18\uc751-\uc2dc\uac04",children:"\ubc18\uc751 \uc2dc\uac04"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uc0ac\uc6a9\uc790\uc758 \ud589\ub3d9\uc5d0 \uc5bc\ub9c8\ub098 \ube60\ub974\uac8c \ubc18\uc751\ud558\ub294 \uc2dc\uac04"}),"\n"]}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsx)(e.h3,{id:"\ubc18\uc751-\uc2dc\uac04\uc744-\ud5a5\uc0c1-\uc2dc\ud0a4\uae30-\uc704\ud55c-\ubc29\ubc95",children:"\ubc18\uc751 \uc2dc\uac04\uc744 \ud5a5\uc0c1 \uc2dc\ud0a4\uae30 \uc704\ud55c \ubc29\ubc95"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"JS\uc5d0\uc11c\uc758 \uc560\ub2c8\uba54\uc774\uc158 \uc791\uc5c5\ubcf4\ub2e8 CSS \uc560\ub2c8\uba54\uc774\uc158 \uc791\uc5c5\uc744 \uad8c\uc7a5"}),"\n",(0,l.jsx)(e.li,{children:"Transform \uc18d\uc131\uc744 \uc0ac\uc6a9"}),"\n",(0,l.jsx)(e.li,{children:"repaint, reflow\ub97c \uc720\ubc1c\ud558\ub294 \uc18d\uc131\uc744 \uc0ac\uc6a9\uc790\uc81c"}),"\n",(0,l.jsx)(e.li,{children:"requestAnimationFrame\uc744 \uc0ac\uc6a9"}),"\n",(0,l.jsxs)(e.li,{children:["DOM \uc811\uadfc\uc758 \ud69f\uc218, \uc5c5\ub370\uc774\ud2b8\ub97c \uc904\uc774\uae30 => ",(0,l.jsx)(e.code,{children:"DocumentFragment"})," \uc0ac\uc6a9"]}),"\n"]})]}),"\n",(0,l.jsxs)(e.details,{children:["\n",(0,l.jsx)(e.summary,{children:"requestAnimationFrame"}),"\n",(0,l.jsxs)(e.div,{markdown:"1",children:["\n",(0,l.jsxs)(e.h4,{id:"requestanimationframe\uc774\ub780",children:["requestAnimationFrame\uc774\ub780?",(0,l.jsx)(e.br,{})]}),"\n",(0,l.jsx)(e.p,{children:"\ube0c\ub77c\uc6b0\uc800\uac00 \uc560\ub2c8\uba54\uc774\uc158\uc744 \ucd5c\uc801\ud654\ud558\uace0, \ube44\ud65c\uc131\ud654\ub41c \ud0ed \uc560\ub2c8\uba54\uc774\uc158\uc5d0\uc11c\ub294 \ub3d9\uc791\uc744 \ud558\uc9c0 \uc54a\ub294\ub2e4."}),"\n",(0,l.jsxs)(e.admonition,{type:"note",children:[(0,l.jsx)(e.h4,{id:"\ubc29\ud5a5\ud0a4\ub97c-\ub204\ub974\uba74-\ubc15\uc2a4\uac00-\uc6c0\uc9c1\uc774\ub294-\ucf54\ub4dc",children:"\ubc29\ud5a5\ud0a4\ub97c \ub204\ub974\uba74 \ubc15\uc2a4\uac00 \uc6c0\uc9c1\uc774\ub294 \ucf54\ub4dc"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-css",children:"div {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: slateblue;\r\n}\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-html",children:"<div></div>\n"})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'const move = document.querySelector("div");\r\nlet position_X = 0; //\ud604\uc7ac x\ucd95\uc758 \uc704\uce58\r\nlet position_Y = 0; //\ud604\uc7ac y\ucd95\uc758 \uc704\uce58\r\nlet direction = ""; //\ubc29\ud5a5\uc744 \uc54c\uae30\uc704\ud574 \ubc1b\ub294 \ubcc0\uc218\r\n\r\ndocument.addEventListener("keydown", (e) => {\r\n  direction = e.key; //\ud0a4\ub97c \ub20c\ub800\uc744 \ub54c, \ubc29\ud5a5\uc815\ubcf4\r\n});\r\ndocument.addEventListener("keyup", (e) => {\r\n  direction = ""; //\uba48\ucdc4\uc744\ub54c, \uc785\ub825\uac12 \ucd08\uae30\ud654\r\n});\r\n\r\nfunction moving() {\r\n  if (direction === "ArrowRight") position_X += 10;\r\n  else if (direction === "ArrowLeft") position_X -= 10;\r\n  else if (direction === "ArrowUp")\r\n    position_Y -= 10; // \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c Y\ucd95\uc73c\ub85c \uc62c\ub77c\uac00\ub824\uba74 \ubd80\ud638\uac00 \ubc18\ub300\r\n  else if (direction === "ArrowDown") position_Y += 10;\r\n  move.style.transform = `translate(${position_X}px, ${position_Y}px)`; // div \ud0dc\uadf8\uc5d0 transform \uc18d\uc131\uc744 \uc801\uc6a9\r\n  requestAnimationFrame(moving);\r\n}\r\nrequestAnimationFrame(moving);\n'})}),(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/e28cd5da-e296-42a5-82f5-aca0893362c1",alt:"image"}),(0,l.jsx)(e.br,{}),"\r\n\ud0a4\ubcf4\ub4dc \ubc29\ud5a5\ud0a4\ub97c \uc704, \uc624\ub978\ucabd, \uc544\ub798, \uc67c\ucabd \ub20c\ub800\uc744 \ub54c, \ub098\uc624\ub294 \uac12\uc740 ",(0,l.jsx)(e.code,{children:"e.key"}),"\uac12\uc774\ub2e4."]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'document.addEventListener("keydown", (e) => {});\r\ndocument.addEventListener("keyup", (e) => {});\n'})}),(0,l.jsxs)(e.p,{children:["document\uc5d0 \ub300\ud55c \uc774\ubca4\ud2b8 \ucc98\ub9ac\ub97c \ud55c \uc774\uc720\ub294 \ud0a4\ubcf4\ub4dc \uc785\ub825 \uc774\ubca4\ud2b8\uc758 \ucc98\ub9ac\ub294 HTML\ubb38\uc11c \uc694\uc18c\uc5d0 \ub4f1\ub85d\ud574\uc57c \ub3d9\uc791\uc774 \uac00\ub2a5\ud558\uae30 \ub54c\ubb38\uc774\ub2e4.",(0,l.jsx)(e.br,{}),"\r\nwindow\ub97c \uc0ac\uc6a9\ud574\ub3c4 \ub611\uac19\uc740 \uacb0\uacfc\uac12\uc774 \ub098\uc628\ub2e4."]})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.details,{children:["\n",(0,l.jsx)(e.summary,{children:"DocumentFragment"}),"\n",(0,l.jsxs)(e.div,{markdown:"1",children:["\n",(0,l.jsx)(e.h4,{id:"documentfragment\ub780",children:"DocumentFragment\ub780?"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uba54\ubaa8\ub9ac\uc0c1\uc5d0\uc11c\ub9cc \uc874\uc7ac\ud558\ub294 DOM\ud2b8\ub9ac"}),"\n",(0,l.jsx)(e.li,{children:"\ud718\ubc1c\uc131(1\ud68c\uc6a9) DOM\ud2b8\ub9ac"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-html",children:"<main></main>\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",metastring:'title="DocumentFragment\uc5c6\uc774 \uad6c\ud604"',children:'const main = document.querySelector("main");\r\n\r\nfor (var i = 0; i < 10; i++) {\r\n  let article = document.createElement("article");\r\n  article.innerHTML = `<figure>\r\n            <img\r\n                src="https://cdn.pixabay.com/photo/2023/08/18/19/44/dog-8199216_1280.jpg"\r\n                alt="">\r\n            <figcaption>\r\n                \uac1c\uac00 \ubc29\uae0b \uc6c3\uace0\uc788\ub2e4.\r\n            </figcaption>\r\n        </figure>`;\r\n  main.appendChild(article);\r\n}\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",metastring:'title="DocumentFragment \uad6c\ud604"',children:'const main = document.querySelector("main");\r\nconst fragment = new DocumentFragment();\r\n\r\nfor (var i = 0; i < 10; i++) {\r\n  let article = document.createElement("article");\r\n  article.innerHTML = `<figure>\r\n            <img\r\n                src="https://cdn.pixabay.com/photo/2023/08/18/19/44/dog-8199216_1280.jpg"\r\n                alt="">\r\n            <figcaption>\r\n                \uac1c\uac00 \ubc29\uae0b \uc6c3\uace0\uc788\ub2e4.\r\n            </figcaption>\r\n        </figure>`;\r\n  fragment.appendChild(article);\r\n}\r\nmain.appendChild(fragment);\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\uc704\uc758 JS\ucf54\ub4dc \uacb0\uacfc\ub294 \ub611\uac19\ub2e4. \uc5b4\ub5a4 \ucc28\uc774\uac00 \uc788\uc744\uae4c?",(0,l.jsx)(e.br,{})]}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsx)(e.h4,{id:"\ub80c\ub354\ub9c1-\uc131\ub2a5--dom-\uc870\uc791-\ud69f\uc218",children:"\ub80c\ub354\ub9c1 \uc131\ub2a5 & DOM \uc870\uc791 \ud69f\uc218"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"DocumentFragment\uc5c6\uc774 \uad6c\ud604"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"main.appendChild(article);"})," \ucf54\ub4dc\uc5d0\uc11c \ubc18\ubcf5\ubb38 \ub9c8\ub2e4 DOM\uc870\uc791\uc774 \ud558\uae30 \ub54c\ubb38\uc5d0 \ub80c\ub354\ub9c1\uc131\ub2a5 \ub5a8\uc5b4\uc9c4\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"DocumentFragment \uad6c\ud604"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"DocumentFragment"}),"\ub97c \uc0dd\uc131\ud574\uc11c \uc784\uc2dc\uc801\uc73c\ub85c \uba54\ubaa8\ub9ac\ub97c \uc0dd\uc131\ud574\uc11c \ubc18\ubcf5\ubb38 \ub3d9\uc791 \ud6c4, \ub9c8\uc9c0\ub9c9 \uc2e4\uc81c DOM\ud2b8\ub9ac\uc5d0 \ub178\ub4dc\ub97c \ucd94\uac00"]}),"\n",(0,l.jsx)(e.li,{children:"\uc774\ub85c\uc778\ud574 DOM\uc601\uc5ed\uc758 \uc811\uadfc\uc744 \ucd5c\uc18c\ud654\ud558\uc5ec \ub80c\ub354\ub9c1 \uc131\ub2a5\uc774 \ud5a5\uc0c1"}),"\n"]}),"\n"]}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\uba54\ubaa8\ub9ac",children:"\uba54\ubaa8\ub9ac"}),"\n",(0,l.jsx)(e.h3,{id:"\uba54\ubaa8\ub9ac-\uc0dd\uba85-\uc8fc\uae30",children:"\uba54\ubaa8\ub9ac \uc0dd\uba85 \uc8fc\uae30"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\uba54\ubaa8\ub9ac \uc0dd\uba85 \uc8fc\uae30 \uc21c\uc11c ",(0,l.jsx)(e.code,{children:"\uba54\ubaa8\ub9ac \ud560\ub2f9(Allocate Memory) -> \uba54\ubaa8\ub9ac \uc0ac\uc6a9(UseMemory) -> \uba54\ubaa8\ub9ac \ud574\uc81c(Release Memory)"})]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"\uba54\ubaa8\ub9ac \ud560\ub2f9"}),": \ud504\ub85c\uadf8\ub7a8\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc6b4\uc601\uccb4\uc81c\uac00 \uba54\ubaa8\ub9ac \ud560\ub2f9"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"\uba54\ubaa8\ub9ac \uc0ac\uc6a9"}),": \uac1c\ubc1c\uc790\uac00 \ucf54\ub4dc \uc0c1\uc5d0\uc11c \ud560\ub2f9\ub41c \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud568\uc73c\ub85c\uc368 \uc77d\uae30\uc640 \uc4f0\uae30 \uc791\uc5c5\uc73c\ub85c \uad6c\uc131"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"\uba54\ubaa8\ub9ac \ud574\uccb4"}),": \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \uba54\ubaa8\ub9ac \uc804\uccb4\ub97c \ub418\ub3cc\ub824\uc8fc\uc5b4 \ub2e4\uc2dc \uc0ac\uc6a9\uac00\ub2a5\ud558\uac8c \ub9cc\ub4dc\ub294 \ub2e8\uacc4"]}),"\n"]}),"\n",(0,l.jsxs)(e.details,{children:["\n",(0,l.jsx)(e.summary,{children:"\uba54\ubaa8\ub9ac \ub204\uc218\uc640 Garbage Collection"}),"\n",(0,l.jsxs)(e.div,{markdown:"1",children:["\n",(0,l.jsx)(e.h4,{id:"\uba54\ubaa8\ub9ac-\ub204\uc218",children:"\uba54\ubaa8\ub9ac \ub204\uc218"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\ud504\ub85c\uadf8\ub7a8\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \uba54\ubaa8\ub9ac \uacf5\uac04\uc744 \uacc4\uc18d\ud574\uc11c \uc810\uc720\ud558\ub294 \ud604\uc0c1\uc758 \uc758\ubbf8"}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"garbage-collection",children:"Garbage Collection"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uba54\ubaa8\ub9ac\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc774 \ucd94\uc815\ud558\uc5ec \uc0ad\uc81c"}),"\n"]}),"\n",(0,l.jsxs)(e.h4,{id:"\ucc38\uc870-\uce74\uc6b4\ud305reference-counting",children:[(0,l.jsx)(e.strong,{children:"\ucc38\uc870 \uce74\uc6b4\ud305"}),"(reference counting)"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uba54\ubaa8\ub9ac\uc5d0 \uc874\uc7ac\ud558\ub294 \uac12\uc744 \uba87\uac1c\uc758 \ubcc0\uc218\uc640 \ud568\uc218\uac00 \ucc38\uc870\ud558\uace0 \uc788\ub294\uc9c0 \uc0b4\ud3b4\ubcf8\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"\ucc38\uc870\uac00 0\uc774 \ub418\uba74 \uac12\uc744 \uba54\ubaa8\ub9ac\uc5d0\uc11c \uc0ad\uc81c."}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'let me = { name: "JJamVa" }; // reference counting: 1\r\nlet you = me; //reference counting: 2\r\n\r\nme = null; //reference counting: 1\r\nyou = null; //reference counting: 0\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\ucd5c\uc801\ud654-\ucf54\ub529-\ubc29\ubc95",children:"\ucd5c\uc801\ud654 \ucf54\ub529 \ubc29\ubc95"}),"\n",(0,l.jsx)(e.h3,{id:"\ubc30\uc5f4-\uac1d\uccb4",children:"\ubc30\uc5f4, \uac1d\uccb4"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\ubc30\uc5f4\uc774\ub098 \uac1d\uccb4\uc758 \ub370\uc774\ud130\ub97c \uc218\uc815 \uc791\uc5c5\uc774 \ud544\uc694\ud560 \uacbd\uc6b0, \uc6d0\ubcf8\uc758 \ub370\uc774\ud130\ub294 \uc720\uc9c0\ud558\uace0 \uc0c8\ub85c\uc6b4 \ub370\uc774\ud130\ub97c \uc0dd\uc131\ud558\uc5ec \ubcc0\uacbd"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\uc5c4\uaca9\ubaa8\ub4dcstrict-mode-\uc0ac\uc6a9",children:"\uc5c4\uaca9\ubaa8\ub4dc(strict mode) \uc0ac\uc6a9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uc5c4\uaca9\ubaa8\ub4dc\ub97c \ud1b5\ud574 \ub9ce\uc740 \uc5d0\ub7ec\ub97c \uc904\uc77c \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,l.jsxs)(e.admonition,{type:"tip",children:[(0,l.jsx)(e.h4,{id:"\uc5c4\uaca9\ubaa8\ub4dcstrict-mode\uc758-\ud2b9\uc9d5",children:"\uc5c4\uaca9\ubaa8\ub4dc(strict mode)\uc758 \ud2b9\uc9d5"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uc120\uc5b8\ud558\uc9c0 \uc54a\uc740 \ubcc0\uc218\uc5d0 \uac12\uc744 \ud560\ub2f9 \ubd88\uac00\ub2a5"}),"\n",(0,l.jsx)(e.li,{children:"\uc77d\uae30 \uc804\uc6a9 \uac1d\uccb4\uc5d0 \uac12\uc744 \ud560\ub2f9\ud558\uba74 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd"}),"\n",(0,l.jsx)(e.li,{children:"\uc9c0\uc6b8\uc218 \uc5c6\ub294 \uac12\uc744 \uc9c0\uc6b0\ub824\uace0 \ud558\uba74 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd"}),"\n",(0,l.jsx)(e.li,{children:"\ud568\uc218 Parameter\uc5d0 \uc911\ubcf5\ub41c \uc774\ub984\uc744 \uc0ac\uc6a9 \ubd88\uac00\ub2a5"}),"\n"]})]}),"\n",(0,l.jsx)(e.h3,{id:"\uc77c\uce58\uc5f0\uc0b0\uc790-\uc0ac\uc6a9",children:"\uc77c\uce58\uc5f0\uc0b0\uc790 \uc0ac\uc6a9"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["JavaScript\uc5d0\uc11c\ub294 ",(0,l.jsx)(e.code,{children:"=="}),"\uc640 ",(0,l.jsx)(e.code,{children:"==="}),"\uac00 \uc874\uc7ac"]}),"\n",(0,l.jsxs)(e.li,{children:["\ub354 \uc644\ubcbd\ud55c \uac12\ube44\uad50\ub97c \ud558\uae30\uc704\ud574 ",(0,l.jsx)(e.code,{children:"==="})," \uc0ac\uc6a9\uc744 \uad8c\uc7a5"]}),"\n"]}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsxs)(e.h4,{id:"\uc640-\uc758-\ucc28\uc774\uc810",children:[(0,l.jsx)(e.code,{children:"=="}),"\uc640 ",(0,l.jsx)(e.code,{children:"==="}),"\uc758 \ucc28\uc774\uc810"]}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"=="}),"(\ub290\uc2a8\ud55c \ube44\uad50): \uac12\uc744 \ube44\uad50\ud560 \uacbd\uc6b0 \uc790\ub3d9\uc73c\ub85c \ud615\ubcc0\ud658\uc774 \uc774\ub8e8\uc5b4\uc9c4\ub2e4."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"==="}),"(\uc5c4\uaca9\ud55c \ube44\uad50): \uac12\uacfc \ub370\uc774\ud130 \ud0c0\uc785\uc744 \ubaa8\ub450 \ube44\uad50"]}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'console.log(1 == "1"); //true\r\nconsole.log(2 == "02"); //true\r\nconsole.log("" == false); //true \ube48\ubb38\uc790\uc5f4\uc740 false\ub2e4.\r\nconsole.log([] == false); //true \ube48\ubc30\uc5f4\uc740 false\ub2e4.\r\nconsole.log(null == undefined); //true\n'})})]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},989:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>c});var r=i(758);const l={},s=r.createContext(l);function d(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);
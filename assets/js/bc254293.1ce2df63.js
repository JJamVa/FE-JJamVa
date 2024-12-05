"use strict";(self.webpackChunktil=self.webpackChunktil||[]).push([[1899],{7327:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"frontend/NextJS/MSW","title":"Mock Service Workder(MSW)","description":"MSW\ub780?","source":"@site/docs/frontend/12-NextJS/10-MSW.md","sourceDirName":"frontend/12-NextJS","slug":"/frontend/NextJS/MSW","permalink":"/FE-TIL-JJamVa/docs/frontend/NextJS/MSW","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/12-NextJS/10-MSW.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{},"sidebar":"frontend","previous":{"title":"\ub77c\uc6b0\ud305 \uc2ec\ud654","permalink":"/FE-TIL-JJamVa/docs/frontend/NextJS/\ub77c\uc6b0\ud305 \uc2ec\ud654"},"next":{"title":"Middleware","permalink":"/FE-TIL-JJamVa/docs/frontend/NextJS/middleware"}}');var t=r(6070),i=r(989);const l={},c="Mock Service Workder(MSW)",o={},d=[{value:"MSW\ub780?",id:"msw\ub780",level:2},{value:"MSW \uc0ac\uc6a9 \uc774\uc720 \ubc0f \uc7a5\uc810",id:"msw-\uc0ac\uc6a9-\uc774\uc720-\ubc0f-\uc7a5\uc810",level:2},{value:"Next.js + MSW",id:"nextjs--msw",level:2},{value:"MSW \uc124\uce58 \ubc0f \uc124\uc815",id:"msw-\uc124\uce58-\ubc0f-\uc124\uc815",level:3},{value:"MSW \uc2e4\uc2b5 \ucf54\ub4dc",id:"msw-\uc2e4\uc2b5-\ucf54\ub4dc",level:2}];function a(n){const e={admonition:"admonition",br:"br",code:"code",details:"details",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"mock-service-workdermsw",children:"Mock Service Workder(MSW)"})}),"\n",(0,t.jsx)(e.h2,{id:"msw\ub780",children:"MSW\ub780?"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uac1c\ubc1c \ubc0f \ud14c\uc2a4\ud2b8 \ud658\uacbd\uc5d0\uc11c \ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \uac00\ub85c\ucc44\uace0 \ubaa8\uc758 \uc751\ub2f5\uc744 \uc81c\uacf5\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac"}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"\uc11c\ube44\uc2a4 \uc6cc\ucee4(Service Worker)"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud074\ub77c\uc774\uc5b8\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \uac00\ub85c\ucc44\uace0, \uac1c\ubc1c\uc790\uac00 \uc815\uc758\ud55c \ud578\ub4e4\ub7ec\uc5d0 \ub530\ub77c \uc751\ub2f5\uc744 \ubc18\ud658"]}),"\n",(0,t.jsx)(e.li,{children:"\uc2e4\uc81c \ubc31\uc5d4\ub4dc \uc11c\ubc84\uac00 \uc900\ube44\ub418\uc9c0 \uc54a\uc558\uac70\ub098, \ub124\ud2b8\uc6cc\ud06c \ud658\uacbd\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uace0\ub3c4 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c \ubc0f \ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\uc774 \uac00\ub2a5"}),"\n"]}),"\n",(0,t.jsxs)(e.admonition,{type:"info",children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\uc11c\ube44\uc2a4 \uc6cc\ucee4(Service Worker)\ub780?"})}),(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 \uc2a4\ud06c\ub9bd\ud2b8"}),"\n",(0,t.jsx)(e.li,{children:"\ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \uac00\ub85c\ucc44\uace0 \uce90\uc2f1, \ubc31\uadf8\ub77c\uc6b4\ub4dc \ub3d9\uae30\ud654, \ud478\uc2dc \uc54c\ub9bc \ub4f1\uc758 \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\uc5ec \uc624\ud504\ub77c\uc778 \ud658\uacbd\uc5d0\uc11c\ub3c4 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791"}),"\n",(0,t.jsx)(e.li,{children:"\uc6f9 \ud398\uc774\uc9c0\uc640\ub294 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc791\ub3d9\ud558\uba70, \ud398\uc774\uc9c0\uac00 \ub85c\ub4dc\ub418\uac70\ub098 \ub2eb\ud600 \uc788\ub294 \uc0c1\ud0dc\uc5d0\uc11c\ub3c4 \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc2e4\ud589"}),"\n"]}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\uc11c\ube44\uc2a4 \uc6cc\ucee4\uc758 \ud2b9\uc9d5"})}),(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"\ube44\ub3d9\uae30\uc801"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uc8fc \uc2a4\ub808\ub4dc\uc640 \ubcc4\ub3c4\uc758 \ub3d9\uc791\uc744 \ud558\uba70, \uc6f9\ud398\uc774\uc9c0 \uc131\ub2a5\uc5d0 \uc601\ud5a5\uc744 \ub07c\uce58\uc9c0 \uc54a\uc74c"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"\ub3c5\ub9bd\uc801"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uc6f9 \ud398\uc774\uc9c0\uac00 \ub2eb\ud788\uac70\ub098 \uc0c8\ub85c\uace0\uce68\ub418\ub354\ub77c\ub3c4 \ub3c5\ub9bd\uc801\uc774\uae30 \ub54c\ubb38\uc5d0 \uc9c0\uc18d\uc801\uc778 \uc2e4\ud589\uc774 \uac00\ub2a5"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"HTTPS\ud544\uc218"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \uac00\ub85c\ucc44\ub294 \ub2a5\ub825\uc744 \uc545\uc6a9\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud558\uae30 \uc704\ud574 HTTPS\ub97c \ud1b5\ud574\uc11c\ub9cc \uc2e4\ud589 \uac00\ub2a5"}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(e.h2,{id:"msw-\uc0ac\uc6a9-\uc774\uc720-\ubc0f-\uc7a5\uc810",children:"MSW \uc0ac\uc6a9 \uc774\uc720 \ubc0f \uc7a5\uc810"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c \uc0dd\uc0b0\uc131 \ud5a5\uc0c1"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\ubc31\uc5d4\ub4dc API\uac00 \ubbf8\uad6c\ud604 \ub418\uc5b4\uc788\uc744 \uacbd\uc6b0, \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \uc9c0\uc18d\uc801\uc73c\ub85c \uac00\ub2a5"}),"\n",(0,t.jsx)(e.li,{children:"\uc2e4\uc81c \uc11c\ubc84\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uace0 \uc2dc\ub098\ub9ac\uc624 \ud14c\uc2a4\ud2b8 \uac00\ub2a5"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\ud14c\uc2a4\ud2b8\uc758 \uc2e0\ub8b0\uc131 \ubc0f \uc77c\uad00\uc131"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uc678\ubd80 \ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \ubc29\uc9c0 \ubc0f \ud14c\uc2a4\ud2b8\uc758 \uc77c\uad00\uc131\uc744 \uc720\uc9c0"}),"\n",(0,t.jsx)(e.li,{children:"\uc5ec\ub7ec\uac00\uc9c0 \uc2dc\ub098\ub9ac\uc624\ub97c \ud1b5\ud574 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc608\uc678 \ucc98\ub9ac \ub85c\uc9c1\uc744 \uac80\uc99d"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\uc2e4\uc81c\uc640 \uc720\uc0ac\ud55c \ud658\uacbd \uc81c\uacf5"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\ube0c\ub77c\uc6b0\uc800 \ud658\uacbd\uc5d0\uc11c \uc2e4\uc81c \ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \uac00\ub85c\ucc44\uae30 \ub54c\ubb38\uc5d0 \uc2e4\uc81c \uc694\uccad\uacfc \ub3d9\uc77c\ud55c \uc870\uac74\uc744 \uc81c\uacf5"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"nextjs--msw",children:"Next.js + MSW"}),"\n",(0,t.jsx)(e.h3,{id:"msw-\uc124\uce58-\ubc0f-\uc124\uc815",children:"MSW \uc124\uce58 \ubc0f \uc124\uc815"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\ud504\ub85c\uc81d\ud2b8 \ud3f4\ub354\uc5d0\uc11c \ud130\ubbf8\ub110\uc5d0 ",(0,t.jsx)(e.code,{children:"npm install msw --save-dev"}),"\ub97c \uc785\ub825"]}),"\n",(0,t.jsxs)(e.li,{children:["\uc774\ud6c4 ",(0,t.jsx)(e.code,{children:"npx msw init ./public --save"}),"\ub85c \uc11c\ube44\uc2a4 \uc6cc\ucee4\ub97c \ub4f1\ub85d(public\uacbd\ub85c\uc5d0 mockServiceWorker.js\uac00 \uc0dd\uc131)"]}),"\n"]}),"\n",(0,t.jsxs)(e.details,{children:["\n",(0,t.jsx)(e.summary,{children:"mockServiceWorker.js \ucf54\ub4dc"}),"\n",(0,t.jsxs)(e.div,{markdown:"1",children:["\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'const PACKAGE_VERSION = "2.3.0";\r\nconst INTEGRITY_CHECKSUM = "26357c79639bfa20d64c0efca2a87423";\r\nconst IS_MOCKED_RESPONSE = Symbol("isMockedResponse");\r\nconst activeClientIds = new Set();\r\n\r\nself.addEventListener("install", function () {\r\n  self.skipWaiting();\r\n});\r\n\r\nself.addEventListener("activate", function (event) {\r\n  event.waitUntil(self.clients.claim());\r\n});\r\n\r\nself.addEventListener("message", async function (event) {\r\n  const clientId = event.source.id;\r\n\r\n  if (!clientId || !self.clients) {\r\n    return;\r\n  }\r\n\r\n  const client = await self.clients.get(clientId);\r\n\r\n  if (!client) {\r\n    return;\r\n  }\r\n\r\n  const allClients = await self.clients.matchAll({\r\n    type: "window",\r\n  });\r\n\r\n  switch (event.data) {\r\n    case "KEEPALIVE_REQUEST": {\r\n      sendToClient(client, {\r\n        type: "KEEPALIVE_RESPONSE",\r\n      });\r\n      break;\r\n    }\r\n\r\n    case "INTEGRITY_CHECK_REQUEST": {\r\n      sendToClient(client, {\r\n        type: "INTEGRITY_CHECK_RESPONSE",\r\n        payload: {\r\n          packageVersion: PACKAGE_VERSION,\r\n          checksum: INTEGRITY_CHECKSUM,\r\n        },\r\n      });\r\n      break;\r\n    }\r\n\r\n    case "MOCK_ACTIVATE": {\r\n      activeClientIds.add(clientId);\r\n\r\n      sendToClient(client, {\r\n        type: "MOCKING_ENABLED",\r\n        payload: true,\r\n      });\r\n      break;\r\n    }\r\n\r\n    case "MOCK_DEACTIVATE": {\r\n      activeClientIds.delete(clientId);\r\n      break;\r\n    }\r\n\r\n    case "CLIENT_CLOSED": {\r\n      activeClientIds.delete(clientId);\r\n\r\n      const remainingClients = allClients.filter((client) => {\r\n        return client.id !== clientId;\r\n      });\r\n\r\n      if (remainingClients.length === 0) {\r\n        self.registration.unregister();\r\n      }\r\n\r\n      break;\r\n    }\r\n  }\r\n});\r\n\r\nself.addEventListener("fetch", function (event) {\r\n  const { request } = event;\r\n\r\n  if (request.mode === "navigate") {\r\n    return;\r\n  }\r\n\r\n  if (request.cache === "only-if-cached" && request.mode !== "same-origin") {\r\n    return;\r\n  }\r\n\r\n  if (activeClientIds.size === 0) {\r\n    return;\r\n  }\r\n\r\n  const requestId = crypto.randomUUID();\r\n  event.respondWith(handleRequest(event, requestId));\r\n});\r\n\r\nasync function handleRequest(event, requestId) {\r\n  const client = await resolveMainClient(event);\r\n  const response = await getResponse(event, client, requestId);\r\n\r\n  if (client && activeClientIds.has(client.id)) {\r\n    (async function () {\r\n      const responseClone = response.clone();\r\n\r\n      sendToClient(\r\n        client,\r\n        {\r\n          type: "RESPONSE",\r\n          payload: {\r\n            requestId,\r\n            isMockedResponse: IS_MOCKED_RESPONSE in response,\r\n            type: responseClone.type,\r\n            status: responseClone.status,\r\n            statusText: responseClone.statusText,\r\n            body: responseClone.body,\r\n            headers: Object.fromEntries(responseClone.headers.entries()),\r\n          },\r\n        },\r\n        [responseClone.body]\r\n      );\r\n    })();\r\n  }\r\n\r\n  return response;\r\n}\r\n\r\nasync function resolveMainClient(event) {\r\n  const client = await self.clients.get(event.clientId);\r\n\r\n  if (client?.frameType === "top-level") {\r\n    return client;\r\n  }\r\n\r\n  const allClients = await self.clients.matchAll({\r\n    type: "window",\r\n  });\r\n\r\n  return allClients\r\n    .filter((client) => {\r\n      return client.visibilityState === "visible";\r\n    })\r\n    .find((client) => {\r\n      return activeClientIds.has(client.id);\r\n    });\r\n}\r\n\r\nasync function getResponse(event, client, requestId) {\r\n  const { request } = event;\r\n  const requestClone = request.clone();\r\n\r\n  function passthrough() {\r\n    const headers = Object.fromEntries(requestClone.headers.entries());\r\n\r\n    delete headers["x-msw-intention"];\r\n\r\n    return fetch(requestClone, { headers });\r\n  }\r\n\r\n  if (!client) {\r\n    return passthrough();\r\n  }\r\n\r\n  if (!activeClientIds.has(client.id)) {\r\n    return passthrough();\r\n  }\r\n\r\n  const requestBuffer = await request.arrayBuffer();\r\n  const clientMessage = await sendToClient(\r\n    client,\r\n    {\r\n      type: "REQUEST",\r\n      payload: {\r\n        id: requestId,\r\n        url: request.url,\r\n        mode: request.mode,\r\n        method: request.method,\r\n        headers: Object.fromEntries(request.headers.entries()),\r\n        cache: request.cache,\r\n        credentials: request.credentials,\r\n        destination: request.destination,\r\n        integrity: request.integrity,\r\n        redirect: request.redirect,\r\n        referrer: request.referrer,\r\n        referrerPolicy: request.referrerPolicy,\r\n        body: requestBuffer,\r\n        keepalive: request.keepalive,\r\n      },\r\n    },\r\n    [requestBuffer]\r\n  );\r\n\r\n  switch (clientMessage.type) {\r\n    case "MOCK_RESPONSE": {\r\n      return respondWithMock(clientMessage.data);\r\n    }\r\n\r\n    case "PASSTHROUGH": {\r\n      return passthrough();\r\n    }\r\n  }\r\n\r\n  return passthrough();\r\n}\r\n\r\nfunction sendToClient(client, message, transferrables = []) {\r\n  return new Promise((resolve, reject) => {\r\n    const channel = new MessageChannel();\r\n\r\n    channel.port1.onmessage = (event) => {\r\n      if (event.data && event.data.error) {\r\n        return reject(event.data.error);\r\n      }\r\n\r\n      resolve(event.data);\r\n    };\r\n\r\n    client.postMessage(\r\n      message,\r\n      [channel.port2].concat(transferrables.filter(Boolean))\r\n    );\r\n  });\r\n}\r\n\r\nasync function respondWithMock(response) {\r\n  if (response.status === 0) {\r\n    return Response.error();\r\n  }\r\n\r\n  const mockedResponse = new Response(response.body, response);\r\n\r\n  Reflect.defineProperty(mockedResponse, IS_MOCKED_RESPONSE, {\r\n    value: true,\r\n    enumerable: true,\r\n  });\r\n\r\n  return mockedResponse;\r\n}\n'})}),"\n",(0,t.jsxs)(e.admonition,{type:"note",children:[(0,t.jsxs)(e.p,{children:["\uc704\uc758 \ucf54\ub4dc\ub294 ",(0,t.jsx)(e.code,{children:"npx msw init ./public --save"}),"\ub97c \uc785\ub825 \ud6c4, \uc0dd\uc131\ub41c MSW\uc758 \uc11c\ube44\uc2a4 \uc6cc\ucee4 \uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\uc774\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\uac1c\ubc1c \ubc0f \ud14c\uc2a4\ud2b8 \ud658\uacbd\uc5d0\uc11c \ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \uac00\ub85c\ucc44\uace0 \ubaa8\uc758 \uc751\ub2f5\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9",(0,t.jsx)(e.br,{})]}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"})}),(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"install"}),": \uc11c\ube44\uc2a4 \uc6cc\ucee4\uac00 \uc124\uce58\ub420 \ub54c \uc989\uc2dc \ud65c\uc131\ud654 \ucc98\ub9ac"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"active"}),": \uc11c\ube44\uc2a4 \uc6cc\ucee4\uac00 \ud65c\uc131\ud65c \ub420 \ub54c \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uc989\uc2dc \uc81c\uc5b4"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"message"}),": \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c\ubd80\ud130 \uba54\uc138\uc9c0\ub97c \uc218\uc2e0\ud558\uace0 \ucc98\ub9ac, \uba54\uc138\uc9c0\uc758 \uc720\ud615\uc5d0 \ub530\ub77c \ubaa8\ud0b9 (\ube44)\ud65c\uc131\ud654, \ubb34\uacb0\uc131 \uac80\uc0ac\ub97c \ucc98\ub9ac"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"fetch"}),": \ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \uac00\ub85c\ucc44\uace0, \uc870\uac74\uc5d0 \ub530\ub77c \uc694\uccad\uc744 \ubb34\uc2dc\ud558\uac70\ub098 ",(0,t.jsx)(e.code,{children:"handleRequest"}),"\ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \ucc98\ub9ac"]}),"\n"]}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\ud568\uc218"})}),(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"handleRequest"}),":\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uc694\uccad\uc744 \ucc98\ub9ac, \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \ud1b5\uc2e0\ud558\uc5ec \uc751\ub2f5\uc744 \uc804\uc1a1."}),"\n",(0,t.jsx)(e.li,{children:"\ubaa8\ud0b9\ub41c \uc751\ub2f5\uc744 \uc0dd\uc131\ud558\uac70\ub098 \uc6d0\ubcf8 \uc694\uccad\uc744 \uc804\ub2ec."}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"\ubc18\ud658\uac12\uc740 Response\uac1d\uccb4"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"resolveMainClient"}),":\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uc694\uccad\uc744 \ubcf4\ub0b8 \uc8fc\uc694 \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \ud655\uc778"}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"\ubc18\ud658\uac12\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8 \uac1d\uccb4 \ud639\uc740 undefined"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"getResponse"}),":\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uc694\uccad\uc744 \ucc98\ub9ac\ud558\uace0 \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c\ubd80\ud130 \uc751\ub2f5\uc744 \ubc1b\uc544 \ubaa8\ud0b9\ub41c \uc751\ub2f5\uc744 \uc0dd\uc131\ud558\uac70\ub098 \uc6d0\ubcf8 \uc694\uccad\uc744 \uc804\ub2ec"}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"\ubc18\ud658\uac12\uc740 Response \uac1d\uccb4"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"sendToClient"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\ud074\ub77c\uc774\uc5b8\ud2b8\ub85c \uba54\uc138\uc9c0\ub97c \uc804\uc1a1\ud558\uace0 \uc751\ub2f5\uc744 \uae30\ub2e4\ub9b0\ub2e4."}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\ubc18\ud658\uac12\uc740 Promise\uac1d\uccb4"}),", \uc131\uacf5 \uc2dc \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \uc751\ub2f5 \ub370\uc774\ud130, \uc2e4\ud328 \uc2dc \uc5d0\ub7ec\ub97c \ubc18\ud658"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"respondWithMock"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\ubaa8\ud0b9\ub41c \uc751\ub2f5 \ub370\uc774\ud130\ub97c \uae30\ubc18\uc73c\ub85c ",(0,t.jsx)(e.code,{children:"Response"}),"\uac1d\uccb4\ub97c \uc0dd\uc131"]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"\ubc18\ud658\uac12\uc740 \ubaa8\ud0b9\ub41c Response\uac1d\uccb4"})}),"\n"]}),"\n"]}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"msw-\uc2e4\uc2b5-\ucf54\ub4dc",children:"MSW \uc2e4\uc2b5 \ucf54\ub4dc"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="(src/)app/layout.js"',children:'import "./globals.css";\r\nimport { MswComponent } from "@/_component/mswComponent";\r\n\r\nexport default function RootLayout({ children }) {\r\n  return (\r\n    <html lang="en">\r\n      <body style={{ width: "100vw", height: "100vh" }}>\r\n        <MswComponent />\r\n        {children}\r\n      </body>\r\n    </html>\r\n  );\r\n}\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="(src/)app/page.js"',children:'"use client";\r\n\r\nexport default function Home() {\r\n  const submit = async () => {\r\n    const data = await fetch("http://www.jjamva.com", {\r\n      method: "get",\r\n    }).then((res) => {\r\n      return res.json();\r\n    });\r\n\r\n    console.log(data);\r\n  };\r\n\r\n  return <button onClick={submit}>MSW \ud14c\uc2a4\ud2b8</button>;\r\n}\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="(src/)mocks/handlers.js"',children:'import { http, HttpResponse } from "msw";\r\n\r\nexport const handlers = [\r\n  http.get("http://www.jjamva.com", () => {\r\n    console.log("test MSW!");\r\n    return HttpResponse.json({\r\n      name: "jjamVa",\r\n      age: 87,\r\n      message: "MSW \uc131\uacf5!",\r\n    });\r\n  }),\r\n];\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="(src/)mocks/index.js"',children:'const initMockAPI = async () => {\r\n  if (typeof window === "undefined") {\r\n    const { server } = await import("@/mocks/server");\r\n    server.listen();\r\n  } else {\r\n    const { worker } = await import("@/mocks/worker");\r\n    worker.start();\r\n  }\r\n};\r\n\r\nexport default initMockAPI;\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="(src/)mocks/server.js"',children:'import { setupServer } from "msw/node";\r\nimport { handlers } from "./handlers";\r\n\r\nexport const server = setupServer(...handlers);\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="(src/)mocks/worker.js"',children:'import { setupWorker } from "msw/browser";\r\nimport { handlers } from "./handlers";\r\n\r\nexport const worker = setupWorker(...handlers);\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="(src/)_component/mswComponent.js"',children:'"use client";\r\n\r\nimport initMockAPI from "@/mocks";\r\nimport { useEffect } from "react";\r\n\r\nexport const MswComponent = ({ children }) => {\r\n  useEffect(() => {\r\n    async function InitMSW() {\r\n      if (process.env.NODE_ENV === "development") {\r\n        await initMockAPI();\r\n      }\r\n    }\r\n    InitMSW();\r\n  }, []);\r\n\r\n  return <>{children}</>;\r\n};\n'})}),"\n",(0,t.jsxs)(e.admonition,{type:"note",children:[(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"src/\r\n\u251c\u2500\u2500 _component\r\n\u2502   \u2514\u2500\u2500 mswComponent.js (MswComponent)\r\n\u251c\u2500\u2500 app\r\n\u2502   \u251c\u2500\u2500 layout.js (RootLayout)\r\n\u2502   \u2514\u2500\u2500 page.js (Home \ud398\uc774\uc9c0)\r\n\u2514\u2500\u2500 mocks\r\n    \u251c\u2500\u2500 handlers.js (\ud578\ub4e4\ub7ec \uc815\uc758)\r\n    \u251c\u2500\u2500 index.js (initMockAPI)\r\n    \u251c\u2500\u2500 server.js (MSW \uc11c\ubc84 \uc124\uc815)\r\n    \u2514\u2500\u2500 worker.js (MSW \uc6cc\ucee4 \uc124\uc815)\r\n\n"})}),(0,t.jsxs)(e.p,{children:["\uc704\uc758 \ucf54\ub4dc\ub294 MSW \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uc774\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\ud575\uc2ec\uc801\uc778 \ucf54\ub4dc\ub294 ",(0,t.jsx)(e.code,{children:"mocks"}),"\ud3f4\ub354\uc758 \ucf54\ub4dc\uc640 ",(0,t.jsx)(e.code,{children:"_component"}),"\uc758 \ud3f4\ub354\uc774\ub2e4.",(0,t.jsx)(e.br,{})]}),(0,t.jsxs)(e.details,{children:["\n",(0,t.jsx)(e.summary,{children:"handlers.js"}),"\n",(0,t.jsxs)(e.div,{markdown:"1",children:[(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="(src/)mocks/handlers.js"',children:'import { http, HttpResponse } from "msw";\r\n\r\nexport const handlers = [\r\n  http.get("http://www.jjamva.com", () => {\r\n    console.log("test MSW!");\r\n    return HttpResponse.json({\r\n      name: "jjamVa",\r\n      age: 87,\r\n      message: "MSW \uc131\uacf5!",\r\n    });\r\n  }),\r\n];\n'})}),(0,t.jsxs)(e.p,{children:["MSW\uc758 \ud578\ub4e4\ub7ec\ub97c \uc815\uc758\ud558\ub294 \ucf54\ub4dc",(0,t.jsx)(e.br,{}),"\r\nhandlers\ubc30\uc5f4\uc744 \uc815\uc758\ud558\uace0 \ubc30\uc5f4 \ub0b4\uc5d0 \ud2b9\uc815 API\uc694\uccad\uc744 \uac00\ub85c\ucc44\uace0 \ubaa8\uc758 \uc751\ub2f5\uc744 \ubc18\ud658\ud55c\ub2e4.",(0,t.jsx)(e.br,{})]}),(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"http"}),"\uac1d\uccb4\ub294 HTTP \uc694\uccad\uc744 \uc815\uc758\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9",(0,t.jsx)(e.br,{}),"\r\nhttp \uac1d\uccb4\uc758 \uba54\uc18c\ub4dc(get,post,put,delete)\ub97c \uc774\uc6a9\ud558\uc5ec \ubaa8\uc758 \ud578\ub4e4\ub7ec\ub97c \uc124\uc815\ud558\ub294\ub370 \uc0ac\uc6a9",(0,t.jsx)(e.br,{})]}),(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"HttpResponse"}),"\uac1d\uccb4\ub294 \ubaa8\uc758 HTTP \uc751\ub2f5\uc744 \uc0dd\uc131\ud558\ub294\ub370 \uc0ac\uc6a9",(0,t.jsx)(e.br,{}),"\r\nHTTP \uc751\ub2f5 \uc0c1\ud0dc, \ud5e4\ub354, \ubcf8\ubb38\uc744 \uc815\uc758\ud558\uc5ec \ubaa8\uc758 \ud578\ub4e4\ub7ec \ubc18\ud658\uac12\uc73c\ub85c \uc0ac\uc6a9\uc774 \uac00\ub2a5",(0,t.jsx)(e.br,{})]})]}),"\n"]}),(0,t.jsxs)(e.details,{children:["\n",(0,t.jsx)(e.summary,{children:"server.js\uc640 worker.js"}),"\n",(0,t.jsxs)(e.div,{markdown:"1",children:[(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="(src/)mocks/server.js"',children:'import { setupServer } from "msw/node";\r\nimport { handlers } from "./handlers";\r\n\r\nexport const server = setupServer(...handlers);\n'})}),(0,t.jsxs)(e.p,{children:["Node.js \ud658\uacbd\uc5d0\uc11c MSW \uc11c\ubc84\ub97c \uc124\uc815\ud558\ub294 \ucf54\ub4dc",(0,t.jsx)(e.br,{}),"\r\n\uc8fc\ub85c ",(0,t.jsx)(e.strong,{children:"\uc11c\ubc84\uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1"})," \ud639\uc740 ",(0,t.jsx)(e.strong,{children:"\ud14c\uc2a4\ud2b8 \ud658\uacbd"}),"\uc5d0\uc11c \uc0ac\uc6a9",(0,t.jsx)(e.br,{}),"\r\n",(0,t.jsx)(e.code,{children:"setupServer"}),"\ud568\uc218\ub97c \ud1b5\ud574 MSW\uc11c\ubc84\ub97c \uc124\uc815",(0,t.jsx)(e.br,{})]}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="(src/)mocks/worker.js"',children:'import { setupWorker } from "msw/browser";\r\nimport { handlers } from "./handlers";\r\n\r\nexport const worker = setupWorker(...handlers);\n'})}),(0,t.jsxs)(e.p,{children:["\ube0c\ub77c\uc6b0\uc800 \ud658\uacbd\uc5d0\uc11c MSW \uc6cc\ucee4\ub97c \uc124\uc815\ud558\ub294 \ucf54\ub4dc",(0,t.jsx)(e.br,{}),"\r\n\uc8fc\ub85c ",(0,t.jsx)(e.strong,{children:"\ud074\ub77c\uc774\uc5b8\ud2b8 \uc0ac\uc774\ub4dc"})," \uac1c\ubc1c\uc5d0\uc11c \uc0ac\uc6a9",(0,t.jsx)(e.br,{}),"\r\n",(0,t.jsx)(e.code,{children:"setupWorker"}),"\ud568\uc218\ub85c MSW\uc6cc\ucee4\ub97c \uc124\uc815",(0,t.jsx)(e.br,{})]}),(0,t.jsxs)(e.p,{children:["server.js\uc640 worker.js\ub294 MSW\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 handlers.js\uc5d0 \uc815\uc758\ud574\ub193\uc740 \ubaa8\uc758 \ud578\ub4e4\ub7ec\ub4e4\uc744 \uc801\uc6a9\ud55c\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\uc774\ud6c4 \uac01 \ud658\uacbd(\ud074\ub77c\uc774\uc5b8\ud2b8 \uc0ac\uc774\ub4dc, \uc11c\ubc84 \uc0ac\uc774\ub4dc)\ub97c \ud655\uc778\ud558\uc5ec MSW\ub97c \ub3d9\uc791\uc2dc\ud0a4\uae30 \uc704\ud574 \uc900\ube44\ub97c \ud558\ub294 \ub2e8\uacc4\uc774\ub2e4.",(0,t.jsx)(e.br,{})]})]}),"\n"]}),(0,t.jsxs)(e.details,{children:["\n",(0,t.jsx)(e.summary,{children:"index.js"}),"\n",(0,t.jsxs)(e.div,{markdown:"1",children:[(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'const initMockAPI = async () => {\r\n  if (typeof window === "undefined") {\r\n    const { server } = await import("@/mocks/server");\r\n    server.listen();\r\n  } else {\r\n    const { worker } = await import("@/mocks/worker");\r\n    worker.start();\r\n  }\r\n};\r\n\r\nexport default initMockAPI;\n'})}),(0,t.jsxs)(e.p,{children:["\uc704\uc758 \ucf54\ub4dc\ub294 MSW\ub97c \ucd08\uae30\ud654 \uc5ed\ud560\uc744 \ud558\ub294 \ud568\uc218\uc774\ub2e4.",(0,t.jsx)(e.br,{}),"\r\nif\ubb38\uc744 \ubcf4\uba74 window\uc758 \uc874\uc7ac \uc5ec\ubd80\uc5d0 \ub530\ub77c server \ud639\uc740 worker\ub97c \uc2e4\ud589\uc2dc\ud0a8\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\uc989, window\uac00 ",(0,t.jsx)(e.strong,{children:"\uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \uc11c\ubc84 \uc0ac\uc774\ub4dc(Node.js\ud658\uacbd)"}),", **\uc874\uc7ac\ud560 \uacbd\uc6b0 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc0ac\uc774\ub4dc(\ube0c\ub77c\uc6b0\uc800 \ud658\uacbd)**\uc774\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n",(0,t.jsx)(e.strong,{children:"\uc11c\ubc84 \uc0ac\uc774\ub4dc\uc77c \uacbd\uc6b0"}),"\uc5d4 server.js\ub97c \ud638\ucd9c\ud558\uc5ec ",(0,t.jsx)(e.strong,{children:"MSW\uc11c\ubc84\ub97c \uc2e4\ud589"}),", ",(0,t.jsx)(e.strong,{children:"\ud074\ub77c\uc774\uc5b8\ud2b8 \uc0ac\uc774\ub4dc"}),"\uc77c \uacbd\uc6b0 worker.js\ub97c ",(0,t.jsx)(e.strong,{children:"MSW\uc6cc\ucee4\ub97c \uc2e4\ud589"}),"\ud55c\ub2e4.",(0,t.jsx)(e.br,{})]})]}),"\n"]}),(0,t.jsxs)(e.details,{children:["\n",(0,t.jsx)(e.summary,{children:"MSW\uc0ac\uc6a9 \uc601\uc5ed \uc124\uc815(mswComponent.js) \ubc0f \uc0ac\uc6a9"}),"\n",(0,t.jsxs)(e.div,{markdown:"1",children:[(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="(src/)_component/mswComponent.js"',children:'"use client";\r\n\r\nimport initMockAPI from "@/mocks";\r\nimport { useEffect } from "react";\r\n\r\nexport const MswComponent = ({ children }) => {\r\n  useEffect(() => {\r\n    async function InitMSW() {\r\n      if (process.env.NODE_ENV === "development") {\r\n        await initMockAPI();\r\n      }\r\n    }\r\n    InitMSW();\r\n  }, []);\r\n\r\n  return <>{children}</>;\r\n};\n'})}),(0,t.jsxs)(e.p,{children:["\uc704\uc758 \ucf54\ub4dc\ub294 MSW\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \uc601\uc5ed\uc744 \uc124\uc815\ud560 Component\ub97c \uc815\uc758\ud558\ub294 \ucf54\ub4dc",(0,t.jsx)(e.br,{}),"\r\nuseEffect\ub97c \ud1b5\ud574 Mount\uac00 \ub420 \ub54c\ub9c8\ub2e4 MSW\ub97c \ucd08\uae30\ud654\ud55c\ub2e4.",(0,t.jsx)(e.br,{}),"\r\nif\ubb38\uc5d0 ",(0,t.jsx)(e.code,{children:'process.env.NODE_ENV === "development"'}),"\ub294 \uac1c\ubc1c \ud658\uacbd\uc778\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778\ud558\ub294 \uac83\uc774\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\uac1c\ubc1c \ud658\uacbd\uc774 \ud655\uc778\ub418\uc5c8\ub2e4\uba74, mocks\ud3f4\ub354\uc5d0\uc11c \uc815\uc758\ud55c index.js\ub97c \uc2e4\ud589\uc2dc\ucf1c MSW\ub97c \ucd08\uae30\ud654 \ud55c\ub2e4.",(0,t.jsx)(e.br,{})]}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="(src/)app/layout.js"',children:'import "./globals.css";\r\nimport { MswComponent } from "@/_component/mswComponent";\r\n\r\nexport default function RootLayout({ children }) {\r\n  return (\r\n    <html lang="en">\r\n      <body style={{ width: "100vw", height: "100vh" }}>\r\n        <MswComponent />\r\n        {children}\r\n      </body>\r\n    </html>\r\n  );\r\n}\n'})}),(0,t.jsxs)(e.p,{children:["MSW\ub97c \uc0ac\uc6a9\ud560 \uc601\uc5ed \uacbd\ub85c\uc758 layout.js\uc5d0 mswComponent\ub97c \ub123\uc73c\uba74 \ub41c\ub2e4.",(0,t.jsx)(e.br,{}),"\r\n\ubaa8\ub4e0 \uc601\uc5ed\uc5d0 \uc0ac\uc6a9\ud560 \uacbd\uc6b0, app\uacbd\ub85c\uc758 layout.js\uc5d0 \ub123\uc73c\uba74 \ub41c\ub2e4.",(0,t.jsx)(e.br,{})]}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="(src/)app/page.js"',children:'"use client";\r\n\r\nexport default function Home() {\r\n  const submit = async () => {\r\n    const data = await fetch("http://www.jjamva.com", {\r\n      method: "get",\r\n    }).then((res) => {\r\n      return res.json();\r\n    });\r\n\r\n    console.log(data);\r\n  };\r\n\r\n  return <button onClick={submit}>MSW \ud14c\uc2a4\ud2b8</button>;\r\n}\n'})}),(0,t.jsxs)(e.p,{children:["MSW\uc601\uc5ed \uc124\uc815\uae4c\uc9c0 \uc644\ub8cc\ud558\uc600\ub2e4\uba74, fetch\ub97c \ud1b5\ud574 API \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \uac83\ucc98\ub7fc \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4.",(0,t.jsx)(e.br,{})]}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://github.com/JJamVa/JJamVa/assets/80045006/4efdfed7-1e72-425c-8dca-73567c39986a",alt:"image"})}),(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"MSW \ud14c\uc2a4\ud2b8"}),"\ubc84\ud2bc\uc744 \ub20c\ub800\uc744 \uacbd\uc6b0, \uc704\uc758 \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 MSW\uac00 \uc798 \uc801\uc6a9\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.",(0,t.jsx)(e.br,{})]})]}),"\n"]})]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},989:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>c});var s=r(758);const t={},i=s.createContext(t);function l(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);
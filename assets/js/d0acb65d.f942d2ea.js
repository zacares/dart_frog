"use strict";(self.webpackChunkdart_frog_docs=self.webpackChunkdart_frog_docs||[]).push([[626],{1385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(5893),s=t(1151);const o={sidebar_position:2,title:"\ud83d\udd0a Echo",description:'Build a simple "Echo" application.'},i="Echo \ud83d\udd0a",a={id:"tutorials/echo",title:"\ud83d\udd0a Echo",description:'Build a simple "Echo" application.',source:"@site/docs/tutorials/echo.md",sourceDirName:"tutorials",slug:"/tutorials/echo",permalink:"/docs/tutorials/echo",draft:!1,unlisted:!1,editUrl:"https://github.com/VeryGoodOpenSource/dart_frog/tree/main/docs/docs/tutorials/echo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ud83d\udd0a Echo",description:'Build a simple "Echo" application.'},sidebar:"docs",previous:{title:"\ud83d\udc4b Hello World",permalink:"/docs/tutorials/hello_world"},next:{title:"\ud83d\udd22 Counter",permalink:"/docs/tutorials/counter"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Creating a new app",id:"creating-a-new-app",level:2},{value:"Running the development server",id:"running-the-development-server",level:2},{value:"Creating a dynamic route",id:"creating-a-dynamic-route",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"echo-",children:"Echo \ud83d\udd0a"})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Difficulty"}),": \ud83d\udfe2 Beginner",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:"Length"}),": 15 minutes"]}),(0,r.jsxs)(n.p,{children:["Before getting started, ",(0,r.jsx)(n.a,{href:"/docs/overview#prerequisites",children:"read the prerequisites"})," to make sure your development environment is ready."]})]}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"In this tutorial, we're going to build an app that exposes a single endpoint and responds with a dynamic response which echoes the path back."}),"\n",(0,r.jsxs)(n.p,{children:["When we're done, we should be able to make a ",(0,r.jsx)(n.code,{children:"GET"})," request to the ",(0,r.jsx)(n.code,{children:"/<message>"})," endpoint with any ",(0,r.jsx)(n.code,{children:"message"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# <message> is "ping"\ncurl --request GET \\\n  --url http://localhost:8080/ping\n\n# <message> is "pong"\ncurl --request GET \\\n  --url http://localhost:8080/pong\n'})}),"\n",(0,r.jsx)(n.p,{children:"And our server should respond with the following responses:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"HTTP/1.1 200 OK\nConnection: close\nContent-Length: 21\nContent-Type: text/plain; charset=utf-8\n\n\nping\n\n---\n\nHTTP/1.1 200 OK\nConnection: close\nContent-Length: 21\nContent-Type: text/plain; charset=utf-8\n\n\npong\n"})}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-new-app",children:"Creating a new app"}),"\n",(0,r.jsxs)(n.p,{children:["To create a new Dart Frog app, open your terminal, ",(0,r.jsx)(n.code,{children:"cd"})," into the directory where you'd like to create the app, and run the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dart_frog create echo\n"})}),"\n",(0,r.jsx)(n.p,{children:"You should see an output similar to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\u2713 Creating echo (0.1s)\n\u2713 Installing dependencies (1.7s)\n\nCreated echo at ./echo.\n\nGet started by typing:\n\ncd ./echo\ndart_frog dev\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Install and use the ",(0,r.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=VeryGoodVentures.dart-frog",children:"Dart Frog VS Code extension"})," to easily create Dart Frog apps within your IDE."]})}),"\n",(0,r.jsx)(n.h2,{id:"running-the-development-server",children:"Running the development server"}),"\n",(0,r.jsxs)(n.p,{children:["You should now have a directory called ",(0,r.jsx)(n.code,{children:"echo"})," -- ",(0,r.jsx)(n.code,{children:"cd"})," into it:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd echo\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then, run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dart_frog dev\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will start the development server on port ",(0,r.jsx)(n.code,{children:"8080"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\u2713 Running on http://localhost:8080 (1.3s)\nThe Dart VM service is listening on http://127.0.0.1:8181/YKEF_nbwOpM=/\nThe Dart DevTools debugger and profiler is available at: http://127.0.0.1:8181/YKEF_nbwOpM=/devtools/#/?uri=ws%3A%2F%2F127.0.0.1%3A8181%2FYKEF_nbwOpM%3D%2Fws\n[hotreload] Hot reload is enabled.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Make sure it's working by opening ",(0,r.jsx)(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"})," in your browser or via ",(0,r.jsx)(n.code,{children:"cURL"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl --request GET \\\n  --url http://localhost:8080\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If everything succeeded, you should see ",(0,r.jsx)(n.code,{children:"Welcome to Dart Frog!"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-dynamic-route",children:"Creating a dynamic route"}),"\n",(0,r.jsx)(n.p,{children:"Now that we have a running application, let's start by deleting the root route since we won't need it for this example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rm routes/index.dart\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Next, let's create ",(0,r.jsx)(n.code,{children:"routes/[message].dart"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"touch routes/[message].dart\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The square brackets ",(0,r.jsx)(n.code,{children:"[...]"})," indicates that the path segment is dynamic and will match anything. Learn more about ",(0,r.jsx)(n.a,{href:"/docs/basics/routes#dynamic-routes-",children:"dynamic routes"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["Finally, let's define an ",(0,r.jsx)(n.code,{children:"onRequest"})," method in the newly created route:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context, String message) {\n  return Response(body: message);\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Since this route handler corresponds to a dynamic route, we will received the parameter as an argument in ",(0,r.jsx)(n.code,{children:"onRequest"}),"."]})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Install and use the ",(0,r.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=VeryGoodVentures.dart-frog",children:"Dart Frog VS Code extension"})," to easily create new dynamic routes within your IDE."]})}),"\n",(0,r.jsx)(n.p,{children:"Save the changes and hot reload should kick in \u26a1\ufe0f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[hotreload] - Application reloaded.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Make sure it's working by opening ",(0,r.jsx)(n.a,{href:"http://localhost:8080/ping",children:"http://localhost:8080/ping"})," in your browser or via ",(0,r.jsx)(n.code,{children:"cURL"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl --request GET \\\n  --url http://localhost:8080/ping\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If everything succeeded, you should see your message echoed back -- in this case, we should see ",(0,r.jsx)(n.code,{children:"ping"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's try making a different request by visiting ",(0,r.jsx)(n.a,{href:"http://localhost:8080/pong",children:"http://localhost:8080/pong"})," in your browser or via ",(0,r.jsx)(n.code,{children:"cURL"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl --request GET \\\n  --url http://localhost:8080/pong\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This time you should see ",(0,r.jsx)(n.code,{children:"pong"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["\ud83c\udf89 Congrats, you've created an ",(0,r.jsx)(n.code,{children:"echo"})," application using Dart Frog. View the ",(0,r.jsx)(n.a,{href:"https://github.com/VeryGoodOpenSource/dart_frog/tree/main/examples/echo",children:"full source code"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(7294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
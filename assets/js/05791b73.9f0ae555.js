"use strict";(self.webpackChunkdart_frog_docs=self.webpackChunkdart_frog_docs||[]).push([[179],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3800:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="Routes \ud83d\ude8f",p={unversionedId:"basics/routes",id:"basics/routes",title:"Routes \ud83d\ude8f",description:"Overview \u2728",source:"@site/docs/basics/routes.md",sourceDirName:"basics",slug:"/basics/routes",permalink:"/docs/basics/routes",draft:!1,editUrl:"https://github.com/VeryGoodOpenSource/dart_frog/tree/main/docs/docs/basics/routes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Basics",permalink:"/docs/category/basics"},next:{title:"Middleware \ud83c\udf54",permalink:"/docs/basics/middleware"}},d={},u=[{value:"Overview \u2728",id:"overview-",level:2},{value:"Request Context \ud83d\udd17",id:"request-context-",level:2},{value:"Custom Status Code \ud83c\udd97",id:"custom-status-code-",level:2},{value:"Returning JSON <code>{}</code>",id:"returning-json-",level:2},{value:"Dynamic Routes \ud83c\udf13",id:"dynamic-routes-",level:2},{value:"Route Conflicts \ud83d\udca5",id:"route-conflicts-",level:2},{value:"Rogue Routes \ud83e\udd77",id:"rogue-routes-",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"routes-"},"Routes \ud83d\ude8f"),(0,a.kt)("h2",{id:"overview-"},"Overview \u2728"),(0,a.kt)("p",null,"In Dart Frog, a route consists of an ",(0,a.kt)("inlineCode",{parentName:"p"},"onRequest")," function (called a route handler) exported from a ",(0,a.kt)("inlineCode",{parentName:"p"},".dart")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"routes")," directory. Each endpoint is associated with a routes file based on its file name. Files named, ",(0,a.kt)("inlineCode",{parentName:"p"},"index.dart")," will correspond to a ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," endpoint."),(0,a.kt)("p",null,"For example, if you create ",(0,a.kt)("inlineCode",{parentName:"p"},"routes/hello.dart")," that exports an ",(0,a.kt)("inlineCode",{parentName:"p"},"onRequest")," method like below, it will be accessible at ",(0,a.kt)("inlineCode",{parentName:"p"},"/hello"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  return Response(body: 'Hello World');\n}\n")),(0,a.kt)("h2",{id:"request-context-"},"Request Context \ud83d\udd17"),(0,a.kt)("p",null,"All route handlers have access to a ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestContext")," which can be used to access the incoming request as well as dependencies provided to the request context (",(0,a.kt)("a",{parentName:"p",href:"/docs/basics/middleware"},"see middleware"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  // Access the incoming request.\n  final request = context.request;\n\n  // Return a response.\n  return Response(body: 'Hello World');\n}\n")),(0,a.kt)("h2",{id:"custom-status-code-"},"Custom Status Code \ud83c\udd97"),(0,a.kt)("p",null,"We can customize the status code of the response via the ",(0,a.kt)("inlineCode",{parentName:"p"},"statusCode")," parameter on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")," object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  return Response(statusCode: 204);\n}\n")),(0,a.kt)("h2",{id:"returning-json-"},"Returning JSON ",(0,a.kt)("inlineCode",{parentName:"h2"},"{}")),(0,a.kt)("p",null,"In addition, we can return JSON via the ",(0,a.kt)("inlineCode",{parentName:"p"},"Response.json")," constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  return Response.json(\n    body: <String, dynamic>{'hello': 'world!'},\n  );\n}\n")),(0,a.kt)("p",null,"We can also return any Dart object in the ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Response.json")," constructor and it will be serialized correctly as long as it has a ",(0,a.kt)("inlineCode",{parentName:"p"},"toJson")," method that returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Map<String, dynamic>"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Check out ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/packages/json_serializable"},(0,a.kt)("inlineCode",{parentName:"a"},"json_serializable"))," to automate the ",(0,a.kt)("inlineCode",{parentName:"p"},"toJson")," generation.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"json_serializable")," uses ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/packages/build_runner"},(0,a.kt)("inlineCode",{parentName:"a"},"build_runner"))," which expects code to be within the ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," directory. In order for the code generation step to work, make sure the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," model below is located somewhere within the top level ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," directory."),(0,a.kt)("p",{parentName:"admonition"},"For example:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 lib\n\u2502   \u2514\u2500\u2500 models\n\u2502       \u2514\u2500\u2500 user.dart\n\u2514\u2500\u2500 routes\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:json_annotation/json_annotation.dart';\n\npart 'user.g.dart';\n\n@JsonSerializable()\nclass User {\n  const User({required this.name, required this.age});\n\n  final String name;\n  final int age;\n\n  Map<String, dynamic> toJson() => _$UserToJson(this);\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  return Response.json(\n    body: User(name: 'Dash', age: 42),\n  );\n}\n")),(0,a.kt)("p",null,"Route handlers can be synchronous or asynchronous. To convert the above route handlers to async, we just need to update the return type from ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Future<Response>"),". We can add the ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," keyword in order to ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," futures within our handler before returning a ",(0,a.kt)("inlineCode",{parentName:"p"},"Response"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nFuture<Response> onRequest(RequestContext context) async {\n  final result = await _someFuture();\n  return Response(body: 'Result is: $result!');\n}\n")),(0,a.kt)("h2",{id:"dynamic-routes-"},"Dynamic Routes \ud83c\udf13"),(0,a.kt)("p",null,"Dart Frog supports dynamic routes. For example, if you create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"routes/posts/[id].dart"),", then it will be accessible at ",(0,a.kt)("inlineCode",{parentName:"p"},"/posts/1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/posts/2"),", etc."),(0,a.kt)("p",null,"Routing parameters are forwarded to the ",(0,a.kt)("inlineCode",{parentName:"p"},"onRequest")," method as seen below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context, String id) {\n  return Response(body: 'post id: $id');\n}\n")),(0,a.kt)("h2",{id:"route-conflicts-"},"Route Conflicts \ud83d\udca5"),(0,a.kt)("p",null,"When defining routes, it's possible to encounter route conflicts."),(0,a.kt)("p",null,"A route conflict occurs when more than one route handler resolves to the same endpoint."),(0,a.kt)("p",null,"For example, given the following file structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 routes\n\u2502\xa0\xa0 \u251c\u2500\u2500 api\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 index.dart\n\u2502\xa0\xa0 \u2514\u2500\u2500 api.dart\n")),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"routes/api/index.dart")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"routes/api.dart")," resolve the the ",(0,a.kt)("inlineCode",{parentName:"p"},"/api")," endpoint."),(0,a.kt)("p",null,"When running the development server via ",(0,a.kt)("inlineCode",{parentName:"p"},"dart_frog dev"),", Dart Frog will report route conflicts while the development server is running. You can resolve the conflicts and hot reload will allow you to continue development without having to restart the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[hotreload] - Application reloaded.\n\nRoute conflict detected. `routes/api.dart` and `routes/api/index.dart` both resolve to `/api`.\n")),(0,a.kt)("p",null,"When generating a production build via ",(0,a.kt)("inlineCode",{parentName:"p"},"dart_frog build"),", Dart Frog will report all detected route conflicts and fail the build if one or more route conflicts are detected."),(0,a.kt)("h2",{id:"rogue-routes-"},"Rogue Routes \ud83e\udd77"),(0,a.kt)("p",null,"Similar to route conflicts, it's also possible to run into rogue routes when working with Dart Frog."),(0,a.kt)("p",null,"A route is considered rogue when it is defined outside of an existing subdirectory with the same name."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 routes\n\u2502   \u251c\u2500\u2500 api\n\u2502   \u2502   \u2514\u2500\u2500 example.dart\n\u2502   \u251c\u2500\u2500 api.dart\n")),(0,a.kt)("p",null,"In the above scenario, ",(0,a.kt)("inlineCode",{parentName:"p"},"routes/api.dart")," is rogue because it is defined outside of the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," directory."),(0,a.kt)("p",null,"To correct this, ",(0,a.kt)("inlineCode",{parentName:"p"},"api.dart")," should be renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"index.dart")," and placed within the ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," directory like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 routes\n\u2502   \u251c\u2500\u2500 api\n\u2502   \u2502   \u251c\u2500\u2500 example.dart\n\u2502   \u2502   \u2514\u2500\u2500 index.dart\n")),(0,a.kt)("p",null,"When running the development server via ",(0,a.kt)("inlineCode",{parentName:"p"},"dart_frog dev"),", Dart Frog will report rogue routes while the development server is running. You can resolve the issues and hot reload will allow you to continue development without having to restart the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[hotreload] - Application reloaded.\n\nRogue route detected. `routes/api.dart` should be renamed to `routes/api/index.dart`.\n")),(0,a.kt)("p",null,"When generating a production build via ",(0,a.kt)("inlineCode",{parentName:"p"},"dart_frog build"),", Dart Frog will report all detected rogue routes and fail the build if one or more rogue routes are detected."))}m.isMDXComponent=!0}}]);
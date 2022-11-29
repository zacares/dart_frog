"use strict";(self.webpackChunkdart_frog_docs=self.webpackChunkdart_frog_docs||[]).push([[73],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(t),m=o,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4250:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:2,title:"\ud83d\udc33 Custom Dockerfile"},i="Custom Dockerfile \ud83d\udc33",c={unversionedId:"advanced/custom_dockerfile",id:"advanced/custom_dockerfile",title:"\ud83d\udc33 Custom Dockerfile",description:"A Dockerfile is automatically generated when creating a production build via the dart_frog build command.",source:"@site/docs/advanced/custom_dockerfile.md",sourceDirName:"advanced",slug:"/advanced/custom_dockerfile",permalink:"/docs/advanced/custom_dockerfile",draft:!1,editUrl:"https://github.com/VeryGoodOpenSource/dart_frog/tree/main/docs/docs/advanced/custom_dockerfile.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ud83d\udc33 Custom Dockerfile"},sidebar:"docs",previous:{title:"\ud83c\udfac Custom Server Entrypoint",permalink:"/docs/advanced/custom_entrypoint"},next:{title:"\ud83d\udd0b Powered By Header",permalink:"/docs/advanced/powered_by_header"}},l={},d=[],p={toc:d};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-dockerfile-"},"Custom Dockerfile \ud83d\udc33"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is automatically generated when creating a production build via the ",(0,o.kt)("inlineCode",{parentName:"p"},"dart_frog build")," command."),(0,o.kt)("p",null,"To use a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," at the root of the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 Dockerfile <-- NEW\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 analysis_options.yaml\n\u251c\u2500\u2500 pubspec.lock\n\u251c\u2500\u2500 pubspec.yaml\n\u251c\u2500\u2500 routes\n\u2502   \u2514\u2500\u2500 index.dart\n\u2514\u2500\u2500 test\n    \u2514\u2500\u2500 routes\n        \u2514\u2500\u2500 index_test.dart\n")),(0,o.kt)("p",null,"The following ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is a good starting point:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# An example of using a custom Dockerfile with Dart Frog\n# Official Dart image: https://hub.docker.com/_/dart\n# Specify the Dart SDK base image version using dart:<version> (ex: dart:2.17)\nFROM dart:stable AS build\n\nWORKDIR /app\n\n# Resolve app dependencies.\nCOPY pubspec.* ./\nRUN dart pub get\n\n# Copy app source code and AOT compile it.\nCOPY . .\n\n# Generate a production build.\nRUN dart pub global activate dart_frog_cli\nRUN dart pub global run dart_frog_cli:dart_frog build\n\n# Ensure packages are still up-to-date if anything has changed.\nRUN dart pub get --offline\nRUN dart compile exe build/bin/server.dart -o build/bin/server\n\n# Build minimal serving image from AOT-compiled `/server` and required system\n# libraries and configuration files stored in `/runtime/` from the build stage.\nFROM scratch\nCOPY --from=build /runtime/ /\nCOPY --from=build /app/build/bin/server /app/bin/\n# Uncomment the following line if you are serving static files.\n# COPY --from=build /app/build/public /public/\n\n# Start the server.\nCMD ["/app/bin/server"]\n')),(0,o.kt)("p",null,"To build your Docker image run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker build . -t dart-frog-app\n")),(0,o.kt)("p",null,"Then, run your Docker container via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -i -t -p 8080:8080 dart-frog-app\n")))}u.isMDXComponent=!0}}]);
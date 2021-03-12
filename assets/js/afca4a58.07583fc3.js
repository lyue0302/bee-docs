(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return n?o.a.createElement(f,l(l({ref:t},b),{},{components:n})):o.a.createElement(f,l({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<a;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(101)),c={title:"Useful Developer Info",id:"useful-dev-info"},l={unversionedId:"bee-developers/useful-dev-info",id:"bee-developers/useful-dev-info",isDocsHomePage:!1,title:"Useful Developer Info",description:"Welcome to the Dev area! We love PR's! \ud83d\udc1d",source:"@site/docs/bee-developers/useful-dev-info.md",slug:"/bee-developers/useful-dev-info",permalink:"/docs/bee-developers/useful-dev-info",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee-developers/useful-dev-info.md",version:"current",sidebar:"Balls",previous:{title:"API and Debug API",permalink:"/docs/api-reference/api-reference"},next:{title:"Community",permalink:"/docs/community/community"}},i=[],b={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Welcome to the Dev area! We love PR's! \ud83d\udc1d "),Object(a.b)("p",null,"We would would love you to get involved with our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethersphere/bee"}),"Github repo"),"."),Object(a.b)("p",null,"All the action can be found in our Mattermost instance, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://beehive.ethswarm.org/"}),"The Beehive"),". Sign up and get involved with our buzzing hive of daily dev chat."),Object(a.b)("p",null,"If you would like to contribute, please read the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethersphere/bee/blob/master/CODING.md"}),"coding guidelines")," before you get started."),Object(a.b)("p",null,"Installation from source is described in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/installation/build-from-source"}),"Installation"),"."),Object(a.b)("h1",{id:"testing-a-connection-with-pingpong-protocol"},"Testing a connection with PingPong protocol"),Object(a.b)("p",null,"To check if two nodes are connected and to see the round trip time for message exchange between them, get the overlay address from one node, for example local node 2:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl localhost:1835/addresses\n")),Object(a.b)("p",null,"Make sure that Debug API is enabled and address configured as in examples above."),Object(a.b)("p",null,"And use that address in the Debug API call on another node, for example, local node 1:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl -XPOST localhost:1735/pingpong/d4440baf2d79e481c3c6fd93a2014d2e6fe0386418829439f26d13a8253d04f1\n")),Object(a.b)("h1",{id:"generating-protobuf"},"Generating protobuf"),Object(a.b)("p",null,"To process protocol buffer files and generate the Go code from it two tools are needed:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/protocolbuffers/protobuf/releases"}),"protoc")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/gogo/protobuf"}),"protoc-gen-gogofaster"))),Object(a.b)("p",null,"Makefile rule ",Object(a.b)("inlineCode",{parentName:"p"},"protobuf")," can be used to automate ",Object(a.b)("inlineCode",{parentName:"p"},"protoc-gen-gogofaster")," installation and code generation:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"make protobuf\n")),Object(a.b)("h1",{id:"tracing"},"Tracing"),Object(a.b)("p",null,"Developers can gain an additional level of insight into the node by enabling ",Object(a.b)("inlineCode",{parentName:"p"},"tracing"),". To make use of Tracing, we advice to make use of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.jaegertracing.io/"}),"jaeger"),". "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Set up tracing by:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Start jaeger:\n",Object(a.b)("inlineCode",{parentName:"p"},"docker run -p 6831:6831/udp -p 16686:16686 jaegertracing/all-in-one:latest"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'start locally two bee nodes (different data dirs and ports) and connect them (see "Start a test network" in the ',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/advanced/starting-a-test-network"}),"advanced section"),") with ",Object(a.b)("inlineCode",{parentName:"p"},"--tracing")," flag provided for both nodes")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Make a call to the PingPong API on one of the two nodes (",Object(a.b)("inlineCode",{parentName:"p"},"curl -XPOST localhost:1735/pingpong/<overlay address other node>"),")."))),Object(a.b)("p",null,"Validate tracing in the web interface (",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:16686/"),")."))}p.isMDXComponent=!0}}]);
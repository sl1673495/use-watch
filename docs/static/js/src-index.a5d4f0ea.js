(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./example/index.css":function(e,n,t){},"./src/index.mdx":function(e,n,t){"use strict";t.r(n);var c=t("./node_modules/_@babel_runtime@7.7.4@@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=t("react"),o=t.n(r),u=t("./node_modules/_@mdx-js_react@1.5.1@@mdx-js/react/dist/index.es.js");function a(e,n){var t=Object(r.useRef)(),c=Object(r.useRef)(!1);Object(r.useEffect)((function(){c.current?n(e,t.current):c.current=!0,t.current=e}),[e])}var s=a;a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useWatch",filename:"src/index.ts"}});var i=t("./node_modules/_@babel_runtime@7.7.4@@babel/runtime/helpers/esm/slicedToArray.js"),l=(t("./example/index.css"),function(){var e=Object(r.useState)(),n=Object(i.a)(e,2),t=n[0],c=n[1],u=Object(r.useState)(0),a=Object(i.a)(u,2),l=a[0],b=a[1];s(l,(function(e,n){console.log("prevCount: ",n),console.log("currentCount: ",e),c(n)}));return o.a.createElement("div",null,o.a.createElement("p",null," \u5f53\u524d\u7684count\u662f",l),o.a.createElement("p",null," \u524d\u4e00\u6b21\u7684count\u662f",t),l,o.a.createElement("button",{onClick:function(){return b((function(e){return e+1}))},className:"btn"},"+"))}),b=l;l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"App",filename:"example/index.tsx"}}),t.d(n,"default",(function(){return d}));var p={},m="wrapper";function d(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(u.b)(m,Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),Object(u.b)("pre",null,Object(u.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React, { useState } from 'react';\nimport useWatch from '../src'\nimport './index.css'\n\nconst App: React.FC = () => {\n  const [prev, setPrev] = useState()\n  const [count, setCount] = useState(0);\n\n  useWatch(count, (currentCount, prevCount) => {\n    console.log('prevCount: ', prevCount);\n    console.log('currentCount: ', currentCount);\n    setPrev(prevCount)\n  })\n\n  const add = () => setCount(prevCount => prevCount + 1)\n\n  return (\n    <div>\n      <p> \u5f53\u524d\u7684count\u662f{count}</p>\n      <p> \u524d\u4e00\u6b21\u7684count\u662f{prev}</p>\n      {count}\n      <button onClick={add} className=\"btn\">+</button>\n    </div>\n  )\n}\n\nexport default App\n\n")),Object(u.b)("h1",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(u.b)(b,{mdxType:"App"}))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/index.mdx"}}),d.isMDXComponent=!0}}]);
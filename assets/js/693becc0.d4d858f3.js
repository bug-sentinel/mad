"use strict";(self.webpackChunk_equinor_mad_platform_docs=self.webpackChunk_equinor_mad_platform_docs||[]).push([[6970],{9596:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(1085),s=n(1184);const a={sidebar_label:"Getting started",description:"Learn how to configure your app to use mad toast!"},r="How to get started",i={id:"mad-toast/getting-started",title:"How to get started",description:"Learn how to configure your app to use mad toast!",source:"@site/docs/mad-toast/2-getting-started.md",sourceDirName:"mad-toast",slug:"/mad-toast/getting-started",permalink:"/mad/docs/mad-toast/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/equinor/mad/tree/main/apps/docs/shared/docs/mad-toast/2-getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Getting started",description:"Learn how to configure your app to use mad toast!"},sidebar:"toastSidebar",previous:{title:"Introduction",permalink:"/mad/docs/mad-toast/introduction"},next:{title:"API",permalink:"/mad/docs/mad-toast/api"}},d={},c=[{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3}];function l(t){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"how-to-get-started",children:"How to get started"}),"\n",(0,o.jsx)(e.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"npm install @equinor/mad-toast"})}),"\n",(0,o.jsx)(e.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(e.p,{children:"Add ToastEmitter component to your app. It should be the last child in your View hierarchy in order\nto prevent other components from rendering above it:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'import { ToastEmitter } from "@equinor/mad-toast";\n\nexport function App(props) {\n    return (\n        <>\n            {/* ... */}\n            <ToastEmitter />\n        </>\n    );\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["Then use ",(0,o.jsx)(e.code,{children:"addToast"})," anywhere in your app"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'// Foo.jsx\nimport { addToast } from "@equinor/mad-toast";\nimport { Button } from "react-native";\n\nexport function Foo(props) {\n    const showToast = () => {\n        addToast({\n            type: "success",\n            text: "Hello",\n        });\n    };\n\n    return <Button title="Show toast" onPress={showToast} />;\n}\n'})})]})}function u(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},1184:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>i});var o=n(4041);const s={},a=o.createContext(s);function r(t){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),o.createElement(a.Provider,{value:e},t.children)}}}]);
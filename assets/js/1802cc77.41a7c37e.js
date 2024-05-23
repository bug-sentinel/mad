"use strict";(self.webpackChunk_equinor_mad_platform_docs=self.webpackChunk_equinor_mad_platform_docs||[]).push([[6194],{8674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>m});var s=n(1085),o=n(1184);const a={sidebar_label:"Implement a way to access the settings screen",description:"Learn how to implement a way to access the settings screen!"},i="Implement a way to access the settings screen",r={id:"mad-core/migration-guide/implement-a-way-to-access-the-settings-screen",title:"Implement a way to access the settings screen",description:"Learn how to implement a way to access the settings screen!",source:"@site/docs/mad-core/migration-guide/5-implement-a-way-to-access-the-settings-screen.md",sourceDirName:"mad-core/migration-guide",slug:"/mad-core/migration-guide/implement-a-way-to-access-the-settings-screen",permalink:"/mad/docs/mad-core/migration-guide/implement-a-way-to-access-the-settings-screen",draft:!1,unlisted:!1,editUrl:"https://github.com/equinor/mad/tree/main/apps/docs/shared/docs/mad-core/migration-guide/5-implement-a-way-to-access-the-settings-screen.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Implement a way to access the settings screen",description:"Learn how to implement a way to access the settings screen!"},sidebar:"coreSidebar",previous:{title:"Replace react-navigation imports",permalink:"/mad/docs/mad-core/migration-guide/replace-navigation-imports"},next:{title:"Add ErrorBoundary (optional)",permalink:"/mad/docs/mad-core/migration-guide/add-ErrorBoundary"}},c={},m=[];function d(e){const t={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"implement-a-way-to-access-the-settings-screen",children:"Implement a way to access the settings screen"}),"\n",(0,s.jsxs)(t.p,{children:["How the user navigates to settings, is up to the app itself. One common approach is to add a button\nin your main screen's ",(0,s.jsx)(t.code,{children:"headerRight"})," position."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'import React from "react";\nimport { Button } from "@equinor/mad-components";\nimport { useCoreStackNavigation } from "@equinor/mad-core";\nimport { View } from "react-native";\n\nexport type GoToSettingsButtonProps = { marginRight?: number };\n\nexport function GoToSettingsButton({ marginRight }: GoToSettingsButtonProps) {\n    const navigation = useCoreStackNavigation();\n    return (\n        <View style={{ marginRight }}>\n            <Button.Icon\n                name="cog-outline"\n                variant="ghost"\n                onPress={() => navigation.navigate("Settings")}\n            />\n        </View>\n    );\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Results:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Results",src:n(6247).A+"",width:"773",height:"78"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6247:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/settings-button-example-91f18f3015cb15b040654a9c0d24d67f.png"},1184:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(4041);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6215],{3129:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var t=r(5893),o=r(1151);const n={title:"Macro Hierarchy"},i="Macro Hierarchy",c={id:"integration-manager/macros/macro-hierarchy",title:"Macro Hierarchy",description:"Overview",source:"@site/docs/integration-manager/macros/macro-hierarchy.md",sourceDirName:"integration-manager/macros",slug:"/integration-manager/macros/macro-hierarchy",permalink:"/integration-platform-docs/docs/integration-manager/macros/macro-hierarchy",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/integration-platform-docs/tree/main/docs/integration-manager/macros/macro-hierarchy.md",tags:[],version:"current",lastUpdatedAt:1700332837,formattedLastUpdatedAt:"Nov 18, 2023",frontMatter:{title:"Macro Hierarchy"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Account (Public) Macros",id:"account-public-macros",level:2},{value:"Job Template Macros",id:"job-template-macros",level:2},{value:"User (Private) Macros",id:"user-private-macros",level:2},{value:"Job Config Macros",id:"job-config-macros",level:2},{value:"Example Inheritance:",id:"example-inheritance",level:3}];function d(e){const a={h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"macro-hierarchy",children:"Macro Hierarchy"}),"\n",(0,t.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(a.p,{children:"Macros use a hierarchy to allow flexibility (and privacy) across your deployed integrations."}),"\n",(0,t.jsxs)(a.p,{children:["In a nutshell the macros are applied and overridden in the following order: ",(0,t.jsx)(a.img,{src:r(8435).Z+"",width:"3870",height:"300"})]}),"\n",(0,t.jsx)(a.h2,{id:"account-public-macros",children:"Account (Public) Macros"}),"\n",(0,t.jsx)(a.p,{children:"Account-level macros are global and read-only."}),"\n",(0,t.jsx)(a.p,{children:"They can be viewed by all users in your account. They can only be created, edited, deleted by account admin users."}),"\n",(0,t.jsx)(a.h2,{id:"job-template-macros",children:"Job Template Macros"}),"\n",(0,t.jsx)(a.p,{children:"Job Template macros increase portability of your integrations. They will apply to any Job Config that is a child of this Job Template."}),"\n",(0,t.jsx)(a.p,{children:"They can be viewed by any user who has at least read access to the Job Template. They can only be created, edited, deleted with write access to the Job Template, by the Job Template owner, or by Account Admins."}),"\n",(0,t.jsx)(a.p,{children:"Job Templates are designed to allow reuse of common integration artifacts and Job Config values that apply to multiple integration configurations. For example, you may have several customers or departments within your company who send you the same data format. You could create a single integration Job Template to hold your common integration artifacts (maps, scripts, etc) and common macro values, then create a separate Job Config for each - where you only need to override a few macro values that are specific to them."}),"\n",(0,t.jsx)(a.p,{children:"Note that templates are completely optional. Many configurations will not have a Job Template. This layer of the hierarchy will be ignored for any configurations without a Job Template."}),"\n",(0,t.jsx)(a.h2,{id:"user-private-macros",children:"User (Private) Macros"}),"\n",(0,t.jsxs)(a.p,{children:["User macros can further increase the portability AND privacy of your integrations. User macros are applied for the ",(0,t.jsx)(a.strong,{children:"submitted by"})," user when a job is executed. Submitted by will always be the Job Config owner for scheduled jobs."]}),"\n",(0,t.jsx)(a.p,{children:"They can only be viewed, created, edited, deleted by the associated user, or by account admin users."}),"\n",(0,t.jsx)(a.p,{children:"User macros are great for individual users to manage their own credentials to connected systems."}),"\n",(0,t.jsx)(a.h2,{id:"job-config-macros",children:"Job Config Macros"}),"\n",(0,t.jsx)(a.p,{children:"They can be viewed by any user who has at least read access to the Job Config. They can only be created, edited, deleted with write access to the Job Config, by the Job Config owner, or by account admin users."}),"\n",(0,t.jsx)(a.h3,{id:"example-inheritance",children:"Example Inheritance:"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:r(7454).Z+"",width:"4205",height:"1198"})})]})}function h(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8435:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/Integration-Manager-Macro-Hierarchy-Simple-7e989ee8d437762678054977164e6aae.png"},7454:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/Integration-Manager-Macro-Hierarchy-5605596456804bfff5b0878ea260845a.png"},1151:(e,a,r)=>{r.d(a,{Z:()=>c,a:()=>i});var t=r(7294);const o={},n=t.createContext(o);function i(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);
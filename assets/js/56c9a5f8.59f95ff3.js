"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3098],{6589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(5893),r=t(1151);const i={layout:"default",title:"Troubleshooting"},a="Troubleshooting",s={id:"integration-manager/server-troubleshooting",title:"Troubleshooting",description:"Application Failed to Start",source:"@site/docs/integration-manager/server-troubleshooting.md",sourceDirName:"integration-manager",slug:"/integration-manager/server-troubleshooting",permalink:"/integration-platform-docs/docs/integration-manager/server-troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/integration-platform-docs/tree/main/docs/integration-manager/server-troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1700332837,formattedLastUpdatedAt:"Nov 18, 2023",frontMatter:{layout:"default",title:"Troubleshooting"},sidebar:"docsSidebar",previous:{title:"Salesforce.com Outbound Messaging",permalink:"/integration-platform-docs/docs/integration-manager/APIs/sfdc-outbound-messaging-api"},next:{title:"Integration Agent Overview",permalink:"/integration-platform-docs/docs/integration-agent/agent-overview"}},l={},c=[{value:"Application Failed to Start",id:"application-failed-to-start",level:2},{value:"Jobs are Queuing",id:"jobs-are-queuing",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(n.h2,{id:"application-failed-to-start",children:"Application Failed to Start"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"***************************\nAPPLICATION FAILED TO START\n***************************\n\nDescription:\n\nWeb server failed to start. Port XXXX was already in use.\n\nAction:\n\nIdentify and stop the process that's listening on port XXXX or configure this application to listen on another port.\n"})}),"\n",(0,o.jsx)(n.p,{children:"This typically means there is already an instance of the service running (or perhaps another service installed on the same port). There are a few options to resolve this error:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Locate and stop or kill the running service or process. We recommend using ProcessExplorer."}),"\n",(0,o.jsxs)(n.li,{children:["Modify the port being used to remove the conflict. This is done by adding/changing the server.port value in:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Integration Manager: (programData)IntegrationManager/conf/application.properties"}),"\n",(0,o.jsx)(n.li,{children:"Worker: (programData)Worker/conf/worker-application.properties"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"jobs-are-queuing",children:"Jobs are Queuing"}),"\n",(0,o.jsx)(n.p,{children:"Job queuing is normal workload management behavior, depending on the Worker and Engine resources you have provisioned and/or are licensed for."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'If jobs are queued without any marked as "Running", then it is likely that at least one Worker is not running.'}),"\n",(0,o.jsxs)(n.li,{children:["If jobs are queuing beyond your required SLA, then your provisioned Worker resources are insufficient. Note that this may be due to licensing restrictions such as the number of Engines you are licensed for. See ",(0,o.jsx)(n.a,{href:"server-administration/workload-management",children:"Workload Management"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(7294);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
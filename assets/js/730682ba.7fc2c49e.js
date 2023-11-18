"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1701],{6986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(5893),i=t(1151);const r={title:"Accessing On-Premise Storage"},s="Accessing On-Premise Storage",a={id:"integration-agent/on-prem-data/accessing-on-premise-storage",title:"Accessing On-Premise Storage",description:"A common scenario for using DataCloud Agent to execute an integration is when you need to read or write a file stored either locally or on a network.",source:"@site/docs/integration-agent/on-prem-data/accessing-on-premise-storage.md",sourceDirName:"integration-agent/on-prem-data",slug:"/integration-agent/on-prem-data/accessing-on-premise-storage",permalink:"/integration-platform-docs/docs/integration-agent/on-prem-data/accessing-on-premise-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/IntegrationPlatform/tree/main/docs/integration-agent/on-prem-data/accessing-on-premise-storage.md",tags:[],version:"current",frontMatter:{title:"Accessing On-Premise Storage"},sidebar:"docsSidebar",previous:{title:"Monitoring Agent Status",permalink:"/integration-platform-docs/docs/integration-agent/monitoring-agent-status"},next:{title:"Connecting to MS SQL Server",permalink:"/integration-platform-docs/docs/integration-agent/on-prem-data/connecting-to-ms-sql-server"}},c={},l=[];function d(e){const n={admonition:"admonition",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"accessing-on-premise-storage",children:"Accessing On-Premise Storage"}),"\n",(0,o.jsx)(n.p,{children:"A common scenario for using DataCloud Agent to execute an integration is when you need to read or write a file stored either locally or on a network."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["When configuring a network file location, use a Macro value referencing the full network path (e.g., \\\\",(0,o.jsx)(n.em,{children:"servername"}),"\\",(0,o.jsx)(n.em,{children:"folder"}),"\\",(0,o.jsx)(n.em,{children:"filename"}),".csv)."]})}),"\n",(0,o.jsx)(n.p,{children:"On Windows, the Agent runs using the Windows Local System account by default. This may or may not be sufficient, depending on your business' security protocols. Similar Local System limitations exist for other Windows Authorized Services, such as Microsoft SQL Server."}),"\n",(0,o.jsx)(n.p,{children:"If the integration is unable to find, access, or connect to a file or data that you can see, you likely need to re-configure the service to log on as a domain user with the appropriate access. Each time the Agent starts, it will log on as that user."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Open",(0,o.jsx)(n.strong,{children:"Windows Administrative Tools"})," \u2192 ",(0,o.jsx)(n.strong,{children:"Services"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Locate and right-click ",(0,o.jsx)(n.strong,{children:"Actian Integration Agent"})," and select ",(0,o.jsx)(n.strong,{children:"Properties"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Select the ",(0,o.jsx)(n.strong,{children:"Log On"})," tab."]}),"\n",(0,o.jsx)(n.li,{children:'Select the option for "This account:".'}),"\n",(0,o.jsx)(n.li,{children:"Enter the Domain User credentials that have appropriate access to the local storage or database."}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Right-click ",(0,o.jsx)(n.strong,{children:"Actian Integration Agent"})," and select ",(0,o.jsx)(n.strong,{children:"Restart"}),"."]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(7294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
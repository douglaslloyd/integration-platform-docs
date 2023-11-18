"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7019],{5461:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=i(5893),t=i(1151);const o={layout:"default",title:"Serialized Job Queues"},r="Serialized Job Queues",s={id:"integration-manager/advanced-topics/serialized-job-queues",title:"Serialized Job Queues",description:"Overview",source:"@site/docs/integration-manager/advanced-topics/serialized-job-queues.md",sourceDirName:"integration-manager/advanced-topics",slug:"/integration-manager/advanced-topics/serialized-job-queues",permalink:"/docs/integration-manager/advanced-topics/serialized-job-queues",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/integration-platform-docs/tree/main/docs/integration-manager/advanced-topics/serialized-job-queues.md",tags:[],version:"current",lastUpdatedAt:1700339160,formattedLastUpdatedAt:"Nov 18, 2023",frontMatter:{layout:"default",title:"Serialized Job Queues"},sidebar:"docsSidebar",previous:{title:"Managing Agents and Devices",permalink:"/docs/integration-manager/agents-and-devices/managing-agents-and-devices"},next:{title:"DataFlow Job Configs",permalink:"/docs/integration-manager/advanced-topics/dataflow-usage"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Configuring a Serialized Job Queue",id:"configuring-a-serialized-job-queue",level:2},{value:"Prerequisites",id:"prerequisites",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"serialized-job-queues",children:"Serialized Job Queues"}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"By default, all Integration Manager jobs run in parallel, up to the available concurrency, i.e. number of engines or nodes that you have licensed. Most of the time different kinds of jobs can run concurrently without issue."}),"\n",(0,a.jsx)(n.p,{children:"Sometimes, however, the SAME job running concurrently can have undesirable outcome, i.e. the integration may not be idempotent."}),"\n",(0,a.jsx)(n.p,{children:"Some examples:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Actions on a database are not atomic, i.e. global transaction logic"}),"\n",(0,a.jsx)(n.li,{children:"Common local files are used for lookup (and potentially updated with new information on a regular basis)"}),"\n",(0,a.jsx)(n.li,{children:"A Job Config that is scheduled to run every 15 minutes but occasionally takes longer and overlaps"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In these scenarios, you can protect your data without complex integration logic by using a Serialized Job Queue."}),"\n",(0,a.jsx)(n.h2,{id:"configuring-a-serialized-job-queue",children:"Configuring a Serialized Job Queue"}),"\n",(0,a.jsx)(n.p,{children:"Strictly speaking, a mutex is a locking mechanism used to synchronize access to a resource. Only one task (can be a thread or process based on OS abstraction) can acquire the mutex. It means there is ownership associated with a mutex, and only the owner can release the lock (mutex)."}),"\n",(0,a.jsx)(n.p,{children:"A serialized job queue can be configured for any Job Template or Job Config. In essence, this prevents running multiple jobs for the same Job Config at the same time."}),"\n",(0,a.jsx)(n.p,{children:'In order to enable a serialized job queue for a Job Config, you simply set the "blocking" property to true (blocking is false by default).'}),"\n",(0,a.jsx)(n.p,{children:"This can be accomplished via a simple API PATCH method:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'REQUEST:\nPATCH https://api.im.actiandatacloud.com/v2/api/jobconfigs/[jobconfig id]\nAuthorization: Bearer [access token value]\nContent-Type: application/json\n\n{"blocking": true}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"DataCloud subscribers have access to Serialized Job Queues out-of-box without additional configuration."}),"\n",(0,a.jsx)(n.p,{children:"On-premise and VPC deployments of Integration Manager must have the ZooKeeper configuration enabled and connected, see Server Admin > Apache ZooKeeper Setup."})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>r});var a=i(7294);const t={},o=a.createContext(t);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);
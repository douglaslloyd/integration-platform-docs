"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6389],{2367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(5893),r=t(1151);const s={layout:"default",title:"Kubernetes"},a="Kubernetes",o={id:"integration-manager/server-administration/setup-kubernetes",title:"Kubernetes",description:"Overview",source:"@site/docs/integration-manager/server-administration/setup-kubernetes.md",sourceDirName:"integration-manager/server-administration",slug:"/integration-manager/server-administration/setup-kubernetes",permalink:"/integration-platform-docs/docs/integration-manager/server-administration/setup-kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/integration-platform-docs/tree/main/docs/integration-manager/server-administration/setup-kubernetes.md",tags:[],version:"current",lastUpdatedAt:1700332837,formattedLastUpdatedAt:"Nov 18, 2023",frontMatter:{layout:"default",title:"Kubernetes"},sidebar:"docsSidebar",previous:{title:"Job Notifications",permalink:"/integration-platform-docs/docs/integration-manager/server-administration/setup-job-notifications"},next:{title:"Server Upgrades",permalink:"/integration-platform-docs/docs/integration-manager/server-administration/server-upgrades"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"What&#39;s Not Included",id:"whats-not-included",level:2},{value:"Ready to Get Started?",id:"ready-to-get-started",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Integration Manager deployment is fully supported within a Kubernetes cluster using Helm and industry standard ArgoCD deployment."}),"\n",(0,i.jsx)(n.p,{children:"In fact, the Actian DataCloud Platform is deployed across multiple Kubernetes clusters."}),"\n",(0,i.jsx)(n.p,{children:"These deployments typically require a brief, remote Professional Services engagement including:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"High level introduction to Integration Manager Services, how they communicate and interact"}),"\n",(0,i.jsx)(n.li,{children:"Database schema, scripts, and bootstrapping"}),"\n",(0,i.jsx)(n.li,{children:"RabbitMQ exchange and queue bootstrapping"}),"\n",(0,i.jsx)(n.li,{children:"Initial configuration of NGINX and Route53 resources"}),"\n",(0,i.jsx)(n.li,{children:"Installation/deployment of Integration Manager Services via Helm  and ArgoCD into Kubernetes"}),"\n",(0,i.jsx)(n.li,{children:"General management, monitoring, and maintenance guidelines for Integration Manager Services"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Specific infrastructure requirements must exist prior to the Professional Services engagement."}),"\n",(0,i.jsx)(n.p,{children:"Client must provide at least two environments (test and production) and demonstrate in-house competence in the following areas:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kubernetes Admin Competency"}),"\n",(0,i.jsx)(n.li,{children:"Basic understanding of Helm"}),"\n",(0,i.jsx)(n.li,{children:"Kubernetes Cluster, AWS EKS Cluster, Azure AKS Cluster, or GKE Cluster"}),"\n",(0,i.jsx)(n.li,{children:"MySQL Database (AWS Aurora, Azure Database, or Google Cloud SQL)"}),"\n",(0,i.jsx)(n.li,{children:"Configuration and Job History buckets/containers"}),"\n",(0,i.jsx)(n.li,{children:"AWS Route53 Hosted Zone"}),"\n",(0,i.jsx)(n.li,{children:"SSL Certificates"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"whats-not-included",children:"What's Not Included"}),"\n",(0,i.jsx)(n.p,{children:"Actian cannot provide consulting or ongoing support for the following topics:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AWS/Azure/Google Cloud Administration"}),"\n",(0,i.jsx)(n.li,{children:"Linux Administration"}),"\n",(0,i.jsx)(n.li,{children:"Kubernetes Administration"}),"\n",(0,i.jsx)(n.li,{children:"NGINX Administration"}),"\n",(0,i.jsx)(n.li,{children:"MySQL Administration"}),"\n",(0,i.jsx)(n.li,{children:"RabbitMQ Administration"}),"\n",(0,i.jsx)(n.li,{children:"Regional/Geographic Failover"}),"\n",(0,i.jsx)(n.li,{children:"Disaster Recovery Architecture"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ready-to-get-started",children:"Ready to Get Started?"}),"\n",(0,i.jsxs)(n.p,{children:["Please contact your Actian Representative or email ",(0,i.jsx)(n.a,{href:"mailto:support@actian.com",children:"support@actian.com"})," for more details."]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(7294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
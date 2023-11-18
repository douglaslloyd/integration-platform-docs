"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6233],{730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=t(5893),s=t(1151);const o={layout:"default",title:"Run Job with Input Message"},a="Run Job with Input Message",r={id:"integration-manager/jobs/run-job-with-input-message",title:"Run Job with Input Message",description:"Overview",source:"@site/docs/integration-manager/jobs/run-job-with-input-message.md",sourceDirName:"integration-manager/jobs",slug:"/integration-manager/jobs/run-job-with-input-message",permalink:"/integration-platform-docs/docs/integration-manager/jobs/run-job-with-input-message",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/integration-platform-docs/tree/main/docs/integration-manager/jobs/run-job-with-input-message.md",tags:[],version:"current",lastUpdatedAt:1700332837,formattedLastUpdatedAt:"Nov 18, 2023",frontMatter:{layout:"default",title:"Run Job with Input Message"},sidebar:"docsSidebar",previous:{title:"Run Job with Input File",permalink:"/integration-platform-docs/docs/integration-manager/jobs/run-job-with-input-file"},next:{title:"Viewing Job Run History",permalink:"/integration-platform-docs/docs/integration-manager/jobs/viewing-job-run-history"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Step 1: Retrieve an Access Token",id:"step-1-retrieve-an-access-token",level:2},{value:"Step 2: Run Job with Message",id:"step-2-run-job-with-message",level:2},{value:"Step 3: Retrieve Job Output Message Body (if applicable)",id:"step-3-retrieve-job-output-message-body-if-applicable",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"run-job-with-input-message",children:"Run Job with Input Message"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"This service allows an API consumer to run an existing JobConfig with a text, json, or xml input message."}),"\n",(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"https://console.im.actiandatacloud.com/apidocs/#/Job%20Execution/runJobConfigWithMessage",children:"Open API Spec: Run Job with Input Message"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"step-1-retrieve-an-access-token",children:"Step 1: Retrieve an Access Token"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'REQUEST:\nPOST https://api.im.actiandatacloud.com/v2/api/login\nContent-Type: application/json\n\n{\n    "username": "[username]",\n    "password": "[password text]"\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'RESPONSE:\n200 OK\nContent-Type: application/json\n\n{\n    "access_token": [access token value],\n    "token_type": "bearer",\n    "refresh_token": [refresh token value],\n    "expires_in": 36000\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"step-2-run-job-with-message",children:"Step 2: Run Job with Message"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"REQUEST:\nPOST https://api.im.actiandatacloud.com/v2/api/jobconfigs/[jobconfig id]/listener?messagename=[input message name]&outmessagename=[output message name]\nAuthorization: Bearer [access token value]\nContent-Type: [text/plain | application/json | text/xml | application/xml]\n\n[message body]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'RESPONSE:\n202 Accepted\nContent-Type: application/json\n\n{\n    "id": "[job id]",\n    "status": "QUEUED",\n    "scheduled": "[job submitted timestamp]",\n    "jobConfig": {\n        "id": "[jobconfig id]"\n    }\n    "submittedByUser": {\n        "id": "[user id]"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"step-3-retrieve-job-output-message-body-if-applicable",children:"Step 3: Retrieve Job Output Message Body (if applicable)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"REQUEST:\nPOST https://api.im.actiandatacloud.com/v2/api/jobs/[job id]/out/[output message name]/text\nAuthorization: Bearer [access token value]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"RESPONSE:\n200 OK\nContent-Type: [text/plain | application/json | text/xml | application/xml]\n\n[message body]\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(7294);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
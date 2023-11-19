"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9827],{6252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(5893),a=t(1151),r=t(7628);const s={layout:"default",title:"Manual Agent Registration",nav_order:10,parent:"Advanced Topics"},o="Manual Agent Registration",c={id:"integration-agent/advanced-topics/manual-agent-registration",title:"Manual Agent Registration",description:"If you are having issues starting or registering a new or existing Agent installation, you can use Manual Agent Registration.",source:"@site/docs/integration-agent/advanced-topics/manual-agent-registration.md",sourceDirName:"integration-agent/advanced-topics",slug:"/integration-agent/advanced-topics/manual-agent-registration",permalink:"/docs/integration-agent/advanced-topics/manual-agent-registration",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/integration-platform-docs/tree/main/docs/integration-agent/advanced-topics/manual-agent-registration.md",tags:[],version:"current",lastUpdatedAt:1700393903,formattedLastUpdatedAt:"Nov 19, 2023",frontMatter:{layout:"default",title:"Manual Agent Registration",nav_order:10,parent:"Advanced Topics"},sidebar:"docsSidebar",previous:{title:"Configuration Files",permalink:"/docs/integration-agent/advanced-topics/configuration-files"},next:{title:"Retrieve Agent Credential",permalink:"/docs/integration-agent/advanced-topics/retrieve-agent-credential"}},l={},d=[{value:"Prerequisites:",id:"prerequisites",level:2},{value:"Step 1: Retrieve a User Code",id:"step-1-retrieve-a-user-code",level:2},{value:"Step 2: Activate Device Code",id:"step-2-activate-device-code",level:2},{value:"Step 3: Update the Agent",id:"step-3-update-the-agent",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"manual-agent-registration",children:"Manual Agent Registration"}),"\n",(0,i.jsx)(n.p,{children:"If you are having issues starting or registering a new or existing Agent installation, you can use Manual Agent Registration."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"DataCloud or Avalanche Subscription"}),"\n",(0,i.jsx)(n.li,{children:"Install Integration Agent 3.1.0 or later."}),"\n",(0,i.jsx)(n.li,{children:"Enable an API Password for the User registering the Agent."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-1-retrieve-a-user-code",children:"Step 1: Retrieve a User Code"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open browser"}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to: ",(0,i.jsx)(n.code,{children:"https://api.im.actiandatacloud.com/v2/api/device/code?client_id=integration-agent&host=[agent machine hostname]"}),(0,i.jsx)("br",{}),"\nwhere ",(0,i.jsx)(n.code,{children:"[agent machine hostname]"})," is the hostname of your agent."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Response:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "approved": false,\n    "user_code": "[user code]",\n    "hostname": "[agent hostname]",\n    "device_code": "[device code]",\n    "verification_uri_complete": "[verification uri complete]",\n    "client_id": "integration-agent",\n    "expires_in": 599,\n    "interval": 15,\n    "owner": {\n        "id": "[user id]",\n        "name": "[username]"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"step-2-activate-device-code",children:"Step 2: Activate Device Code"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Copy the url from Step 1 Response in [verification uri complete]"}),"\n",(0,i.jsx)(n.li,{children:"Paste in a new browser tab and click Enter"}),"\n",(0,i.jsx)(n.li,{children:"You will be asked to authenticate with Username and API Password (see Prerequisites)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Response:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# Integration Manager Connection Info\nim.base-url=[base url]\nim.client-id=[client id]\nim.client-secret=[client secret]\nim.device-code=[device code]\nim.user-code=[user code]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-3-update-the-agent",children:"Step 3: Update the Agent"}),"\n","\n","\n",(0,i.jsx)(r.ZP,{name:"update_the_agent"})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},7628:(e,n,t)=>{t.d(n,{ZP:()=>s});var i=t(5893),a=t(1151);function r(e){const n={li:"li",ol:"ol",...(0,a.a)(),...e.components};return(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Copy and paste connection info into /IntegrationAgent/conf/application.properties file. Make sure to delete/overwrite any existing im.* values that may be present. Duplicate entries will yield inconsistent results."}),"\n",(0,i.jsx)(n.li,{children:"Start/restart Agent. It will now register itself."}),"\n"]})}function s(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(7294);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
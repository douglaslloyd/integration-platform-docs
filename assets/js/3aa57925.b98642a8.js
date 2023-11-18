"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6897],{7805:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=i(5893),s=i(1151);const l={layout:"default",title:"Salesforce.com Outbound Messaging"},o="Salesforce.com Outbound Messaging API",a={id:"integration-manager/APIs/sfdc-outbound-messaging-api",title:"Salesforce.com Outbound Messaging",description:"Overview",source:"@site/docs/integration-manager/APIs/sfdc-outbound-messaging-api.md",sourceDirName:"integration-manager/APIs",slug:"/integration-manager/APIs/sfdc-outbound-messaging-api",permalink:"/integration-platform-docs/docs/integration-manager/APIs/sfdc-outbound-messaging-api",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/integration-platform-docs/tree/main/docs/integration-manager/APIs/sfdc-outbound-messaging-api.md",tags:[],version:"current",lastUpdatedAt:1700339310,formattedLastUpdatedAt:"Nov 18, 2023",frontMatter:{layout:"default",title:"Salesforce.com Outbound Messaging"},sidebar:"docsSidebar",previous:{title:"QuickStart API Tutorial",permalink:"/integration-platform-docs/docs/integration-manager/APIs/quickstart-api-tutorial"},next:{title:"Troubleshooting",permalink:"/integration-platform-docs/docs/integration-manager/server-troubleshooting"}},r={},d=[{value:"Overview",id:"overview",level:2},{value:"Step 1: Create a new Custom Setting",id:"step-1-create-a-new-custom-setting",level:2},{value:"Step 2: Create a new DataCloud User Credential",id:"step-2-create-a-new-datacloud-user-credential",level:2},{value:"Step 3: Create a new Workflow Rule and Outbound Message",id:"step-3-create-a-new-workflow-rule-and-outbound-message",level:2}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"salesforcecom-outbound-messaging-api",children:"Salesforce.com Outbound Messaging API"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"The Salesforce.com Outbound Messaging API securely and asynchronously processes outbound messages sent from your Salesforce.com organization."}),"\n",(0,t.jsx)(n.p,{children:"These outbound messages will execute a desired configuration and can pass any of the data contained within the OBM to your integration. Now, any time your workflow rule is triggered, an outbound message will be sent to DataCloud and your job configuration will execute. Of course, your integration needs to know what to do with the message!"}),"\n",(0,t.jsx)(n.p,{children:"You must have setup/configuration privileges within the Salesforce.com org, typically a System Administrator profile."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"You can monitor the messages in Salesforce by going to Setup > Administration Setup > Monitoring > Outbound Messages."})}),"\n",(0,t.jsx)(n.h2,{id:"step-1-create-a-new-custom-setting",children:"Step 1: Create a new Custom Setting"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Go to Setup > Develop > Custom Settings >"}),"\n",(0,t.jsxs)(n.li,{children:["Click New","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Label = DataCloud User Credential"}),"\n",(0,t.jsx)(n.li,{children:"Object Name = DataCloud_User_Credential"}),"\n",(0,t.jsx)(n.li,{children:"Setting Type = Hierarchy"}),"\n",(0,t.jsx)(n.li,{children:"Visibility = Public"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Click Save"}),"\n",(0,t.jsx)(n.li,{children:"Go to Custom Fields >"}),"\n",(0,t.jsxs)(n.li,{children:["Click New","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Data Type = Text"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Click Next","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Field Label = Username"}),"\n",(0,t.jsx)(n.li,{children:"Length = 120"}),"\n",(0,t.jsx)(n.li,{children:"Field Name = Username"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Click Next"}),"\n",(0,t.jsx)(n.li,{children:"Click Save & New"}),"\n",(0,t.jsx)(n.li,{children:"Go to Custom Fields >"}),"\n",(0,t.jsxs)(n.li,{children:["Click New","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Data Type = Text"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Click Next","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Field Label = Password"}),"\n",(0,t.jsx)(n.li,{children:"Length = 120"}),"\n",(0,t.jsx)(n.li,{children:"Field Name = Password"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Click Next"}),"\n",(0,t.jsx)(n.li,{children:"Click Save"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-2-create-a-new-datacloud-user-credential",children:"Step 2: Create a new DataCloud User Credential"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Go to Setup > Develop > Custom Settings >"}),"\n",(0,t.jsx)(n.li,{children:'Click Manage next to the "DataCloud User Credential" setting'}),"\n",(0,t.jsx)(n.li,{children:"Click New"}),"\n",(0,t.jsx)(n.li,{children:"Add the DataCloud username and password that the outbound message will use to authenticate"}),"\n",(0,t.jsx)(n.li,{children:"Click Save"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-3-create-a-new-workflow-rule-and-outbound-message",children:"Step 3: Create a new Workflow Rule and Outbound Message"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Go to Setup > Create > Workflow & Approvals > Workflow Rules >"}),"\n",(0,t.jsx)(n.li,{children:"Click New Rule"}),"\n",(0,t.jsxs)(n.li,{children:["Set up your Workflow Rule:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Name"}),"\n",(0,t.jsx)(n.li,{children:"Evaluation Criteria"}),"\n",(0,t.jsx)(n.li,{children:"Rule Criteria"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Click Save & Next"}),"\n",(0,t.jsx)(n.li,{children:"Click Add Workflow Action > New Outbound Message"}),"\n",(0,t.jsxs)(n.li,{children:["Set up your Outbound Message:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Name"}),"\n",(0,t.jsx)(n.li,{children:"Unique Name"}),"\n",(0,t.jsxs)(n.li,{children:["Endpoint (e.g., ",(0,t.jsx)(n.a,{href:"https://api.im.actiandatacloud.com/v2/api/jobconfigs/%5Bjobconfig",children:"https://api.im.actiandatacloud.com/v2/api/jobconfigs/[jobconfig"})," id]/sfdc/obm)"]}),"\n",(0,t.jsx)(n.li,{children:"[Salesforce.com] User to send as"}),"\n",(0,t.jsx)(n.li,{children:"Send Session ID = true"}),"\n",(0,t.jsxs)(n.li,{children:["Object fields to send (These fields will be available as an XML DJMessage object within your integration.)\n",(0,t.jsx)(n.img,{src:i(6078).Z+"",width:"762",height:"529"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Click Save (Outbound Message)"}),"\n",(0,t.jsx)(n.li,{children:"Click Done (Outbound Message)"}),"\n",(0,t.jsx)(n.li,{children:"Click Activate (Workflow Rule)"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},6078:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/sfdc-outbound-messaging-api-1-c25f120a282f7e53bd03a120065b39cd.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(7294);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
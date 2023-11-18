"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5070],{1629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(5893),r=n(1151);const o={layout:"default",title:"Aggregator Service",tags:["Content Issues"]},a="Aggregator Service",s={id:"integration-manager/aggregator-service",title:"Aggregator Service",description:"Ths topic needs more intoduction. It isn't clear how this fits into the Integration Manager.*",source:"@site/docs/integration-manager/aggregator-service.md",sourceDirName:"integration-manager",slug:"/integration-manager/aggregator-service",permalink:"/integration-platform-docs/docs/integration-manager/aggregator-service",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/IntegrationPlatform/tree/main/docs/integration-manager/aggregator-service.md",tags:[{label:"Content Issues",permalink:"/integration-platform-docs/docs/tags/content-issues"}],version:"current",frontMatter:{layout:"default",title:"Aggregator Service",tags:["Content Issues"]},sidebar:"docsSidebar",previous:{title:"Integration Engines",permalink:"/integration-platform-docs/docs/integration-manager/server-administration/integration-engines"},next:{title:"Local Folder Listener",permalink:"/integration-platform-docs/docs/integration-manager/file-folder-listener/local-folder-listener"}},g={},d=[{value:"Overview",id:"overview",level:2},{value:"Aggregator Configuration",id:"aggregator-configuration",level:2},{value:"Properties",id:"properties",level:2},{value:"Text Record Aggregation Example",id:"text-record-aggregation-example",level:2},{value:"JSON Aggregation Example",id:"json-aggregation-example",level:2},{value:"XML Aggregation Example",id:"xml-aggregation-example",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"aggregator-service",children:"Aggregator Service"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)("font",{color:"red",children:"Ths topic needs more intoduction. It isn't clear how this fits into the Integration Manager."})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)("font",{color:"red",children:"Need to determine where this topic should reside in the sidebar, and whether it should be part of a category with other related topics. For example, should this live under Advanced Topics?"})})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Messages can be submitted to POST: [server base url]/api/aggregators?type=jobconfigs&id=[entity id]. These messages will be aggregated according to the corresponding entry in aggregator-config.yml. When the number of messages received equals completion-size, or the completion-timeout is reached after the last message is received, then the aggregated message will be submitted to [server base url]/api/jobconfigs/[entity id]/listener. The aggregated message can be accessed through djmessage 'msg1' within the dataconnect process."}),"\n",(0,i.jsx)(t.h2,{id:"aggregator-configuration",children:"Aggregator Configuration"}),"\n",(0,i.jsx)(t.p,{children:"Note that the File Folder Listener Service must be restarted for any configuration changes to take effect. Make sure you have already completed: File Folder Listener Authorization"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"aggregator-config.yml"}),"\n(ProgramDataDirectory)/Actian/IntegrationManager/conf/aggregator-config.yml"]}),"\n",(0,i.jsx)(t.p,{children:"NOTE: indentation is critical for YAML syntax!"}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"aggregators:\n  - name: Aggregator-Config-xml\n    entity-id: 21\n    entity-type: jobconfig\n    account-id: 1\n    active: true\n    completion-size: 5\n    completion-timeout: 5000\n    data-type: xml\n  - name: Aggregator-Config-json\n    entity-id: 22\n    entity-type: jobconfig\n    account-id: 1\n    active: true\n    completion-size: 5\n    completion-timeout: 5000\n    data-type: json\n  - name: Aggregator-Config-record\n    entity-id: 23\n    entity-type: jobconfig\n    account-id: 1\n    active: true\n    completion-size: 5\n    completion-timeout: 5000\n    data-type: record\n"})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"name"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A unique identifier for the aggregator."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"entity-type"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The entity type for the aggregator. Valid types (case-sensitive): jobconfig"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"entity-id"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The Job Configuration id to run in Integration Manager."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"active"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"true"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Whether or not this aggregator is active."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"account-id"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Account ID that owns the entity."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"completion-size"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"200"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The number of messages to aggregate before submitting the aggregated message to the listener API"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"completion-timeout"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"10000"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The amount of time (in millisenconds) to wait after receiving the last message before submitting the aggregated message to the listener API"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"data-type"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The data type for the submitted message to the aggregator API. This determines how the messages are aggregated. Valid types (case-sensitive): record, xml, json"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"text-record-aggregation-example",children:"Text Record Aggregation Example"}),"\n",(0,i.jsx)(t.p,{children:"Example JSON message/event:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'POST /api/aggregators?type=jobconfig&id=22\nAuthorization: Bearer [bearer token value]\nContent-Type: text/plain\n \n"Tove","Jani","Reminder","Don\'t forget me this weekend!"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Example JSON aggregated batch message:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'"Tove","Jani","Reminder","Don\'t forget me this weekend!"\n"Tove","Jani","Reminder","Don\'t forget me this weekend!"\n"Tove","Jani","Reminder","Don\'t forget me this weekend!"\n"Tove","Jani","Reminder","Don\'t forget me this weekend!"\n"Tove","Jani","Reminder","Don\'t forget me this weekend!"\n'})}),"\n",(0,i.jsx)(t.h2,{id:"json-aggregation-example",children:"JSON Aggregation Example"}),"\n",(0,i.jsx)(t.p,{children:"Example JSON message/event:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'POST /api/aggregators?type=jobconfig&id=22\nAuthorization: Bearer [bearer token value]\nContent-Type: text/plain\n \n{\n   "to": "Tove",\n   "from": "Jani",\n   "heading": "Reminder",\n   "body": "Don\'t forget me this weekend!"\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Example JSON aggregated batch message:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'[\n   {\n      "to": "Tove",\n      "from": "Jani",\n      "heading": "Reminder",\n      "body": "Don\'t forget me this weekend!"\n   },{\n      "to": "Tove",\n      "from": "Jani",\n      "heading": "Reminder",\n      "body": "Don\'t forget me this weekend!"\n   },{\n      "to": "Tove",\n      "from": "Jani",\n      "heading": "Reminder",\n      "body": "Don\'t forget me this weekend!"\n   },{\n      "to": "Tove",\n      "from": "Jani",\n      "heading": "Reminder",\n      "body": "Don\'t forget me this weekend!"\n   },{\n      "to": "Tove",\n      "from": "Jani",\n      "heading": "Reminder",\n      "body": "Don\'t forget me this weekend!"\n   }\n]\n'})}),"\n",(0,i.jsx)(t.h2,{id:"xml-aggregation-example",children:"XML Aggregation Example"}),"\n",(0,i.jsx)(t.p,{children:"Example XML message/event:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"POST /api/aggregators?type=jobconfig&id=22\nAuthorization: Bearer [bearer token value]\nContent-Type: text/plain\n \n<note>\n    <to>Tove</to>\n    <from>Jani</from>\n    <heading>Reminder</heading>\n    <body>Don't forget me this weekend!</body>\n</note>\n"})}),"\n",(0,i.jsx)(t.p,{children:"Example XML aggregated batch message:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"<items type=\"array\">\n    <note>\n        <to>Tove</to>\n        <from>Jani</from>\n        <heading>Reminder</heading>\n        <body>Don't forget me this weekend!</body>\n    </note><note>\n        <to>Tove</to>\n        <from>Jani</from>\n        <heading>Reminder</heading>\n        <body>Don't forget me this weekend!</body>\n    </note><note>\n        <to>Tove</to>\n        <from>Jani</from>\n        <heading>Reminder</heading>\n        <body>Don't forget me this weekend!</body>\n    </note><note>\n        <to>Tove</to>\n        <from>Jani</from>\n        <heading>Reminder</heading>\n        <body>Don't forget me this weekend!</body>\n    </note><note>\n        <to>Tove</to>\n        <from>Jani</from>\n        <heading>Reminder</heading>\n        <body>Don't forget me this weekend!</body>\n    </note>\n</items>\n"})})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var i=n(7294);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2457],{7202:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(5893),l=n(1151);const s={title:"Configuration Files",hide_table_of_contents:!0},r="Configuration Files",o={id:"integration-agent/advanced-topics/configuration-files",title:"Configuration Files",description:"Most Agent properties are set automatically and do not require maintenance or modification. In some cases, the default settings must be changed for various environment-specific reasons or corporate protocols. This section is a reference for making such changes, if required.",source:"@site/docs/integration-agent/advanced-topics/configuration-files.md",sourceDirName:"integration-agent/advanced-topics",slug:"/integration-agent/advanced-topics/configuration-files",permalink:"/docs/integration-agent/advanced-topics/configuration-files",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/integration-platform-docs/tree/main/docs/integration-agent/advanced-topics/configuration-files.md",tags:[],version:"current",lastUpdatedAt:1700393903,formattedLastUpdatedAt:"Nov 19, 2023",frontMatter:{title:"Configuration Files",hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Connecting to MS SQL Server",permalink:"/docs/integration-agent/on-prem-data/connecting-to-ms-sql-server"},next:{title:"Manual Agent Registration",permalink:"/docs/integration-agent/advanced-topics/manual-agent-registration"}},a={},d=[{value:"Main Application Configuration",id:"main-application-configuration",level:2}];function c(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"configuration-files",children:"Configuration Files"}),"\n",(0,i.jsx)(e.p,{children:"Most Agent properties are set automatically and do not require maintenance or modification. In some cases, the default settings must be changed for various environment-specific reasons or corporate protocols. This section is a reference for making such changes, if required."}),"\n",(0,i.jsx)(e.h2,{id:"main-application-configuration",children:"Main Application Configuration"}),"\n",(0,i.jsx)(e.p,{children:"These properties are found in: shared_data_path\\conf\\application.properties"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"sharedDataPath"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated during installation. Do not modify."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Determined at Installation"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"installPath"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated during installation. Do not modify."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Determined at Installation"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"logging.level. com.actian.datacloud"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"This property can be added to enhance Agent-specific logging for debug purposes, for example, set to DEBUG."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"INFO"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"agent.auth-server"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Actian ID Service URL. Set for DataCloud and Avalanche production environments. Note: You must update this property for Private Cloud/Kubernetes hosted environments."}),(0,i.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,i.jsx)(e.a,{href:"https://api.aop.aws",children:"https://api.aop.aws"}),". actiandatacloud.com"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"agent.control-server"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Integration Manager API URL. Set for DataCloud and Avalanche production environments. Note: You must update this property for Private Cloud/Kubernetes hosted environments."}),(0,i.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,i.jsx)(e.a,{href:"https://api.im",children:"https://api.im"}),". actiandatacloud.com/v2"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"agent.identity-provider"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated automatically. Do not modify."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"agent.refresh-token"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated automatically. Do not modify."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"worker.api.port"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated during installation. Port used for Agent to Worker communication. If changed, you must also change server.port in shared_data_path\\conf\\worker-application.properties to match."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"6000"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"worker.concurrency"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Number of DataConnect engines allowed to run in parallel. Make sure the appropriate licensing is in place before changing this value to avoid compliance issues."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"1"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"worker.destinationId"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated automatically. Do not modify."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"\u2014"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"worker.embedded"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated automatically. Do not modify."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"false"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"worker.engineJavaHome"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated during installation. Controls the JVM used when launching DataConnect. JDK 11 or higher is required."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:(0,i.jsx)(e.code,{children:"${sharedDataPath}/di- standalone-engine/jre"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"worker.libraryPath"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated during installation. Do not modify."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:(0,i.jsx)(e.code,{children:"${installPath}/lib"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"worker.workerLocalDir"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated during installation. Controls where temporary job information is stored, for example, integration artifacts, logfiles."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:(0,i.jsx)(e.code,{children:"${sharedDataPath}/local"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"engine.licensePath"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated automatically. Do not modify."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:(0,i.jsx)(e.code,{children:"${sharedDataPath}/license/cosmos.slc"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"engine.iniFilePath"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated automatically. Do not modify."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:(0,i.jsx)(e.code,{children:"${sharedDataPath}/conf/cosmos.ini"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"engine.localEngineInstallPath"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated during installation. Controls the location of the DataConnect Engine."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:(0,i.jsx)(e.code,{children:"${sharedDataPath}/di- standalone-engine/runtime/di9"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"engine.localEngineListenerPort"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated during installation. Port used for Worker-to-DataConnect Engine communication."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"5999"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"These properties are found in: shared_data_path\\conf\\worker-application.properties:"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"server.port"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated during installation. Port used for Agent-to-Worker communication.If changed, you must also change worker.api. port in shared_data_path\\conf\\application.properties to match."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"6000"})]})})]}),"\n",(0,i.jsx)(e.p,{children:"These properties are found in: shared_data_path\\conf\\worker-control.properties:"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Default Value"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"sharedDataPath"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated during installation. Do not modify."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Determined at Installation"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"server.port"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Populated during installation. Port used for Agent application container."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"6001"})]})]})]})]})}function h(t={}){const{wrapper:e}={...(0,l.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(c,{...t})}):c(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>r});var i=n(7294);const l={},s=i.createContext(l);function r(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:r(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);
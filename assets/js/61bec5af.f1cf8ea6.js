"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3874],{5235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(5893),a=t(1151);const o={layout:"default",title:"DataFlow Job Configs"},r="DataFlow Job Configs",s={id:"integration-manager/advanced-topics/dataflow-usage",title:"DataFlow Job Configs",description:"Overview",source:"@site/docs/integration-manager/advanced-topics/dataflow-usage.md",sourceDirName:"integration-manager/advanced-topics",slug:"/integration-manager/advanced-topics/dataflow-usage",permalink:"/integration-platform-docs/docs/integration-manager/advanced-topics/dataflow-usage",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/IntegrationPlatform/tree/main/docs/integration-manager/advanced-topics/dataflow-usage.md",tags:[],version:"current",frontMatter:{layout:"default",title:"DataFlow Job Configs"},sidebar:"tutorialSidebar",previous:{title:"Accessing the Integration Managert",permalink:"/integration-platform-docs/docs/integration-manager/accessing-the-integration-manager"},next:{title:"Serialized Job Queues",permalink:"/integration-platform-docs/docs/integration-manager/advanced-topics/serialized-job-queues"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"How it Works",id:"how-it-works",level:2},{value:"RushScript (.js) Setup",id:"rushscript-js-setup",level:2},{value:"JSON Graph (.json) Setup",id:"json-graph-json-setup",level:2},{value:"Java Application (.jar) Setup",id:"java-application-jar-setup",level:2},{value:"Prerequisites",id:"prerequisites",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"dataflow-job-configs",children:"DataFlow Job Configs"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"DataFlow applications can be configured, scheduled, and executed using Integration Manager if you have an active DataFlow license or subscription."}),"\n",(0,i.jsx)(n.p,{children:"For convenience, DataFlow 8.0 is embedded within Integration Manager powered by DataCloud."}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How it Works"}),"\n",(0,i.jsxs)(n.p,{children:["Integration Manager uses the dr command line interface to execute DataFlow applications. Before creating any DataFlow configurations, you should familiarize yourself with the dr interface concepts. You can learn more about these concepts at ",(0,i.jsx)(n.a,{href:"https://docs.actian.com/dataflow/7.0/#page/TroubleshootingRef%2FUsing_dr.htm%23",children:"https://docs.actian.com/dataflow/7.0/#page/TroubleshootingRef%2FUsing_dr.htm%23"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Three DataFlow application types are supported:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"RushScript (.js)"}),"\n",(0,i.jsx)(n.li,{children:"JSON Graph (.json)"}),"\n",(0,i.jsx)(n.li,{children:"Java Application (.jar)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about creating DataFlow applications, see ",(0,i.jsx)(n.a,{href:"https://docs.actian.com/dataflow/8.0/",children:"https://docs.actian.com/dataflow/8.0/"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"rushscript-js-setup",children:"RushScript (.js) Setup"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a new Job Config."}),"\n",(0,i.jsx)(n.li,{children:"Upload your RushScript as the package (must have .js extension)."}),"\n",(0,i.jsx)(n.li,{children:'Optionally upload additional scripts or other files to the Files section, which will be injected using the "--includedir" command line option.'}),"\n",(0,i.jsx)(n.li,{children:'Optionally add entries to the Macros section, which will be injected using the "--variable" command line option. Note that the macro value text will be escaped accordingly when the command is constructed.'}),"\n",(0,i.jsxs)(n.li,{children:["You can also take advantage of 2 special Integration Manager variables within your macro values:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"$(LOCAL_JOB_SPEC_DIR) - This will resolve to the runtime working directory where your RushScript and additional files are located."}),"\n",(0,i.jsxs)(n.li,{children:["$(LOCAL_JOB_OUT_DIR) - This will resolve to the runtime output directory if you need to retrieve output files. Any files written to this location will be available at: ",(0,i.jsx)(n.code,{children:"{api_url}/jobs/{job-id}/out"})," after the job has completed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"json-graph-json-setup",children:"JSON Graph (.json) Setup"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a new Job Config."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Upload your Json Graph as the package (must have .json extension)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Optionally upload a properties file named "override.properties" to the Files section, which will be injected using the "--overridefile" command line option.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Optionally add entries to the Macros section, which will be injected using the "--override" command line option. Each macro can only override an operator within the graph, and MUST use the convention of'}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["MacroName=<",(0,i.jsx)("code",{children:"operatorName.operatorProperty"}),"> and",(0,i.jsx)(n.br,{}),"\n","MacroValue=<",(0,i.jsx)("code",{children:"overrideTextValue"}),">."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Note that the macro value   text will be escaped accordingly when the command is constructed.\n5. You can also take advantage of 2 special Integration Manager variables within your macro values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"$(LOCAL_JOB_SPEC_DIR) - This will resolve to the runtime working directory where your RushScript and additional files are located."}),"\n",(0,i.jsxs)(n.li,{children:["$(LOCAL_JOB_OUT_DIR) - This will resolve to the runtime output directory if you need to retrieve output files. Any files written to this location will be available at: ",(0,i.jsx)(n.code,{children:"{api_url}/jobs/{job-id}/out"})," after the job has completed."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"java-application-jar-setup",children:"Java Application (.jar) Setup"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a new Job Config."}),"\n",(0,i.jsx)(n.li,{children:"Upload your Java Application .jar file as the package."}),"\n",(0,i.jsx)(n.li,{children:"Type in the fully qualified main class within the jar as the entry point, e.g. com.foo.bar.MainClass, not MainClass."}),"\n",(0,i.jsx)(n.li,{children:"Optionally add entries to the Macros section, which will be injected as an environment variable to the JVM. Note that the macro value text will be escaped accordingly when the command is constructed."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"DataCloud subscribers have access to DataFlow out-of-box without additional configuration."}),"\n",(0,i.jsx)(n.p,{children:"On-premise and VPC deployments of Integration Manager may require additional setup, see Server Admin > Dataflow Properties."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(7294);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
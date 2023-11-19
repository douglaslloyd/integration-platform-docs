"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5521],{9042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(5893),r=n(1151);const o={layout:"default",title:"Agent File Folder Listener",nav_order:101,has_children:!0},s="File Folder Listener",a={id:"integration-agent/agent-file-folder-listener",title:"Agent File Folder Listener",description:"Overview",source:"@site/docs/integration-agent/agent-file-folder-listener.md",sourceDirName:"integration-agent",slug:"/integration-agent/agent-file-folder-listener",permalink:"/docs/integration-agent/agent-file-folder-listener",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/integration-platform-docs/tree/main/docs/integration-agent/agent-file-folder-listener.md",tags:[],version:"current",lastUpdatedAt:1700393903,formattedLastUpdatedAt:"Nov 19, 2023",frontMatter:{layout:"default",title:"Agent File Folder Listener",nav_order:101,has_children:!0}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Basic Configuration",id:"basic-configuration",level:2},{value:"Listener Folder Advanced Configuration",id:"listener-folder-advanced-configuration",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"file-folder-listener",children:"File Folder Listener"}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"This mimics the File Folder Listener from Integration Manager.\nThe File Folder Listener Service is used to monitor file directories and/or cloud storage buckets/containers for new files. When a new file appears (matching your include/exclude criteria), the associated listener will submit the file to a Job Configuration."}),"\n",(0,i.jsx)(t.h2,{id:"basic-configuration",children:"Basic Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["These properties are located in (ProgramDataDirectory)/Actian/FileFolderListener/conf/application.properties ",(0,i.jsx)(t.strong,{children:"OR"}),"\n/etc/opt/actian/integration-agent/conf/listeners.yml (Linux)."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"}),"\nThese directories have automatic clean-out functionality and can flush out the system boot files, so make sure they are isolated from your system folders/files."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"#The folder where backups of successfully submitted files will be stored.\nlistener.backup-directory= /etc/opt/actian/integration-agent/listener/backup/\n\n#The folder where failed files will be stored, e.g. Exceeded max size, service not running, etc...\nlistener.error-directory= /etc/opt/actian/integration-agent/listener/error/\n"})}),"\n",(0,i.jsx)(t.h2,{id:"listener-folder-advanced-configuration",children:"Listener Folder Advanced Configuration"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"listener.retain-backup-files=true &nbsp;#Set this to false to not retain backup files. Error files will still be saved.\nlistener.backup-directory-max-file-age=7 &nbsp;#How long backup files are retained in day(s).\nlistener.error-directory-max-file-age=14 &nbsp;#How long error files are retained in day(s).\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(7294);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
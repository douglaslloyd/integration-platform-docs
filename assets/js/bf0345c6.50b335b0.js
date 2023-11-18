"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4864],{1349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(5893),i=n(1151);const s={layout:"default",title:"Azure Blob Storage Listener"},l="Azure Blob Storage Listener",o={id:"integration-manager/file-folder-listener/azure-blob-storage-listener",title:"Azure Blob Storage Listener",description:"Overview",source:"@site/docs/integration-manager/file-folder-listener/azure-blob-storage-listener.md",sourceDirName:"integration-manager/file-folder-listener",slug:"/integration-manager/file-folder-listener/azure-blob-storage-listener",permalink:"/integration-platform-docs/docs/integration-manager/file-folder-listener/azure-blob-storage-listener",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/integration-platform-docs/tree/main/docs/integration-manager/file-folder-listener/azure-blob-storage-listener.md",tags:[],version:"current",lastUpdatedAt:1700332837,formattedLastUpdatedAt:"Nov 18, 2023",frontMatter:{layout:"default",title:"Azure Blob Storage Listener"},sidebar:"docsSidebar",previous:{title:"AWS S3 Bucket Listener",permalink:"/integration-platform-docs/docs/integration-manager/file-folder-listener/aws-s3-bucket-listener"},next:{title:"Google Cloud Storage Listener",permalink:"/integration-platform-docs/docs/integration-manager/file-folder-listener/google-cloud-storage-listener"}},a={},c=[{value:"Overview",id:"overview",level:2},{value:"Add Blob Storage Permissions",id:"add-blob-storage-permissions",level:2},{value:"Listener Configuration",id:"listener-configuration",level:2},{value:"Properties",id:"properties",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"azure-blob-storage-listener",children:"Azure Blob Storage Listener"}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"The Azure Blob Storage Listener monitors Blob containers for files and will execute a pre-defined Job Configuration (config-id) when triggered."}),"\n",(0,r.jsx)(t.h2,{id:"add-blob-storage-permissions",children:"Add Blob Storage Permissions"}),"\n",(0,r.jsxs)(t.p,{children:["For more information on how to create/obtain this key, see ",(0,r.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=azure-portal#view-account-access-keys",children:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=azure-portal#view-account-access-keys"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"application.properties"})}),"\n",(0,r.jsx)(t.p,{children:"(ProgramDataDirectory)/Actian/FileFolderListener/conf/application.properties"}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"# Azure Connection Info\nazure.blob.accesskey=EXAMPLEKEYVALUENefMtV50Sp7o7dW2GhKeZQWUce6z6nTb/gylpzsq5m5UEUcgB2QqxlDgEXAMPLEKEYVALUE== \n"})}),"\n",(0,r.jsx)(t.h2,{id:"listener-configuration",children:"Listener Configuration"}),"\n",(0,r.jsx)(t.p,{children:"Note that the File Folder Listener Service must be restarted for any configuration changes to take effect. Make sure you have already completed: File Folder Listener Authorization"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"listeners.yml"}),"\n(ProgramDataDirectory)/Actian/FileFolderListener/conf/listeners.yml"]}),"\n",(0,r.jsx)(t.p,{children:"NOTE: indentation is critical for YAML syntax!"}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"listeners:   \n  - id: azure-container-listener-accounts     \n    config-id: 90378\n    listener-type: azure\n    active: true\n    storage-account-name: my-azure-storage-account\n    source-container-name: my-accounts-container\n    include-pattern: ^Accounts.*\n    filename-override: Accounts.txt\n  - id: azure-container-listener-contacts\n    config-id: 90379\n    listener-type: azure\n    active: true\n    storage-account-name: my-azure-storage-account\n    source-container-name: my-contacts-container \n    source-file-prefix: Contacts\n    filename-override: Contacts.txt\n"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.p,{children:'NOTE: "include-pattern" preempts "source-file-prefix"'}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"id"}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"A unique identifier for the listener."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"listener-type"}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Available listener types: local, aws, gcp, azure."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"config-id"}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"The Job Configuration id to run in Integration Manager."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"active"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"true"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Whether or not this listener is active."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"storage-account-name"}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"The Azure storage account name."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"source-container-name"}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"The Azure blob container name to monitor for new files."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"include-pattern"}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Includes files if the file name matches the regular expression pattern you specify. See ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet",children:"Cheatsheet"}),", ",(0,r.jsx)(t.a,{href:"https://www.regexpal.com/",children:"RegexPal"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"source-file-prefix"}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Includes files if the file name matches the prefix pattern (i.e. file name starts with) you specify. Ex: Accounts (equivalent to regex: ^Accounts.*) matches Accounts.txt, Accounts.csv, Accounts_1.txt, etc..."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"filename-override"}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"This value will override the filename passed to Integration Manager, regardless of the original source file name. The original source file name will always be used for backup and error files."})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var r=n(7294);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[630],{5284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=n(5893),r=n(1151);const s={layout:"default",title:"AWS S3 Bucket Listener"},l="AWS S3 Bucket Listener",o={id:"integration-manager/file-folder-listener/aws-s3-bucket-listener",title:"AWS S3 Bucket Listener",description:"Overview",source:"@site/docs/integration-manager/file-folder-listener/aws-s3-bucket-listener.md",sourceDirName:"integration-manager/file-folder-listener",slug:"/integration-manager/file-folder-listener/aws-s3-bucket-listener",permalink:"/integration-platform-docs/docs/integration-manager/file-folder-listener/aws-s3-bucket-listener",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/IntegrationPlatform/tree/main/docs/integration-manager/file-folder-listener/aws-s3-bucket-listener.md",tags:[],version:"current",frontMatter:{layout:"default",title:"AWS S3 Bucket Listener"},sidebar:"docsSidebar",previous:{title:"Local Folder Listener",permalink:"/integration-platform-docs/docs/integration-manager/file-folder-listener/local-folder-listener"},next:{title:"Azure Blob Storage Listener",permalink:"/integration-platform-docs/docs/integration-manager/file-folder-listener/azure-blob-storage-listener"}},c={},a=[{value:"Overview",id:"overview",level:2},{value:"Add Bucket Permissions",id:"add-bucket-permissions",level:2},{value:"Listener Configuration",id:"listener-configuration",level:2},{value:"Properties",id:"properties",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"aws-s3-bucket-listener",children:"AWS S3 Bucket Listener"}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"The AWS S3 Bucket Listener monitors S3 buckets for files and will execute a pre-defined Job Configuration (config-id) when triggered."}),"\n",(0,i.jsx)(t.h2,{id:"add-bucket-permissions",children:"Add Bucket Permissions"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"application.properties"}),"\n(ProgramDataDirectory)/Actian/FileFolderListener/conf/application.properties"]}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"# AWS S3 Connection Info\naws.s3.accesskey=AKIAIOSFODNN7EXAMPLE \naws.s3.secretkey=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n"})}),"\n",(0,i.jsx)(t.h2,{id:"listener-configuration",children:"Listener Configuration"}),"\n",(0,i.jsx)(t.p,{children:"Note that the File Folder Listener Service must be restarted for any configuration changes to take effect. Make sure you have already completed: File Folder Listener Authorization"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"listeners.yml"}),"\n(ProgramDataDirectory)/Actian/FileFolderListener/conf/listeners.yml"]}),"\n",(0,i.jsx)(t.p,{children:"NOTE: indentation is critical for YAML syntax!"}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"listeners:   \n  - id: aws-bucket-listener-accounts\n    config-id: 90378\n    listener-type: aws\n    active: true\n    source-bucket-name: listener-bucket-us-east-1-accounts\n    source-bucket-region: us-east-1\n    source-file-prefix: Accounts\n\tfilename-override: Accounts.txt \n  - id: aws-bucket-listener-contacts\n    config-id: 90379\n    listener-type: aws\n    active: true\n    source-bucket-name: listener-bucket-us-east-1-contacts\n    source-bucket-region: us-east-1\n    source-file-prefix: Contacts \n\tfilename-override: Contacts.txt\n"})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"id"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A unique identifier for the listener."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"listener-type"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available listener types: local, aws, gcp, azure."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"config-id"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The Job Configuration id to run in Integration Manager."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"active"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"true"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Whether or not this listener is active."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"source-bucket-name"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The S3 bucket name to monitor for new files."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"source-bucket-region"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Region of the S3 bucket (Note that AWS S3 region codes are slightly different from GCP)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"include-pattern"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"IGNORED. NOT SUPPORTED FOR THIS LISTENER."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"source-file-prefix"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Includes files if the file name matches the prefix pattern (i.e. file name starts with) you specify. Ex: Accounts (equivalent to regex: ^Accounts.*) matches Accounts.txt, Accounts.csv, Accounts_1.txt, etc..."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"filename-override"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"This value will override the filename passed to Integration Manager, regardless of the original source file name. The original source file name will always be used for backup and error files."})]})]})]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var i=n(7294);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
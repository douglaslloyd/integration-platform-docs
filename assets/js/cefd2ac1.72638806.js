"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6277],{1588:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=r(5893),n=r(1151);const a={layout:"default",title:"Enabling HTTPS"},s="Enabling HTTPS",o={id:"integration-manager/server-administration/security-enabling-https",title:"Enabling HTTPS",description:"Using HTTPS is always recommended. API tokens, credentials, and payloads are subject to hijack otherwise.",source:"@site/docs/integration-manager/server-administration/security-enabling-https.md",sourceDirName:"integration-manager/server-administration",slug:"/integration-manager/server-administration/security-enabling-https",permalink:"/integration-platform-docs/docs/integration-manager/server-administration/security-enabling-https",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/integration-platform-docs/tree/main/docs/integration-manager/server-administration/security-enabling-https.md",tags:[],version:"current",lastUpdatedAt:1700332837,formattedLastUpdatedAt:"Nov 18, 2023",frontMatter:{layout:"default",title:"Enabling HTTPS"},sidebar:"docsSidebar",previous:{title:"JobConfig Aliasing",permalink:"/integration-platform-docs/docs/integration-manager/access-control/jobconfig-aliasing"},next:{title:"Encryption-at-Rest",permalink:"/integration-platform-docs/docs/integration-manager/server-administration/security-encryption-at-rest"}},c={},l=[{value:"In general, SSL certificates have 2 functions:",id:"in-general-ssl-certificates-have-2-functions",level:3},{value:"There are 2 types of SSL certificates:",id:"there-are-2-types-of-ssl-certificates",level:3},{value:"Step 1: Create Keystore/Import Certificate",id:"step-1-create-keystoreimport-certificate",level:2},{value:"Option A: How to Create and Import a CA-Signed Certificate",id:"option-a-how-to-create-and-import-a-ca-signed-certificate",level:3},{value:"Wait for your new certificate to arrive...",id:"wait-for-your-new-certificate-to-arrive",level:3},{value:"Option B: How to Create and Import a Self-Signed Certificate",id:"option-b-how-to-create-and-import-a-self-signed-certificate",level:3},{value:"Step 2: Configure Integration Manager",id:"step-2-configure-integration-manager",level:2},{value:"Step 3: Import Your Certificates into Java jre/lib/security/cacerts",id:"step-3-import-your-certificates-into-java-jrelibsecuritycacerts",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"enabling-https",children:"Enabling HTTPS"}),"\n",(0,i.jsxs)(t.admonition,{title:"IMPORTANT!",type:"danger",children:[(0,i.jsx)(t.p,{children:"Using HTTPS is always recommended. API tokens, credentials, and payloads are subject to hijack otherwise."}),(0,i.jsx)(t.p,{children:"HTTPS is always enabled and enforced for Integration Manager powered by DataCloud (SaaS and VPC)."})]}),"\n",(0,i.jsx)(t.p,{children:"HTTPS encryption is configured using a Keystore file (which contains one or more SSL certificates)."}),"\n",(0,i.jsx)(t.h3,{id:"in-general-ssl-certificates-have-2-functions",children:"In general, SSL certificates have 2 functions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"encryption"}),"\n",(0,i.jsx)(t.li,{children:"authenticate the identity of the certificate\u2019s owner"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"there-are-2-types-of-ssl-certificates",children:"There are 2 types of SSL certificates:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"CA-Signed:"})," When you purchase a CA-Signed certificate, you\u2019re required to undergo a validation process that confirms key identifying information. A CA-Signed certificate is trusted by every browser or device that trusts the certificate authority. Certificate authorities are required to undergo regular audits and must comply with a strict set of guidelines to be trusted."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Self-Signed:"})," When you sign a certificate yourself, you\u2019re not performing the requisite validation. Browsers have been designed to NOT trust certificates by default. Use of a self-signed certificate will generate a browser error for any attempt to access over HTTPS. Self-signed certificates are only appropriate for testing environments and non-public networks."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-1-create-keystoreimport-certificate",children:"Step 1: Create Keystore/Import Certificate"}),"\n",(0,i.jsxs)(t.p,{children:["Note that either keytool or OpenSSL tools can be used to generate, import, and manage certificates from the command line. For OpenSSL certificate instructions, see ",(0,i.jsx)(t.a,{href:"https://www.openssl.org/",children:"https://www.openssl.org/"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"option-a-how-to-create-and-import-a-ca-signed-certificate",children:"Option A: How to Create and Import a CA-Signed Certificate"}),"\n",(0,i.jsx)(t.p,{children:"Open a command console and change directory to the JRE bin folder."}),"\n",(0,i.jsx)(t.p,{children:'Create a new keystore file using Java keytool. You can use whatever alias and filename you choose. For illustration purposes, we are using "integration-manager" and "keystore.p12", respectively.'}),"\n",(0,i.jsx)(t.p,{children:"Then, create a certificate signing request file using your newly created keystore."}),"\n",(0,i.jsx)("code",{children:(0,i.jsx)(t.p,{children:"cd (ProgramData)/Actian/IntegrationManager/jre/bin\nkeytool -genkey -alias integration-manager -keyalg RSA -keystore keystore.p12\nkeytool -certreq -alias integration-manager -keyalg RSA -file certificate-signing-request.txt -keystore keystore.p12"})}),"\n",(0,i.jsx)(t.p,{children:"Send the certificate request to the Certificate Authority you are using."}),"\n",(0,i.jsx)(t.h3,{id:"wait-for-your-new-certificate-to-arrive",children:"Wait for your new certificate to arrive..."}),"\n",(0,i.jsx)(t.p,{children:'When your certificate(s) arrive, import them (usually *.cer files) into your keystore. Often times there are multiple cert files provided, each with it\'s own unique name. Note "root" and "intermediate" are just example names. The "server" certificate will replace the existing self-signed one in the keystore, so you should use the same alias you specified in step 2 when generating the signing request.'}),"\n",(0,i.jsx)("code",{children:(0,i.jsx)(t.p,{children:"keytool -import -alias root -keystore keystore.p12 -trustcacerts -file root.cer\nkeytool -import -alias intermediate -keystore keystore.p12 -trustcacerts -file intermediate.cer\nkeytool -import -alias integration-manager -keystore keystore.p12 -trustcacerts -file server.cer"})}),"\n",(0,i.jsx)(t.p,{children:"Contact your Certificate Authority with any specific questions/concerns/issues you encounter during import. Actian Support will not be able to resolve issues with CA-Signed Certificates."}),"\n",(0,i.jsx)(t.h3,{id:"option-b-how-to-create-and-import-a-self-signed-certificate",children:"Option B: How to Create and Import a Self-Signed Certificate"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Self-signed certs should not be used in production environments!"})}),"\n",(0,i.jsx)(t.p,{children:"Open a command console and change directory to the JRE bin folder."}),"\n",(0,i.jsx)(t.p,{children:'Create a new keystore file using Java keytool. You can use whatever alias and filename you choose. For illustration purposes, we are using "integration-manager" and "keystore.p12", respectively.'}),"\n",(0,i.jsx)(t.p,{children:"You will be prompted to set a keystore password and also add identity details (name, company, address, etc)."}),"\n",(0,i.jsx)("code",{children:(0,i.jsx)(t.p,{children:"cd (ProgramData)/Actian/IntegrationManager/jre/bin\nkeytool -genkeypair -alias integration-manager -keyalg RSA -keysize 2048 -storetype PKCS12 -keystore keystore.p12 -validity 3650"})}),"\n",(0,i.jsx)(t.h2,{id:"step-2-configure-integration-manager",children:"Step 2: Configure Integration Manager"}),"\n",(0,i.jsx)(t.p,{children:'For illustration purposes, we are using "integration-manager" and "keystore.p12", respectively.'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"These properties apply to Self-Signed and CA-Signed keystores"}),"\n",(0,i.jsx)(t.li,{children:"Note that any application.properties change requires a restart of the Integration Manager Service"}),"\n",(0,i.jsx)(t.li,{children:"It is always good practice to make sure you do not have duplicate properties in your file"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Add to application.properties:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"# Enable SSL\nsecurity.require-ssl=true\nserver.port=443\nserver.ssl.key-alias=integration-manager\nserver.ssl.key-store=${sharedDataPath}/conf/ssl/keystore.p12\nserver.ssl.key-store-password=D0N0tU5eTh1sP@ssW0rd!\nserver.ssl.key-store-type=PKCS12\nim.base-url=https://IM_SERVER_HOSTNAME:${server.port}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"step-3-import-your-certificates-into-java-jrelibsecuritycacerts",children:"Step 3: Import Your Certificates into Java jre/lib/security/cacerts"}),"\n",(0,i.jsx)(t.p,{children:'"cacerts" is an embedded keystore for the Java Runtime Environment.'}),"\n",(0,i.jsx)(t.p,{children:"Export the certificate out of the keystore:"}),"\n",(0,i.jsx)("code",{children:(0,i.jsx)(t.p,{children:"keytool -exportcert -alias integration-manager -keystore keystore.p12 -file integration-manager.cer -storetype pkcs12 -noprompt -storepass D0N0tU5eTh1sP@ssW0rd!"})}),"\n",(0,i.jsx)(t.p,{children:"Import the certificate to the jre/lib/security/cacerts keystore:"}),"\n",(0,i.jsx)("code",{children:(0,i.jsx)(t.p,{children:'keytool -import -alias integration-manager -file integration-manager.cer -keystore "(ProgramData)/Actian/IntegrationManager/jre/lib/security/cacerts" -storepass D0N0tU5eTh1sP@ssW0rd!'})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var i=r(7294);const n={},a=i.createContext(n);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);
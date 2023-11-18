"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9142],{1826:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=t(5893),i=t(1151);const a={layout:"default",title:"Microsoft SQL Server"},s="Microsoft SQL Server",o={id:"integration-manager/server-administration/setup-ms-sql-server",title:"Microsoft SQL Server",description:"Overview",source:"@site/docs/integration-manager/server-administration/setup-ms-sql-server.md",sourceDirName:"integration-manager/server-administration",slug:"/integration-manager/server-administration/setup-ms-sql-server",permalink:"/integration-platform-docs/docs/integration-manager/server-administration/setup-ms-sql-server",draft:!1,unlisted:!1,editUrl:"https://github.com/douglaslloyd/IntegrationPlatform/tree/main/docs/integration-manager/server-administration/setup-ms-sql-server.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Microsoft SQL Server"},sidebar:"docsSidebar",previous:{title:"MySQL",permalink:"/integration-platform-docs/docs/integration-manager/server-administration/setup-mysql"},next:{title:"RabbitMQ",permalink:"/integration-platform-docs/docs/integration-manager/server-administration/setup-rabbitmq"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Step 1: Install MS SQL Server",id:"step-1-install-ms-sql-server",level:2},{value:"Step 2: Verify MS SQL Server Service",id:"step-2-verify-ms-sql-server-service",level:2},{value:"Step 3: Integration Manager Configuration",id:"step-3-integration-manager-configuration",level:2},{value:"Step 4: Create SQL Server Compatible Quartz Properties file",id:"step-4-create-sql-server-compatible-quartz-properties-file",level:2},{value:"Step 5: Configure the Integration Manager Service for Domain login",id:"step-5-configure-the-integration-manager-service-for-domain-login",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"microsoft-sql-server",children:"Microsoft SQL Server"}),"\n",(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(r.p,{children:"Microsoft SQL Server is a production capable database server that can be installed locally, or on a network server. Microsoft SQL Server is also available as a fully managed cloud service via Amazon Aurora, Azure Database, and Google Cloud SQL."}),"\n",(0,n.jsx)(r.p,{children:"Integration Manager is compatible with Microsoft SQL Server version 13 (aka SQL Server 2016) or later."}),"\n",(0,n.jsx)(r.h2,{id:"step-1-install-ms-sql-server",children:"Step 1: Install MS SQL Server"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["You can find the latest MS SQL Server for Windows download here: ",(0,n.jsx)(r.a,{href:"https://www.microsoft.com/en-us/sql-server/sql-server-downloads",children:"https://www.microsoft.com/en-us/sql-server/sql-server-downloads"})]}),"\n",(0,n.jsxs)(r.li,{children:["You can find the latest MS SQL Server for Windows installation instructions here: ",(0,n.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-2016",children:"https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-2016"})]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"step-2-verify-ms-sql-server-service",children:"Step 2: Verify MS SQL Server Service"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Go to Windows \u2192 Services"}),"\n",(0,n.jsx)(r.li,{children:"Confirm SQL Server (MSSQLSERVER) service is registered and running"}),"\n",(0,n.jsx)(r.li,{children:"Open Programs \u2192 Microsoft SQL Server Tools \u2192 Microsoft SQL Server Management Studio to confirm your connection info"}),"\n",(0,n.jsxs)(r.li,{children:["If you run into problems: ",(0,n.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/sql/database-engine/install-windows/repair-a-failed-sql-server-installation?view=sql-server-2016",children:"https://docs.microsoft.com/en-us/sql/database-engine/install-windows/repair-a-failed-sql-server-installation?view=sql-server-2016"})]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"step-3-integration-manager-configuration",children:"Step 3: Integration Manager Configuration"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:'Integration Manager uses the "spring.datasource" prefix properties in the ../conf/application.properties file to create a database connection'}),"\n",(0,n.jsx)(r.li,{children:"Note that any application.properties change requires a restart of the Integration Manager Service"}),"\n",(0,n.jsx)(r.li,{children:"Note that Integration Manager will initialize all required database tables at the initial startup"}),"\n",(0,n.jsx)(r.li,{children:"Example properties to connect Integration Manager to a MS SQL Server database:"}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"spring.datasource.driver-class-name=com.microsoft.sqlserver.jdbc.SQLServerDriver\nspring.datasource.url=jdbc:sqlserver://DB_HOSTNAME;databaseName=datacloud_db;integratedSecurity=true\nspring.datasource.initialize=false\nspring.datasource.continue-on-error=false \nspring.jpa.properties.eclipselink.cache.shared.default=false\nspring.liquibase.change-log=classpath:db.changelog-master.xml\n"})}),"\n",(0,n.jsx)(r.h2,{id:"step-4-create-sql-server-compatible-quartz-properties-file",children:"Step 4: Create SQL Server Compatible Quartz Properties file"}),"\n",(0,n.jsx)(r.p,{children:"The default Quartz configuration is not compatible with SQL Server, so you will need to create a custom properties file."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Create a file named quartz.properties in the (ProgramData)/Actian/IntegrationManager/conf folder"}),"\n",(0,n.jsx)(r.li,{children:"Note that any quartz.properties change requires a restart of the Integration Manager Service"}),"\n",(0,n.jsx)(r.li,{children:"Add the contents below to properly initialize the Quartz subsystem in SQL Server:"}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"org.quartz.scheduler.instanceName=ServerScheduler\norg.quartz.scheduler.instanceId=AUTO\norg.quartz.scheduler.skipUpdateCheck=true\norg.quartz.scheduler.jobFactory.class=org.quartz.simpl.SimpleJobFactory\norg.quartz.threadPool.class=org.quartz.simpl.SimpleThreadPool\norg.quartz.threadPool.makeThreadsDaemons=true\norg.quartz.threadPool.threadCount=20\norg.quartz.threadPool.threadPriority=5\norg.quartz.jobStore.class=org.quartz.impl.jdbcjobstore.JobStoreTX\norg.quartz.jobStore.driverDelegateClass=org.quartz.impl.jdbcjobstore.MSSQLDelegate\norg.quartz.jobStore.useProperties=true\norg.quartz.jobStore.misfireThreshold=6000000\norg.quartz.jobStore.tablePrefix=QRTZ_\norg.quartz.jobStore.isClustered=true\norg.quartz.jobStore.clusterCheckinInterval=30000\norg.quartz.jobStore.txIsolationLevelSerializable=true\norg.quartz.jobStore.acquireTriggersWithinLock=true\norg.quartz.jobStore.lockHandler.class=org.quartz.impl.jdbcjobstore.UpdateLockRowSemaphore\n"})}),"\n",(0,n.jsx)(r.h2,{id:"step-5-configure-the-integration-manager-service-for-domain-login",children:"Step 5: Configure the Integration Manager Service for Domain login"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Go to Windows \u2192 Services \u2192 Actian Integration Manager"}),"\n",(0,n.jsx)(r.li,{children:'Right click Actian Integration Manager, select "Properties"'}),"\n",(0,n.jsx)(r.li,{children:'Select the "Log On" tab'}),"\n",(0,n.jsx)(r.li,{children:'Select "This account:" and enter a Window Domain User with read/write access to MS SQL Server'}),"\n",(0,n.jsx)(r.li,{children:'Click "OK"'}),"\n",(0,n.jsx)(r.li,{children:'Select the "General" tab'}),"\n",(0,n.jsx)(r.li,{children:'Right click Actian Integration Manager, select "Start" or "Restart" (depending on whether the service is currently running)'}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>s});var n=t(7294);const i={},a=n.createContext(i);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Overview',
    },
    'architecture',
    'release-notes',
    //    'someOtherDoc',
    {
      type: 'category',
      label: 'INTEGRATION MANAGER',
      className: 'categoryItem',
      items: [
        'integration-manager/manager-overview',
        'integration-manager/quickstart-install',
        'integration-manager/accessing-the-integration-manager',
        'integration-manager/dashboard',
        'integration-manager/editing-your-profile',
        {
          type: 'category',
          label: 'Jobs',
          items: [
            'integration-manager/jobs/run-your-first-job',
            'integration-manager/jobs/run-job-with-input-file',
            'integration-manager/jobs/run-job-with-input-message',
            'integration-manager/jobs/viewing-job-run-history',
            'integration-manager/jobs/job-status-codes',
            'integration-manager/jobs/downloading-the-log-file',
              ]
        },
        {
          type: 'category',
          label: 'Configurations',
          items: [
            'integration-manager/configurations/creating-configurations',
            'integration-manager/configurations/editing-configuration-details',
            'integration-manager/configurations/activating-or-inactivating-configurations',
            'integration-manager/configurations/editing-configuration-schedules',
            'integration-manager/configurations/managing-configuration-macros',
            'integration-manager/configurations/managing-configuration-files',
            'integration-manager/configurations/managing-configuration-jobs',
            'integration-manager/configurations/running-configurations',
          ]
        },
        {
          type: 'category',
          label: 'Templates',
          items: [
            //'integration-manager/templates/templates-overview',
            'integration-manager/templates/creating-templates',
            'integration-manager/templates/editing-template-details',
            'integration-manager/templates/creating-a-configuration-from-a-template',
            'integration-manager/templates/activating-or-inactivating-templates',
            'integration-manager/templates/deleting-templates',
            'integration-manager/templates/managing-template-macros',
            'integration-manager/templates/managing-template-files',
            'integration-manager/templates/managing-template-configurations',
          ]
        },
         //'integration-manager/job-scheduling',
        {
          type: 'category',
          label: 'Macros',
          items: [
            'integration-manager/macros/macros-overview',
            'integration-manager/macros/managing-macros',
            'integration-manager/macros/creating-private-macros',
            'integration-manager/macros/importing-macros',
            //'integration-manager/macros/viewing-macros',
            'integration-manager/macros/editing-macros',
            'integration-manager/macros/creating-public-macros',
            'integration-manager/macros/managing-public-macros',
            //'integration-manager/macros/runtime-macros',
            'integration-manager/macros/using-LOCAL_JOB_SPEC_DIR',
            'integration-manager/macros/securing-macros',
          ]
        },
        {
          type: 'category',
          label: 'Files',
          items: [
            'integration-manager/files/managing-files',
          ]
        },
        {
          type: 'category',
          label: 'Agents and Devices',
          items: [
            'integration-manager/agents-and-devices/managing-agents-and-devices',
          ]
        },
        {
          type: 'category',
          label: 'Advanced Topics',
          items: [
            'integration-manager/advanced-topics/serialized-job-queues',
            'integration-manager/advanced-topics/dataflow-usage',
          ]
        },
        {
          type: 'category',
          label: 'Access Control',
          items: [
            'integration-manager/access-control/user-management',
            'integration-manager/access-control/access-control-polices',
            'integration-manager/access-control/jobconfig-aliasing',
          ]
        },
        {
          type: 'category',
          label: 'Server Administration',
          //link: {type: 'doc', id: 'integration-manager/server-administration/server-administration'},
          items: [
            'integration-manager/server-administration/security-enabling-https',
            'integration-manager/server-administration/security-encryption-at-rest',
            'integration-manager/server-administration/production-architecture',
            'integration-manager/server-administration/production-configuration',
            'integration-manager/server-administration/workload-management',
            'integration-manager/server-administration/setup-mysql',
            'integration-manager/server-administration/setup-ms-sql-server',
            'integration-manager/server-administration/setup-rabbitmq',
            'integration-manager/server-administration/setup-zookeeper',
            'integration-manager/server-administration/setup-job-notifications',
            'integration-manager/server-administration/setup-kubernetes',
            'integration-manager/server-administration/server-upgrades',
            'integration-manager/server-administration/integration-engines',
          ]
        },
        'integration-manager/aggregator-service',
        {
          type: 'category',
          label: 'File Folder Listener',
          items: [
            'integration-manager/file-folder-listener/local-folder-listener',
            'integration-manager/file-folder-listener/aws-s3-bucket-listener',
            'integration-manager/file-folder-listener/azure-blob-storage-listener',
            'integration-manager/file-folder-listener/google-cloud-storage-listener',
          ]
        },
        {
          type: 'category',
          label: 'APIs',
          items: [
            'integration-manager/APIs/quickstart-api-tutorial',
            'integration-manager/APIs/sfdc-outbound-messaging-api',
              ]
        },
        'integration-manager/server-troubleshooting',
      ]
    },
    {
      type: 'category',
      label: 'INTEGRATION AGENT',
      items: [
        'integration-agent/agent-overview',
        'integration-agent/quickstart-install',
        'integration-agent/run-your-first-remote-job',
        'integration-agent/monitoring-agent-status',
        {
          type: 'category',
          label: 'On-Premise Data',
          items: [
            'integration-agent/on-prem-data/accessing-on-premise-storage',
            'integration-agent/on-prem-data/connecting-to-ms-sql-server',
          ]
        },
        {
          type: 'category',
          label: 'Advanced Topics',
          items: [
            'integration-agent/advanced-topics/configuration-files',
            'integration-agent/advanced-topics/manual-agent-registration',
            'integration-agent/advanced-topics/retrieve-agent-credential',
            'integration-agent/advanced-topics/scriptable-agent-registration',
            'integration-agent/advanced-topics/connecting-to-other-environments',
          ]
        },
        'integration-agent/agent-troubleshooting',
      ]
    },
  ],
};

module.exports = sidebars;

//module.exports = {
//  myAutogeneratedSidebar: [
//    {
//      type: 'autogenerated',
//      dirName: '.', // '.' means the current docs folder
//    },
//  ],
//};

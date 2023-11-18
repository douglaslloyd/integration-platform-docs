---
title: QuickStart Install
hide_table_of_contents: true
---

# QuickStart Install

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="windows" label="Windows" default>

## <icon icon="fa-brands fa-windows" size="lg" /> Windows Installation

### Prerequisites

1. Windows
   * Windows 10 Enterprise or later, Windows Server 2016 or later
   * Windows user account with "Run as Administrator" privileges
2. 64-bit processor, 2.90GHz
3. 8 GB Installed memory (RAM)
4. DataConnect Cloud or Avalanche Subscription

### What Will be Installed

1. Actian Integration Agent (Windows Service)
2. DataConnect v12 Embedded Engine
3. AdoptJDK 11 Embedded JRE

### Installation

1. Download Actian Integration Agent for Windows from:
   * Agents Console [https://console.im.actiandatacloud.com/ui/agents](https://console.im.actiandatacloud.com/ui/agents), or
   * Actian ESD: [https://esd.actian.com/](https://esd.actian.com/).
2. Right-click the downloaded installer file (integration-agent-xxx-win.exe) and select "Run as administrator".
3. If you have a previous 3.x.x version installed, you will be coerced to uninstall first. Uninstall will shutdown running services and prepare for library updates, it will NOT remove or alter ProgramData (conf files, logs, etc...).
4. Accept the License Agreement.
5. Select the installation path (default: C:/Program Files/Actian/IntegrationAgent).
6. Select the shared data path (default: C:/ProgramData/Actian/IntegrationAgent).
7. Installation should take less than a minute.
8. If installed locally, open [http://localhost:6001/home](http://localhost:6001/home). If installed on a network server, open http://\[agent hostname]:6001/home.
9. Register the Agent using your DataConnect Cloud or Avalanche credentials. Registration progress will be shown to confirm that your Agent is operational.
10. You should now be able to view and manage your Agent from the cloud:
    * DataConnect Cloud: [https://console.im.actiandatacloud.com/ui/agents](https://console.im.actiandatacloud.com/ui/agents)
    * Avalanche Console: [https://avalanche.actiandatacloud.com/im/agents](https://avalanche.actiandatacloud.com/im/agents)
    * Private Cloud on Kubernetes: https://\[your hosted domain]/im/agents
11. You can also open [http://localhost:6001/home](http://localhost:6001/home) at any time to confirm the status of the Agent on the installed machine.

### Run Your First DJAR Remotely

**<font color="red">This is the next topic. Can we link there?</font>**

1. Navigate and login to Integration Manager Cloud or Avalanche Connect in your web browser.
2. Navigate to the Configurations tab.
3. Click +Add.
4. Setup a new Configuration:
   * Give it a unique Name.
   * Set Run Location to User Agent.
   * Click Add Package.
   * Upload a DataConnect djar file.
   * Select an Entry Point within the djar.
   * Click on the Macros sub-tab.
   * Add and/or import any macros your djar requires.
5. Click Run Configuration.
6. Navigate to the Jobs sub-tab to view job progress and log file.
7. You can monitor Job progress in real-time even though it is executing on the Agent machine.

### Service Logs & Monitoring

1. You can monitor Agent health, location, and job history from the cloud:
   * DataConnect Cloud: [https://console.im.actiandatacloud.com/ui/agents](https://console.im.actiandatacloud.com/ui/agents)
   * Avalanche Console: [https://avalanche.actiandatacloud.com/im/agents](https://avalanche.actiandatacloud.com/im/agents)
   * Private Cloud on Kubernetes: https://\[your hosted domain]/ui/agents
2. You can monitor service activity and get important additional information from the log file on the Agent machine (default: C:/ProgramData/Actian/IntegrationAgent/logs/Agent.log)

   :::note

   Remember that log file data will survive uninstallation/reinstallation.

   :::

</TabItem>

<TabItem value="linux" label="Linux">

## <icon icon="fa-brands fa-linux" size="lg" /> Linux Installation

### Prerequisites

1. Linux
   * Red Hat Enterprise Linux 7.9 and 8 (64-bit U.S. English edition)
   * GTK Version 3
   * You need to install libnsl.so.1 separately on RHEL 8.1 or above versions.
   * Linux user account with sudo privileges
2. 64-bit processor, 2.90GHz
3. 8 GB Installed memory (RAM)
4. DataConnect v12 License file (typically \*.slc)

### What Will Be Installed

1. Actian Integration Agent (Linux Daemon)
2. DataConnect v12 Embedded Engine
3. AdoptJDK 11 Embedded JRE

### Installation

1. Download Actian Integration Agent for Linux from:
   * Agents Console [https://console.im.actiandatacloud.com/ui/agents](https://console.im.actiandatacloud.com/ui/agents), or
   * Actian ESD: [https://esd.actian.com/](https://esd.actian.com/).
2. Locate downloaded rpm file (integration-agent-3.x.x.noarch.rpm).
3. Switch to root user:   `sudo su`
4. Install rpm with yum: `yum install integration-agent-3.x.x.noarch.rpm`
5. Confirm installation path (default: /opt/actian/integration-agent).
6. Confirm shared data path (default: /etc/opt/actian/integration-agent).
7. Installation should take less than a minute.
8. If installed locally, open [http://localhost:6001/home](http://localhost:6001/home). If installed on a network server, open http://\[agent hostname]:6001/home.
9. Register the Agent using your DataConnect Cloud or Avalanche credentials. Registration progress will be shown to confirm that your Agent is operational.
10. You should now be able to view and manage your Agent from the cloud:

* DataConnect Cloud: [https://console.im.actiandatacloud.com/ui/agents](https://console.im.actiandatacloud.com/ui/agents)
* Avalanche Console: [https://avalanche.actiandatacloud.com/im/agents](https://avalanche.actiandatacloud.com/im/agents)
* Private Cloud on Kubernetes: https://\[your hosted domain]/ui/agents

11. You can also open [http://localhost:6001/home](http://localhost:6001/home) at any time to confirm the status of the Agent on the installed machine.

### Run Your First DJAR

**<font color="red">This is the next topic. Can we link there?</font>**

1. Navigate and login to Integration Manager Cloud or Avalanche Connect in your web browser.
2. Navigate to the Configurations tab.
3. Click +Add.
4. Setup a new Configuration:
   * Give it a unique Name.
   * Set Run Location to User Agent.
   * Click Add Package.
   * Upload a DataConnect djar file.
   * Select an Entry Point within the djar.
   * Click on the Macros sub-tab.
   * Add and/or import any macros your djar requires.
5. Click Run Configuration.
6. Navigate to the Jobs sub-tab to view job progress and log file.
7. You can monitor Job progress in real-time even though it is executing on the Agent machine.

### Service Logs & Monitoring

1. You can monitor Agent health, location, and job history from the cloud:
   * DataConnect Cloud: [https://console.im.actiandatacloud.com/ui/agents](https://console.im.actiandatacloud.com/ui/agents)
   * Avalanche Console: [https://avalanche.actiandatacloud.com/im/agents](https://avalanche.actiandatacloud.com/im/agents)
   * Private Cloud on Kubernetes: https://\[your hosted domain]/ui/agents
2. You can monitor service activity and get important additional information from the log file on the Agent machine (default: C:/ProgramData/Actian/IntegrationAgent/logs/Agent.log)

   :::note

   Remember that log file data will survive uninstallation/reinstallation.

   :::

### Start/Stop/Status

Start:   `sh -x /etc/init.d/agentservice start`

Stop:   `sh -x /etc/init.d/agentservice stop`

Status: `sh -x /etc/init.d/agentservice status`

### Uninstalling

`yum uninstall integration-agent-3.x.x.noarch.rpm`

</TabItem>
</Tabs>
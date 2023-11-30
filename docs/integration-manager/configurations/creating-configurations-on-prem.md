---
title: Creating Configurations (On-Prem)
tags:
 - Content Issues
---

# Creating Configurations (On-Prem)

:::note
If you need a new configuration that is very similar to an existing configuration, consider duplicating the existing configuration and revising it, rather than creating one from scratch. See [Duplicating Configurations](./duplicating-configurations).
:::

## Creating Your First Configuration

1. On the **Dashboard** page, click **Create Configuration**:

   ![Create Configuration](/img/Configuration-Create-First-Dashboard-On-Prem.png)

2. On the **Data Integration Setup** page, enter a unique name and click **Create**:
   
   ![Data Integration Setup](/img/Data-Integration-Setup-On-Prem.png)
   
     **<font color="red">I can't find a way to get to the Data Integration Setup page again after creating my first integration.</font>**

3.  On the **Configuration Details** page, ... **<font color="red">What is the typical process here? Is the minimum to upload a package and set an entry point?</font>**.
   
    ![Configuration Details](/img/Configuration-Details-Page-On-Prem-Manual.png)

## Importing a Configuration

1. Do one of the following:
   
   * If this is your first configuration, click **Create Configuration** on the **Dashboard** page:

      ![Create Configuration](/img/Configuration-Create-First-On-Prem.png)

   * If this is not your first configuration, click **Import Integration** on the **Configurations** page:

     **<font color="red">Why does the button say "Import Integration" but the page is "Import Configuration"?</font>**

     ![Import Configuration](/img/Import-Configuration-Next-On-Prem.png)

2. The **Import Configuration** page is displayed:
   
   ![Import Configuration](/img/Import-Configuration-On-Prem.png)

3. Enter a unique **Name**, then do one of the following:
   * Click **Local&nbsp;System**, select a configuration file (.djar,.rtc,.process,.ip.xml,.tf.xml,.sqlite), then click **Import**.
   * Click **Integration&nbsp;Files**. In the **File&nbsp;Manager**, select a package, then click **Select&nbsp;Package**. **<font color="red">Should we describe the File Manager more fully?</font>** 
4. The configuration file is listed. Click **Import**.

   ![Import Configuration](/img/Import-Configuration2-On-Prem.png)

   **<font color="red">If you import a .process file, the icon is different. Should we discuss the difference?</font>**
5.  On the **Configuration Details** page, edit configuration details as desired. See [Editing Configuration Details](./editing-configuration-details).
   
    ![Configuration Details](/img/Configuration-Details-Page-On-Prem-Import.png)

## Creating a Configuration from a Template

Using templates makes it easier to manage multiple configurations. You can create a configuration from the **Template Details** page. Refer to [Creating a Configuration from a Template](../templates/creating-a-configuration-from-a-template).

## Auto-Generating a Configuration

**<font color="red">Can't recall where I saw the Auto-Generate Configuruation checkbox.</font>**


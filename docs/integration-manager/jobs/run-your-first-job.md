---
title: Run Your First Job
tags:
 - Content Issues
---

# Run Your First Job

:::note

This topic is intended to provide an overview of running jobs in the Integration Manager. If you haven't yet run a job, some of the steps in this process might require further explanation. Refer to the links provided.

:::

## Step 1: Create a Configuration

Refer to [Creating Configurations](../configurations/creating-configurations).

1. Select the **Configurations** tab:

   ![Configurations Tab](/img/Configurations-Tab.png)

2. Click ![Create Configuration Button](/img/icons/Create-Configuration-Button.png).
3. The **Import Configuration** page is displayed:
   
   ![Import Configuration](/img/Import-Configuration.png)

4. Enter a unique **Name**, then do one of the following:
   * Click **Local&nbsp;System**, select a configuration file (.djar,.rtc,.process,.ip.xml,.tf.xml,.sqlite), then click **Import**.
   * Click **Integration&nbsp;Files**. In the **File&nbsp;Manager**, select a package, then click **Select&nbsp;Package**. **<font color="red">Should we describe the File Manager more fully?</font>** 
5. The configuration file is listed. Click **Import**.

   ![Import Configuration Button](/img/Import-Configuration-Button.png)

6.  If successful, the **Configuration Details** page opens with the message "Integration Succcessfully Imported!". **<font color="red">What to do if not? What reasons for failure?</font>**
   
   ![Integration Successfully Imported](/img/Integration-Successfully-Imported.png)

## Step 2: Edit the Configuration

Refer to [Editing Configuration Details](../configurations/editing-configuration-details).

1. Click ![the edit icon](/img/icons//edit-icon.png) next to **Entry Point** and select an Entry Point within the djar:
   
   ![Entry Point](/img/Entry-Point.png)
    
## Step 3: Add Macros

Refer to [Macros Overview](../macros/macros-overview).

1. Select the **Macros** tab.
2. **<font color="red">Since this is the "Run your first job" topic, they likely don't have any macros. Need to link out to "Create Macro" topic.</font>**
3. **<font color="red">Discuss private/public?</font>**
4. Add and/or import any macros your djar requires.

## Step 4: Run the Job

1. Click **Run&nbsp;Configuration**.
2. Navigate to the **Jobs** tab to view job progress and log file.
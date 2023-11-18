---
layout: default
title: User Management
hide_table_of_contents: true
---
# User Management

Administrators can create and manage users within the [Administration Console](https://im.dev.actiandatacloud.com/ui/admin/users). Note that User Management requires Account Admin access.

Account administrators can:

* Edit user profile information
* Activate/Deactivate a user
* Enable direct API access for a user (where required)
* Create, generate, or reset the API password for a user
* Enable/Disable Admin access for a user

## Editing a User Account

1. Click the profile dropdown in the upper right corner and select **Administration**.

   ![Administration](/img/Administration.png)

2. Click the Username for the user you wish to edit:

   ![Edit-User1](/img/Edit-User1.png)

3. Click &nbsp;<img src="/img/icons/edit-icon.png" style={{width: 20}} alt="the edit icon" />&nbsp; in the **User Details** pane:

   ![Edit-User2](/img/Edit-User2.png)

4. On the **Edit User Account** page, edit the user's first and last name, status, and password:

   ![Edit-User3](/img/Edit-User3.png)

:::note

   Usernames cannot be changed once created, they can only be deactivated.

:::

:::note

Users (admin and non-admin alike) are not allowed to activate/deactivate, or enable/disable Admin Access for themselves.

:::

1. Click &nbsp;<img src="/img/icons/Continue-Button.png" style={{width: 140}} alt="the CONTINUE button" />&nbsp;.
2. Under **What role would you like to assign to the user?**, click **Admin** or **General User**.
3. If you selected **General User**, click the **Select policies** dropdown and select the desired policy. See [Access Control Policies](./access-control-polices).

   ![Edit-User4](/img/Edit-User4.png)
   
4. Click **Update User**.
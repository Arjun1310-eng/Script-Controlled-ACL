# Phase 5: Implementation & Configuration Guide

## 1. Elevated Role Activation
1. Log in to your ServiceNow Personal Developer Instance (PDI).
2. Click your profile icon at the top right of the banner frame.
3. Select **Elevate Roles**.
4. Check the box for **security_admin** and click **Update**.
*(Note: ACL tables cannot be edited without elevating to security_admin).*

---

## 2. ACL Rule Configuration
1. In the All navigation filter, type `sys_security_acl.list` and hit **Enter**.
2. Click the **New** button to create a new Access Control record.
3. Configure the following fields:
   - **Type:** `record`
   - **Operation:** `write`
   - **Name:** Select `Incident [incident]` from the dropdown and set field to `-- None --`.
   - **Description:** `Restrict write access to incident records if state is Closed.`
   - **Admin Overrides:** Checked (True)
   - **Advanced:** Checked (True)
4. Scroll down to the **Script** tab.
5. Paste the JavaScript logic from `script_controlled_acl.js`.
6. Click **Submit** or **Save**.

---

## 3. Instance Cache Clearing
1. Open the All search navigation bar.
2. Type `cache.do` and hit **Enter**.
3. This flushes the instance memory cache, forcing the ServiceNow engine to immediately re-evaluate the new ACL rule.
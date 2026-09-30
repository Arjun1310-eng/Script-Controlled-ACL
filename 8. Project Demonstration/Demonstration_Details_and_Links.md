# Phase 8: Project Demonstration Details & Links

## 1. Project Overview
- **Project Title:** Script-Controlled ACL – Restrict Record Access Based on Field Value[cite: 1]
- **Team ID:** SWTID-2026-7998[cite: 1]
- **Team Leader:** Arjun D[cite: 1]
- **Platform Track:** ServiceNow System Administration & Security Governance

---

## 2. Environment & Demonstration Artifacts
- **Instance URL:** `https://devXXXXX.service-now.com` *(Replace with your PDI instance URL)*
- **Demo Video Link:** [Add your recorded demo video link - Google Drive / YouTube unlisted link]
- **Target Record Table:** `Incident [incident]`

---

## 3. Demonstration Walkthrough Steps
1. **Security Admin Elevation:** Demonstrate session elevation to `security_admin` to access `sys_security_acl`.
2. **ACL Configuration:** Show the configured ACL rule targeting `incident.write` with the advanced script editor.
3. **Active Incident Test:** Impersonate an ITIL fulfiller and demonstrate full write capabilities on an Incident where State = `In Progress`.
4. **Closed Incident Test:** Demonstrate the dynamic lockdown on an Incident where State = `Closed` (State value 7) ensuring all fields switch to read-only.
5. **Admin Bypass Verification:** Switch back to System Administrator and show editable access preserved on closed records.

---

## 4. Execution Screenshots Reference
- `images/acl_configuration_overview.png`: Screenshot showing the complete ACL setup.
- `images/itil_active_incident_editable.png`: Proving fields are editable when active.
- `images/itil_closed_incident_readonly.png`: Proving fields are locked when state is Closed.
- `images/admin_override_verification.png`: Proving admin maintains write access.
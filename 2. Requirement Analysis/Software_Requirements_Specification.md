# Phase 2: Software Requirements Specification (SRS)

## 1. Introduction
This Software Requirements Specification document describes the functional and non-functional requirements for the project **Script-Controlled ACL – Restrict Record Access Based on Field Value** within the ServiceNow platform.

- **Project Title:** Script-Controlled ACL – Restrict Record Access Based on Field Value
- **Team ID:** SWTID-2026-7998
- **Platform:** ServiceNow (Utah / Vancouver / Washington)
- **Target Table:** `Incident [incident]`
- **Target Operation:** `write`

---

## 2. Functional Requirements (FR)

- **FR-1 (Elevated Security Access):** System administrators must elevate session privileges to the `security_admin` role before accessing the Access Control (`sys_security_acl`) module.
- **FR-2 (Dynamic Field Value Evaluation):** The platform ACL engine must inspect field conditions dynamically (specifically `current.state`) upon every save, update, and API write operation.
- **FR-3 (Post-Closure Edit Restriction):** When an Incident record's state changes to `7` (Closed), the record must become strictly read-only for standard users and fulfillers with the `itil` role.
- **FR-4 (Active Record Edit Access):** While an Incident is in active states (New, In Progress, On Hold), assigned agents (`assigned_to`) and users with the `itil` role must have write permissions.
- **FR-5 (System Administrator Override):** Users possessing the global `admin` role must bypass the restriction and retain write permissions on closed records for compliance and data auditing.
- **FR-6 (Multi-Layer Enforcement):** The restriction must apply consistently across Form views, List editing, and incoming REST/SOAP API calls.

---

## 3. Non-Functional Requirements (NFR)

- **NFR-1 (Security & Integrity):** Access permissions must be validated strictly on the server-side, preventing client-side script tampering or browser DOM modifications.
- **NFR-2 (Performance):** The advanced ACL script execution must introduce less than 20ms latency during record transaction processing.
- **NFR-3 (Maintainability):** JavaScript code must use standard GlideSystem API methods (`gs.hasRole()`, `gs.getUserID()`) and explicit conditional blocks.
- **NFR-4 (Traceability):** All rule creations and updates must be captured inside an assigned ServiceNow Update Set for audit compliance and environment migration.

---

## 4. Environment & Tool Requirements

- **Platform:** ServiceNow Personal Developer Instance (PDI)
- **Browser:** Google Chrome / Mozilla Firefox / Microsoft Edge
- **Development Tool:** ServiceNow Studio / Application Navigator
- **Version Control:** Git & GitHub
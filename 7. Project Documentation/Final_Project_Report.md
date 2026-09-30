# Phase 7: Final Project Technical Report

## 1. Executive Summary
- **Project Title:** Script-Controlled ACL – Restrict Record Access Based on Field Value
- **Track:** ServiceNow Administration & Security Governance
- **Target Audience:** SmartBridge / Skill Wallet Evaluators

This project addresses an essential operational governance challenge in ServiceNow IT Service Management (ITSM): ensuring data integrity by preventing post-closure modifications on Incident records. By designing and implementing a server-side, Script-Controlled Access Control List (ACL), this solution enforces state-dependent `write` permissions directly at the database transaction layer.

---

## 2. Technical Architecture & Implementation
- **Platform Layer:** Database Context (`sys_security_acl`)
- **Evaluation Mechanism:** Advanced Server-Side JavaScript Sandbox
- **Target Entity:** `Incident [incident]`
- **Restricted Operation:** `write` (Record-level)

### Logic Overview:
1. Validates session privileges via the GlideSystem API (`gs.hasRole('admin')`).
2. Evaluates the target record state (`current.state == 7`).
3. Sets `answer = false` dynamically for non-admin users attempting to modify closed tickets.
4. Preserves write permissions for assigned ITIL agents while tickets remain active.

---

## 3. Security & Compliance Benefits
- **Zero-Bypass Architecture:** Bypasses through UI, list view editing, and incoming REST/SOAP web services are blocked at the platform core.
- **Audit Adherence:** Guarantees historical records remain immutable once verified and closed.
- **Role Isolation:** Enforces least-privilege principles by restricting standard fulfillers from altering resolved outcomes.
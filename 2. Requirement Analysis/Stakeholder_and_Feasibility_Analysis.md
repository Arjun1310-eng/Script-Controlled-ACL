# Stakeholder & Feasibility Analysis

## 1. Stakeholder Matrix

| Stakeholder Role | Responsibilities | Impact of ACL Implementation |
| :--- | :--- | :--- |
| **System Administrator** | Configures ACL rules and elevates session roles. | Retains global write override across closed and active records. |
| **ITIL Service Desk Agents** | Resolves and updates incidents during active lifecycle. | Restricted from editing once an incident is marked Closed. |
| **End Users / Callers** | Submits and monitors status of reported issues. | Retains read-only visibility; cannot modify historical tickets. |
| **IT Compliance & Auditing** | Verifies data integrity and regulatory compliance. | Ensures records cannot be tampered with after official closure. |

---

## 2. Technical Feasibility Analysis

- **Technical Feasibility (High):** ServiceNow natively supports JavaScript-based advanced scripts within the `sys_security_acl` table. No third-party plugins are required.
- **Operational Feasibility (High):** Standard ITIL procedures state that closed records should be immutable. Enforcing this via server-side ACL aligns directly with ITSM operational best practices.
- **Economic Feasibility (High):** Built entirely using an existing ServiceNow Personal Developer Instance (PDI) and standard platform APIs with zero additional software cost.
# Phase 1: Brainstorming & Ideation

## 1. Project Information
- **Title:** Script-Controlled ACL – Restrict Record Access Based on Field Value
- **Team ID:** SWTID-2026-7998
- **Leader:** Arjun D

## 2. Problem Statement
In ServiceNow IT Service Management (ITSM), standard role-based access control (RBAC) allows users with the `itil` role to edit incident records. 

However, when an Incident reaches a terminal state such as **Closed (State = 7)**, unauthorized modifications by fulfillers or callers cause:
- Tampering of historical operational audit records.
- Inaccurate SLA and MTTR metrics.
- Compliance violations under ITIL standards.

Client-side solutions like UI Policies can be bypassed via list editing, REST APIs, or browser developer tools. Hence, a server-side solution is required.

## 3. Ideation & Proposed Solution
Implement a **Script-Controlled Access Control List (ACL)** evaluated directly at the ServiceNow database transaction layer:
- Inspect `current.state` dynamically.
- When `current.state == 7` (Closed), block write permissions (`answer = false`).
- Retain write access for administrators via `gs.hasRole('admin')`.
- Allow in-flight ticket edits for assigned fulfillers when state is open.
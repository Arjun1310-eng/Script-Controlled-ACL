# Risk Assessment & Resource Allocation

## 1. Resource Allocation Matrix

| Role / Team Member | Primary Responsibility | Platform Tools |
| :--- | :--- | :--- |
| **Team Leader (Arjun D)** | Architecture design, ACL scripting, and repository management | ServiceNow Studio, GitHub |
| **Team Member 2** | Requirement gathering, test scenario execution, and impersonation checks | ServiceNow PDI |
| **Team Member 3** | Documentation, markdown drafting, and milestone tracking | VS Code, Markdown Editor |

---

## 2. Project Risk Management

| Identified Risk | Severity | Impact | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| **Accidental System Lockout** | High | Fulfillers cannot update active incidents | Add fallback checks allowing assigned users and ITIL role holders when state != Closed. |
| **ACL Cache Latency** | Medium | Rule modifications do not reflect immediately | Run `cache.do` directly in the navigation bar following rule commits. |
| **Unauthorized Bypasses** | High | Users bypass UI read-only flags via List Edit | Enforce the restriction at the database ACL level, neutralizing form and list-level bypasses. |
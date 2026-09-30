# Impersonation & Security Validation Steps

## 1. Impersonation Procedure
1. Navigate to the top banner frame and click your User Profile icon.
2. Select **Impersonate User**.
3. Choose a standard ITIL test user (e.g., `Beth Anglin` or `ITIL User`).
4. Search for an open Incident (e.g., State: `In Progress`).
   - *Result:* Observe that the short description, assignment group, and work notes are editable.
5. Search for a closed Incident (e.g., State: `Closed`).
   - *Result:* Observe that all form fields turn gray/read-only and the **Update** / **Save** buttons are hidden by the platform security engine.
6. End impersonation to return to the System Administrator session.

---

## 2. Platform Security Trace Validation
1. Enable the **ACL Debugger** via `System Security > Debugging > Debug Security Rules`.
2. Open the targeted Closed Incident record.
3. Scroll to the bottom execution tree and locate `incident/write`.
4. Confirm that the script evaluation displays:
   - Evaluation Rule: `script_controlled_acl`
   - Evaluation Result: `Security check failed (answer = false)`
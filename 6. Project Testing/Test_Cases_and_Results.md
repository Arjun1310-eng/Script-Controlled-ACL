# Phase 6: Project Testing & Test Case Execution

## 1. Test Objective
To verify that the Script-Controlled ACL rule on the `incident` table accurately evaluates record-level `write` operations based on the `state` field across different user roles and lifecycle phases.

---

## 2. Test Execution Matrix

| Test Case ID | Test Scenario | User Role Tested | Record State | Expected Outcome | Actual Outcome | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Standard active incident update | ITIL Agent (`itil_user`) | In Progress (2) | Form fields editable; Save allowed | All fields editable | **Passed** |
| **TC-02** | Attempted modification of closed incident | ITIL Agent (`itil_user`) | Closed (7) | Form fields read-only; Update denied | Form displays as read-only; no save option | **Passed** |
| **TC-03** | End-user modification attempt | End User / ESS | In Progress (2) | Record write access restricted | Form read-only | **Passed** |
| **TC-04** | Admin override on closed incident | System Administrator (`admin`) | Closed (7) | Form fields editable; Save allowed | Fields editable; Admin updates permitted | **Passed** |
| **TC-05** | Direct List View edit attempt | ITIL Agent (`itil_user`) | Closed (7) | Double-click edit blocked | Security prevents inline edit | **Passed** |

---

## 3. Test Summary
- **Total Test Cases:** 5
- **Passed:** 5
- **Failed:** 0
- **Pass Rate:** 100%
- **Conclusion:** Server-side evaluation successfully overrides client bypasses and enforces data governance rules at the database transaction layer.
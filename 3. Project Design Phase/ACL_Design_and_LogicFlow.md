# ACL Design & Logic Flow

## 1. ACL Rule Specifications

| Parameter | Configuration Value |
| :--- | :--- |
| **Type** | record |
| **Operation** | write |
| **Name** | `incident` (None - table-level record access) |
| **Admin Overrides** | True |
| **Advanced** | Checked |
| **Script Context** | Server-side JavaScript |

---

## 2. Decision Logic Flowchart Steps

1. **Step 1:** System write transaction start avvagane ACL execute avthundhi.
2. **Step 2:** `current` object valid ga undo ledho verify chesthundhi.
3. **Step 3:** Session user ki `admin` role unte, bypass chesi direct ga `answer = true` isthundhi.
4. **Step 4:** User non-admin aithe, `current.state` value ni fetch chesthundhi:
   - Condition A: `current.state == 7` (Closed) aithe, record update cheyadam deny chesthundhi (`answer = false`).
   - Condition B: `current.state != 7` mariyu user `itil` role lo unte, update allow chesthundhi (`answer = true`).
5. **Step 5:** Final access state form layout lo read-only ga enforce avthundhi.
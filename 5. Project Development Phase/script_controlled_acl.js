/**
 * Title: Script-Controlled ACL – Restrict Record Access Based on Field Value
 * Target Table: Incident [incident]
 * Operation: write
 * Type: record
 * Description: Restricts modification permissions when the record's State is 'Closed' (7).
 *              Allows edits for System Administrators and assigned ITIL fulfillers on active records.
 */

(function executeRule(current, previous /*null when async*/) {
    // Default outcome is restricted access
    answer = false;

    // Safety guard: ensure current record context exists
    if (!current) {
        return;
    }

    // 1. Administrative Override: Global admins retain write privileges across all states
    if (gs.hasRole('admin')) {
        answer = true;
        return;
    }

    // 2. Constants definition
    var STATE_CLOSED = 7; // In standard ServiceNow ITSM, State 7 represents Closed

    // 3. Current user context evaluation
    var currentUserId = gs.getUserID();
    var isAssignedToUser = (currentUserId === current.assigned_to.toString());
    var isItilUser = gs.hasRole('itil');

    // 4. Dynamic Field Value Condition Check
    if (current.state == STATE_CLOSED) {
        // Enforce strict lock: No non-admin user can update a closed incident
        answer = false;
    } else {
        // Active incident: Allow edits only if user is an ITIL fulfiller or assigned agent
        if (isAssignedToUser || isItilUser) {
            answer = true;
        } else {
            answer = false;
        }
    }

})(current, previous);
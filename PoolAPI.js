/***********************
 *  Pool Approve Node  *
 ***********************/

class Pool {

  // Request Approval
  nodesJoinRequest() {}

  // Approve / Deny Node request
  nodesGetPermission() {}

  nodesSetPermission() {}

  // Adds Node to the Approved list
  nodesApproveRequest() {}

  /***************************
   *  Pool Node Interaction  *
   ***************************/

  nodes() {}

  // Returns all Approved Nodes
  nodesStatusApproved() {}

  // Returns all Denied Nodes
  nodesStatusDenied() {}

  // Returns all Pending Nodes
  nodesStatusPending() {}
}

module.export = Pool

/***********************
 *  Pool Approve Node  *
 ***********************/

let poolJSON = require('../build/contracts/Pool.json')
let poolABI = poolJSON.abi

class Pool {

  constructor(web3, address) {
    this.web3 = web3
    this.contract = new web3.eth.Contract(poolABI, address)
  }

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

module.exports = Pool

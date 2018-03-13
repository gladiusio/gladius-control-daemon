/***********************
 *  Pool Approve Node  *
 ***********************/

let poolJSON = require('../build/contracts/Pool.json')
let poolABI = poolJSON.abi

class Pool {

  constructor(address) {
    this.web3 = global.web3
    this.contract = new web3.eth.Contract(poolABI, address)
    this.wallet = this.web3.eth.accounts.wallet[0]
  }

  data(newData = null, callback) {
    let self = this

    if (newData) {
      let stringifiedData = JSON.stringify(newData)
      // set data
      self.contract.methods.setData(stringifiedData).estimateGas({ from: self.wallet.address })
        .then(function(gasAmount) {
          self.contract.methods.setData(stringifiedData).send({ from: self.wallet.address, gas: gasAmount }, callback)
        })
    } else {
      // retrieve data
      this.contract.methods.data().call(function(error, response) {
        callback(error, JSON.parse(response))
      })
    }
  }

  publicKey(callback) {
    this.contract.methods.publicKey().call(callback)
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

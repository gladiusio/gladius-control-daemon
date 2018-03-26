/***********************
 *  Pool Approve Node  *
 ***********************/

let poolJSON = require('../contract_abi/Pool.json')
let poolABI = poolJSON.abi

class Pool {

  constructor(address) {
    this.web3 = global.web3
    console.log(address)
    this.contract = new web3.eth.Contract(poolABI, address)
    this.wallet = this.web3.eth.accounts.wallet[0]
  }

  publicData(newData = null, callback) {
    let self = this

    if (newData) {
      let stringifiedData = JSON.stringify(newData)
      // let base64String = Buffer.from(stringifiedData).toString('base64')
      // console.log(base64String)
      // set data
      self.contract.methods.setPublicData(stringifiedData).estimateGas({ from: self.wallet.address })
        .then(function(gasAmount) {
          console.log(gasAmount)
          self.contract.methods.setPublicData(stringifiedData).send({ from: self.wallet.address, gas: gasAmount }, function(error, response) {
            console.log(error)
            console.log(response)
            callback(error, response)
          })
        })
    } else {
      // retrieve data
      console.log("retrieve")
      this.contract.methods.publicData().call(function(error, response) {
        if (response) {
          console.log(response)
          let parsedResponse = JSON.parse(response)
          if (parsedResponse) {
            callback(error, parsedResponse)
          } else {
            callback(error, response)
          }
        } else {
          callback(error, '')
        }
      })
    }
  }

  publicKey(callback) {
    this.contract.methods.publicKey().call(callback)
  }

  // Approve / Deny Node request
  nodesGetPermission() {}

  nodesSetPermission() {}

  // Adds Node to the Approved list
  nodesApproveRequest() {}

  nodes() {}

  // Returns all Approved Nodes
  nodesStatusApproved() {}

  // Returns all Denied Nodes
  nodesStatusDenied() {}

  // Returns all Pending Nodes
  nodesStatusPending() {}
}

module.exports = Pool

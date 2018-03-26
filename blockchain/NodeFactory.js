let nodeFactoryJSON = require('../contract_abi/NodeFactory.json')
let Node = require('./Node')
let nodeFactoryABI = nodeFactoryJSON.abi

class NodeFactory {
  // Grab the configured web3 instance
  constructor() {
    this.web3 = global.web3
    this.contract = new this.web3.eth.Contract(nodeFactoryABI, global.nodeFactoryAddress)
    this.wallet = this.web3.eth.accounts.wallet[0]
  }

  addressForOwner(callback) {
    this.contract.methods.getNodeAddress().call({ from: this.wallet.address }, callback)
  }

  createNode(callback) {
    let self = this

    self.contract.methods.createNode().estimateGas({ from: self.wallet.address })
      .then(function(gasAmount) {
        // TODO Figure out the estimateGas function return
        self.contract.methods.createNode().send({ from: self.wallet.address, gas: gasAmount }, function(error, txHash) {
          callback(error, txHash)
        })
      })
  }
}

module.exports = NodeFactory

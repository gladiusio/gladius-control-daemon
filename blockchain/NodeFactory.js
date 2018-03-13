let nodeFactoryJSON = require('../build/contracts/NodeFactory.json')
let Node = require('./Node')
let nodeFactoryABI = nodeFactoryJSON.abi

class NodeFactory {
  // Grab the configured web3 instance
  constructor() {
    this.web3 = global.web3
    this.contract = new this.web3.eth.Contract(nodeFactoryABI, global.nodeFactoryAddress)
    this.wallet = this.web3.eth.accounts.wallet[0]
  }

  createNode(decryptedData, callback) {
    let self = this
    let stringifiedData = JSON.stringify(decryptedData)
    let encryptedData = Node.encryptData(global.privateKey, decryptedData)

    self.contract.methods.createNode(encryptedData).estimateGas({ from: self.wallet.address })
      .then(function(gasAmount) {
        self.contract.methods.createNode(encryptedData).call({ from: self.wallet.address, gas: gasAmount }, function(error, response) {
          console.log(response)
          callback(error, response)
        })
        self.contract.methods.createNode(encryptedData).send({ from: self.wallet.address, gas: gasAmount }, function(error, response) {
          console.log(response)
        })
      })
  }
}

module.exports = NodeFactory

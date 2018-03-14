// JS Node API
// web3.eth.call()

/***********************
 *    Node Signup      *
 ***********************/

let nodeJSON = require('../build/contracts/Node.json')
let nodeABI = nodeJSON.abi
let NodeRSA = require('node-rsa')

class Node {
  // Grab the configured web3 instance
  constructor(address = undefined) {
    this.web3 = global.web3
    this.contract = new this.web3.eth.Contract(nodeABI, address)
    this.wallet = this.web3.eth.accounts.wallet[0]
  }

  static encryptData(data) {
    let key = global.key
    let encryptedData = key.encrypt(data, 'base64')
    return encryptedData
  }

  static decryptData(data) {
    let key = global.key
    let decryptedData = key.decrypt(data, 'utf8')
    return JSON.parse(decryptedData)
  }

  // Add Private and Public Keys
  accountAddKeys() {}

  // Submit Node join request for Pool
  accountSubmitJoinRequest() {}

  /***********************
   *    Node Details     *
   ***********************/

  data(newData = null, callback) {
    let self = this

    if (newData) {
      let stringifiedData = JSON.stringify(newData)
      let encryptedData = Node.encryptData(stringifiedData)
      // set data
      self.contract.methods.setData(encryptedData).estimateGas({ from: self.wallet.address })
        .then(function(gasAmount) {
          self.contract.methods.setData(encryptedData).send({ from: self.wallet.address, gas: gasAmount }, callback)
        })
    } else {
      // retrieve data
      this.contract.methods.data().call(function(error, response) {
        if (response) {
          let data = Node.decryptData(response)
          callback(error, data)
        }
      })
    }
  }

  /***********************
   *    Node Status      *
   ***********************/

  accountApplyForPool(poolAddress, applicationData, callback) {
    // TODO Encrypt Data against Pool's publicKey
    let Pool = require('./PoolAPI')
    let pool = new Pool(this.web3, poolAddress)

    pool.methods.publicKey.call().then(function(publicKey) {
      // Run encryption
      let encryptedData = cryptoEncrypt(applicationData, publicKey)
      this.contract.methods.applyToPool(poolAddress, encryptedData).call(callback)
    })
  }

  // Returns the status of the Node for the given Pool Address
  accountStatusForPool(poolAddress, callback) {
    this.contract.methods.getStatus(poolAddress).call()
  }
}

module.exports = Node

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
  constructor() {
    this.web3 = global.web3
    this.contract = new this.web3.eth.Contract(nodeABI)
    this.wallet = this.web3.eth.accounts.wallet[0]
  }

  static encryptData(privateKey, data) {
    let key = new NodeRSA(privateKey)
    return key.encrypt(data, 'base64')
  }

  static decryptData(privateKey, data) {
    let key = new NodeRSA(privateKey)
    return key.decrypt(data, 'base64')
  }

  // Add Private and Public Keys
  accountAddKeys() {}

  // Submit Node join request for Pool
  accountSubmitJoinRequest() {}

  /***********************
   *    Node Details     *
   ***********************/
   
  // Returns the account details for the Node
  accountDetails(callback) {
    this.contract.methods.getData().call(callback)
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

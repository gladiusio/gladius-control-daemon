// JS Node API
// web3.eth.call()

/***********************
 *    Node Signup      *
 ***********************/

//let nodeABI = require('../build/contracts/Node.json')

class Node {

  // Grab the configured web3 instance
  constructor(web3) {
    this.web3 = web3
  }

  // Create Node
  accountCreate() {
    console.log('Create an Account')
  }

  // Add Private and Public Keys
  accountAddKeys() {}

  // Submit Node join request for Pool
  accountSubmitJoinRequest() {}

  /***********************
   *    Node Details     *
   ***********************/

  // Encrypts a payload against the Node's Public Key
  cryptoEncrypt() {}

  // Reads the local private key and decrypts payload
  cryptoDecrypt() {}

  // Returns the account details for the Node
  accountDetails() {}

  /***********************
   *    Node Status      *
   ***********************/

  // Returns the status of the Node for the given Pool Address
  accountStatusForPool() {}

}

module.exports = Node

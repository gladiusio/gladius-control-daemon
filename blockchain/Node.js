// JS Node API
// web3.eth.call()

/***********************
 *    Node Signup      *
 ***********************/

let nodeJSON = require('../build/contracts/Node.json')
let nodeABI = nodeJSON.abi

class Node {
  // Grab the configured web3 instance
  constructor() {
    this.web3 = global.web3
    this.contract = new this.web3.eth.Contract(nodeABI)
    this.wallet = this.web3.eth.accounts.wallet[0]
  }

  // Create Node
  accountCreate(accountJSON, callback) {
    // TODO verify accountJSON

    this.contract.deploy({
      data: nodeJSON.bytecode,
      arguments: [accountJSON]
    })
    .send({
        from: this.wallet.address,
        gas: 1500000,
        gasPrice: '30000000000000'
      })
      .on('error', function(error){
        console.log(error)
      })
      .on('transactionHash', function(transactionHash){
        console.log(transactionHash)
      })
      .on('receipt', function(receipt){
        console.log(receipt.contractAddress) // contains the new contract address
      })
      .on('confirmation', function(confirmationNumber, receipt){
        console.log(confirmationNumber)
        console.log(receipt)
      })
      .then(function(newContractInstance){
        console.log('Instance Made')
        console.log(newContractInstance.options.address) // instance with the new contract address
        this.contract = newContractInstance
        callback(null, newContractInstance)
      })
  }

  // Add Private and Public Keys
  accountAddKeys() {}

  // Submit Node join request for Pool
  accountSubmitJoinRequest() {}

  /***********************
   *    Node Details     *
   ***********************/

  // Encrypts a payload against the Node's Public Key
  cryptoEncrypt(dataIn, publicKey) {
    return dataIn
  }

  // Reads the local private key and decrypts payload
  cryptoDecrypt() {}

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

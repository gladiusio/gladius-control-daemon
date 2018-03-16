let nodeJSON = require('../build/contracts/Node.json')
let nodeABI = nodeJSON.abi
let kbpgp = require('kbpgp')

class Node {
  constructor(address = undefined) {
    this.web3 = global.web3
    this.contract = new this.web3.eth.Contract(nodeABI, address)
    this.wallet = this.web3.eth.accounts.wallet[0]
  }

  encryptData(data, callback) {
    let stringifiedData = JSON.stringify(data)

    let params = {
      msg: stringifiedData,
      encrypt_for: global.account,
      sign_with: global.account
    }

    global.kbpgp.box (params, function(err, result_string, result_buffer) {
      callback(JSON.stringify(result_string))
    })
  }

  decryptData(data, callback) {
    let ring = new kbpgp.keyring.KeyRing
    let pgpMsg = JSON.parse(data)
    ring.add_key_manager(global.account)

    kbpgp.unbox({keyfetch: ring, armored: pgpMsg }, function(err, literals) {
      if (err != null) {
        return console.log("Problem: " + err)
      } else {
        callback(JSON.parse(literals[0].toString()))
      }
    })
  }

  // Submit Node join request for Pool
  accountSubmitJoinRequest() {}

  data(newData = null, callback) {
    let self = this

    if (newData) {
      self.encryptData(newData, function(encryptedData) {
        // set data
        self.contract.methods.setData(encryptedData).estimateGas({ from: self.wallet.address })
          .then(function(gasAmount) {
            self.contract.methods.setData(encryptedData).send({ from: self.wallet.address, gas: gasAmount }, callback)
          })
      })
    } else {
      // retrieve data
      this.contract.methods.data().call(function(error, response) {
        if (response) {
          self.decryptData(response, function(decryptedData) {
            callback(error, decryptedData)
          })
        } else {
          callback(error, response)
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

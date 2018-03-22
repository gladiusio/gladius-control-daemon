let Web3 = require('web3')

class Status {
  constructor() {
    this.web3 = global.web3
  }

  checkTxHash(tx, callback) {
    this.web3.eth.getTransactionReceipt(tx, callback)
  }
}

module.exports = Status

let Web3 = require('web3')

class Status {
  constructor() {
    this.web3 = global.web3
  }

  checkTxHash(tx, callback) {
    let self = this

    self.web3.eth.getTransaction(tx, function(error, transaction) {
      self.web3.eth.getTransactionReceipt(tx, function(receiptError, receipt) {
        callback(null, { transaction: transaction, receipt: receipt })
      })
    })
  }
}

module.exports = Status

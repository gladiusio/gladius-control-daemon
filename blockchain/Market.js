let marketJSON = require('../contract_abi/Market.json')
let marketABI = marketJSON.abi

class Market {
  constructor(address) {
    this.web3 = global.web3
    this.contract = new this.web3.eth.Contract(marketABI, address)
    this.wallet = this.web3.eth.accounts.wallet[0]
  }

  owner(callback) {
    this.contract.methods.owner().call(callback)
  }

  pools(callback) {
    this.contract.methods.getAllPools().call(callback)
  }

  poolsOwned(owner = null, callback) {
    let self = this
    if (owner) {
      this.contract.methods.getOwnedPools(owner).call(callback)
    } else {
      this.contract.methods.getOwnedPools(self.wallet.address).call(callback)
    }
  }

  poolsCreate(publicKey, callback) {
    let self = this
    self.contract.methods.createPool(publicKey).estimateGas({ from: self.wallet.address })
      .then(function(gasAmount) {
        self.contract.methods.createPool(publicKey).send({ from: self.wallet.address, gas: gasAmount }, callback)
      })
  }

  clientAllocateFunds() {}
}

module.exports = Market

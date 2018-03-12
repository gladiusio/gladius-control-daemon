let Web3 = require('web3')

let Control = {}

Control.start = function(providerUrl, privateKey) {
  // Temporary import until migrated into main js file
  global.web3 = new Web3()
  let web3 = global.web3

  let provider = new web3.providers.HttpProvider(providerUrl)
  web3.setProvider(provider)

  // Fake Private Key
  let account = web3.eth.accounts.privateKeyToAccount(privateKey)
  global.web3.eth.accounts.wallet.add(account)

  // TODO temp Account address setting
  // global.web3.eth.accounts.wallet[0].address = '0xf17f52151ebef6c7334fad080c5704d77216b732'
  return {
    address: global.web3.eth.accounts.wallet[0].address,
    privateKey: privateKey,
    providerUrl: providerUrl,
    running: true
  }
}

module.exports = Control

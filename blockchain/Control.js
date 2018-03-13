let Web3 = require('web3')

let Control = {}

Control.start = function(providerUrl, privateKey, marketAddress, nodeFactoryAddress) {
  // Temporary import until migrated into main js file
  global.web3 = new Web3()
  let web3 = global.web3

  let provider = new web3.providers.HttpProvider(providerUrl)
  web3.setProvider(provider)

  // Fake Private Key
  let account = web3.eth.accounts.privateKeyToAccount(privateKey)
  global.web3.eth.accounts.wallet.add(account)

  // TODO temp Account address setting
  global.web3.eth.accounts.wallet[0].address = '0x627306090abab3a6e1400e9345bc60c78a8bef57'

  global.marketAddress = marketAddress
  global.nodeFactoryAddress = nodeFactoryAddress
  global.privateKey = privateKey

  return {
    address: global.web3.eth.accounts.wallet[0].address,
    privateKey: privateKey,
    providerUrl: providerUrl,
    marketAddress: marketAddress,
    nodeFactoryAddress: nodeFactoryAddress,
    running: true
  }
}

module.exports = Control

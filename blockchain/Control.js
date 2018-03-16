let Web3 = require('web3')
global.kbpgp = require('kbpgp')

let Control = {}

Control.start = function(providerUrl, privateKey, pgpKey, passphrase, marketAddress, nodeFactoryAddress) {
  // Temporary import until migrated into main js file
  global.web3 = new Web3()
  let web3 = global.web3

  let provider = new web3.providers.HttpProvider(providerUrl)
  web3.setProvider(provider)

  global.kbpgp.KeyManager.import_from_armored_pgp({
    armored: pgpKey
  }, function(err, account) {
    if (!err) {
      if (account.is_pgp_locked()) {
        account.unlock_pgp({
          passphrase: passphrase
        }, function(err) {
          if (!err) {
            global.account = account
            console.log("Loaded private key with passphrase")
          }
        })
      } else {
        console.log("Loaded private key w/o passphrase")
      }
    }
  })

  // Fake Private Key
  let account = web3.eth.accounts.privateKeyToAccount(privateKey)
  global.web3.eth.accounts.wallet.add(account)

  // TODO temp Account address setting
  global.web3.eth.accounts.wallet[0].address = '0x627306090abab3a6e1400e9345bc60c78a8bef57'

  global.marketAddress = marketAddress
  global.nodeFactoryAddress = nodeFactoryAddress
  global.privateKey = privateKey
  global.pgpKey = pgpKey
  global.passphrase = passphrase

  return {
    address: global.web3.eth.accounts.wallet[0].address,
    privateKey: privateKey,
    providerUrl: providerUrl,
    passphrase: passphrase,
    marketAddress: marketAddress,
    nodeFactoryAddress: nodeFactoryAddress,
    running: true
  }
}

module.exports = Control

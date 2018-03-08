//
// Temporary import until migrated into main js file
let Web3 = require('web3')
let web3 = new Web3()
let ganache = require("ganache-cli")
web3.setProvider(ganache.provider());
//let provider = new web3.providers.HttpProvider('http://127.0.0.1:8545')
//web3.setProvider(provider)

// Fake Private Key
let account = web3.eth.accounts.privateKeyToAccount('c607271a0dc04419443a02335834d157cba39d9c4bad4e955275119194000d05')
console.log(account)
web3.eth.accounts.wallet.add(account)


//let Pool = require('./PoolAPI')
//let pool = new Pool(web3)

//let Node = require('./NodeAPI')
//let node = new Node(web3)

//node.accountSet('c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3')

//node.accountWalletStatus()

//console.log(pool.contract)
let Market = require('./MarketAPI')
let market = new Market(web3, '0x6c9f4930f45b6137d4ef1550a86ff4b2822611de')

market.poolsCreate('fake_key', function(error, result) {
  console.log(error)
  console.log(result)
  let pools = market.pools(function(error, result) {
    console.log(error)
    console.log(result)
  })
})

//market.owner(function(error, result) {
//console.log(error)
//console.log(result)
//})


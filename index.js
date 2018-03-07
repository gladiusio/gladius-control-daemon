//
// Temporary import until migrated into main js file
let Web3 = require('web3')
let web3 = new Web3()
let provider = new web3.providers.HttpProvider('http://127.0.0.1:9545')
web3.setProvider(provider)

// Fake Private Key
let account = web3.eth.accounts.privateKeyToAccount('0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709')
web3.eth.accounts.wallet.add(account)


//let Pool = require('./PoolAPI')
//let pool = new Pool(web3)

//let Node = require('./NodeAPI')
//let node = new Node(web3)

//node.accountSet('c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3')

//node.accountWalletStatus()

//console.log(pool.contract)
let Market = require('./MarketAPI')
let market = new Market(web3, '0x30753e4a8aad7f8597332e813735def5dd395028')

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


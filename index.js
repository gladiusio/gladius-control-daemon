const express = require('express')
const app = express()
const bodyParser = require('body-parser')


// Temporary import until migrated into main js file
let Web3 = require('web3')
let web3 = new Web3()
// let ganache = require("ganache-cli")
// web3.setProvider(ganache.provider());
let provider = new web3.providers.HttpProvider('http://127.0.0.1:9545')
web3.setProvider(provider)

// Fake Private Key
let account = web3.eth.accounts.privateKeyToAccount('c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3')
web3.eth.accounts.wallet.add(account)

// TODO temp Account address setting
web3.eth.accounts.wallet[0].address = '0xf17f52151ebef6c7334fad080c5704d77216b732'

// Express API Setup
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/',function(req,res){
     res.sendFile('index.html', { root: __dirname + '/bin/www' })
})

app.use('/api', require('./routes/api'));

app.listen(3000, () => console.log('Running at http://localhost:3000'))

//let Pool = require('./PoolAPI')
//let pool = new Pool(web3)

// let Node = require('./NodeAPI')
// let node = new Node(web3)
//
// node.accountCreate('{ data: "none"}', function(error, result) {
//   console.log(result)
// })

//console.log(pool.contract)
// let Market = require('./MarketAPI')
// let market = new Market(web3, '0x6c9f4930f45b6137d4ef1550a86ff4b2822611de')

// market.poolsCreate('fake_key', function(error, result) {
//   console.log(error)
//   console.log(result)
//   let pools = market.pools(function(error, result) {
//     console.log(error)
//     console.log(result)
//   })
// })

//market.owner(function(error, result) {
//console.log(error)
//console.log(result)
//})

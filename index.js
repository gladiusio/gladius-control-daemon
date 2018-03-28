#!/usr/bin/env node

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Express API Setup
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/',function(req,res){
  res.sendFile('index.html', { root: __dirname + '/bin/www' })
})

app.use('/api', require('./routes/api'));

app.listen(3000, () => console.log('Running at http://localhost:3000'))

//let Pool = require('./blockchain/Pool')
//let pool = new Pool(web3)

// let Node = require('./blockchain/Node')
// let node = new Node(web3)
//
// node.accountCreate('{ data: "none"}', function(error, result) {
//   console.log(result)
// })

//console.log(pool.contract)
// let Market = require('./blockchain/Market')
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

//
// Temporary import until migrated into main js file
let Web3 = require('web3')
let web3 = new Web3()
web3.setProvider('ws://localhost:9545')

let Node = require('./NodeAPI')
let node = new Node(web3)

node.accountSet('KEY')

node.accountWalletStatus()

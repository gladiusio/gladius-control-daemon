let router = require('express').Router()
let Node = require('../../blockchain/Node')
let NodeFactory = require('../../blockchain/NodeFactory')

// api/products
router.get('/', function(req, res) {
  let domain = req.protocol + '://' + req.get('host') + req.baseUrl
  res.json({
    endpoints: {
      create: domain + '/create'
    }
  })
})

router.get('/:address', function(req, res) {
  let nodeAddress = req.params.address

  let domain = req.protocol + '://' + req.get('host') + req.baseUrl
  let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl

  let node = new Node(nodeAddress)

  node.data(null, function(error, data) {
    res.json({
      type: 'node',
      address: nodeAddress,
      data: data,
      endpoints: {
        create: domain + '/create',
        // applications: [
        //   fullUrl + '/status/' + 'poolAddressA',
        //   fullUrl + '/status/' + 'poolAddressB'
        // ],
        status: fullUrl + '/status'
      }
    })
  })
})

router.post('/:address/data', function(req, res) {
  try {
    let node = new Node(req.params.address)
    node.data(req.body, function(error, data) {
      res.json({
        data: req.body
      })
    })
  } catch(error) {
    console.log(error)
    res.json({
      error: "Node address provided is incorrect"
    })
  }
})

router.post('/create', function(req, res) {
  let domain = req.protocol + '://' + req.get('host') + req.baseUrl
  let factory = new NodeFactory()

  factory.createNode(function(error, nodeAddress) {
    res.json({
      address: nodeAddress,
      endpoints: {
        details: domain + '/' + nodeAddress + '/details',
        data: domain + '/' + nodeAddress + '/data',
        apply: domain + '/' + nodeAddress + '/apply',
      }
    })
  })
})

router.post('/:address/apply/:poolAddress?', function(req, res) {
  let domain = req.protocol + '://' + req.get('host') + req.baseUrl

  let nodeAddress = req.params.address
  let poolAddress = req.params.poolAddress

  if (poolAddress == null) {
     res.json({ error: 'poolAddress is missing in URL (/:address/apply/:poolAddress)'})
     return
  } else {
    try {
      let node = new Node(nodeAddress)
      node.data(null, function(error, data) {
        node.accountApplyForPool(poolAddress, data, function(error, response) {
          console.log(error)
          console.log(response)
        })
      })
    } catch(error) {
      console.log(error)
      res.json({
        error: "Pool address provided is incorrect"
      })
    }
  }

  // Run poolApplication
  res.json({
    data: 'Encrypted Data',
    poolAddress: poolAddress,
    status: 'Pending',
    endpoints: {
      node: domain + '/' + nodeAddress,
      status: domain + '/' + nodeAddress + '/status/' + poolAddress
    }
  })
})

router.get('/:address/status/:poolAddress?', function(req, res) {
  let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl

  let nodeAddress = req.params.address
  let poolAddress = req.params.poolAddress

  if (poolAddress == null) {
    res.json({
      status: 'Provide a pool address to view status',
      applications: [
        fullUrl + '/status/' + 'poolAddressA',
        fullUrl + '/status/' + 'poolAddressB'
      ]
    })
  } else {
    res.json({
      status: 'Pending',
      applications: [
        fullUrl + '/status/' + 'poolAddressA',
        fullUrl + '/status/' + 'poolAddressB'
      ]
    })
  }
})

module.exports = router

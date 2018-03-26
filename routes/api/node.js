let router = require('express').Router()
let Node = require('../../blockchain/Node')
let NodeFactory = require('../../blockchain/NodeFactory')

// api/products
router.get('/', function(req, res) {
  let domain = req.protocol + '://' + req.get('host') + req.baseUrl

  let factory = new NodeFactory()

  factory.addressForOwner(function(error, response) {
    res.json({
      address: response,
      endpoints: {
        create: domain + '/create'
      }
    })
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
      console.log(error)
      res.json({
        txHash: data,
        error: error
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
  let domain = req.protocol + '://' + req.get('host')
  let factory = new NodeFactory()

  factory.createNode(function(error, txHash) {
    res.json({
      txHash: txHash,
      endpoints: {
        status: domain + '/api/status/tx/' + txHash
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
          if (error) {
            res.json({
              message: "An error occurred while applying, this could be a duplicate request to apply. Check the current status before trying again.",
              endpoints: {
                node: domain + '/' + nodeAddress,
                status: domain + '/' + nodeAddress + '/status/' + poolAddress
              }
            })
          } else {
            res.json({
              poolAddress: poolAddress,
              status: 'Pending',
              tx: response,
              endpoints: {
                node: domain + '/' + nodeAddress,
                status: domain + '/' + nodeAddress + '/status/' + poolAddress
              }
            })
          }
        })
      })
    } catch(error) {
      console.log(error)
      res.json({
        error: "Node address provided is incorrect"
      })
    }
  }
})

router.get('/:address/status/:poolAddress?', function(req, res) {
  let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl

  let nodeAddress = req.params.address
  let poolAddress = req.params.poolAddress

  if (poolAddress == null) {
    res.json({
      status: 'Provide a pool address to view status'
    })
  } else {
    try {
      let node = new Node(nodeAddress)
      node.accountStatusForPool(poolAddress, function(error, status) {
        let statusInt = parseInt(status)
        let statusString

        switch (statusInt) {
          case 0:
            statusString = "Rejected"
            break;
          case 1:
            statusString = "Approved"
            break;
          case 2:
            statusString = "Pending"
            break;
          default:
            statusString = "Unknown"
        }

        res.json({
          code: statusInt,
          status: statusString,
          availableStatuses: [
            {
              status: "Rejected",
              code: 0
            },
            {
              status: "Approved",
              code: 1
            },
            {
              status: "Pending",
              code: 2
            },
          ]
        })
      })
    } catch(error) {
      console.log(error)
      res.json({
        error: "Node address provided is incorrect"
      })
    }
  }
})

module.exports = router

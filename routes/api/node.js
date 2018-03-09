var router = require('express').Router()

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

  // Get Pool Contract at address

  res.json({
    name: 'Node Owner Name',
    type: 'node',
    email: 'node@fake-address.com',
    address: nodeAddress,
    status: 'active',
    endpoints: {
      create: domain + '/create',
      applications: [
        fullUrl + '/status/' + 'poolAddressA',
        fullUrl + '/status/' + 'poolAddressB'
      ],
      status: fullUrl + '/status'
    }
  })
})

router.post('/create', function(req, res) {
  let domain = req.protocol + '://' + req.get('host') + req.baseUrl

  // TODO Create Node

  let nodeAddress = '0x937492739472394729'

  res.json({
    data: 'Encrypted Data',
    address: nodeAddress,
    endpoints: {
      poolApplication: domain + '/' + nodeAddress + '/apply',
    }
  })
})

router.get('/:address/apply/:poolAddress?', function(req, res) {
  let domain = req.protocol + '://' + req.get('host') + req.baseUrl

  let nodeAddress = req.params.address
  let poolAddress = req.params.poolAddress

  if (poolAddress == null) {
     res.json({ error: 'poolAddress is missing in URL (/:address/apply/:poolAddress)'})
     return
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

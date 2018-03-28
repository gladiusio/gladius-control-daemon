let router = require('express').Router()
let Market = require('../../blockchain/Market')
let Pool = require('../../blockchain/Pool')

// GET Pool
router.get('/', function(req, res) {
  let domain = req.protocol + '://' + req.get('host') + req.baseUrl

  let market = new Market(global.marketAddress)

  market.poolsOwned(null, function(error, response) {
    res.json({
      ownedPools: response,
      endpoints: {
        create: domain + '/create'
      }
    })
  })
})

router.get('/:address', function(req, res) {
  let poolAddress = req.params.address
  let pool = new Pool(poolAddress)

  let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl

  try {
    let pool = new Pool(req.params.address)
    let publicData = pool.publicData(null, function(error, publicData) {
      res.json({
        address: poolAddress,
        data: publicData,
        endpoints: {
          join: fullUrl + '/join',
          status: fullUrl + '/status'
        }
      })
    })
  } catch(error) {
    res.json({
      error: "Pool address provided is incorrect"
    })
  }
})

router.get('/:address/publicData', function(req, res) {
  try {
    let pool = new Pool(req.params.address)
    let publicData = pool.publicData(null, function(error, publicData) {
      res.json({
        publicData: publicData
      })
    })
  } catch(error) {
    res.json({
      error: "Pool address provided is incorrect"
    })
  }
})

router.post('/:address/publicData', function(req, res) {
  try {
    let pool = new Pool(req.params.address)
    pool.publicData(req.body, function(error, data) {
      res.json({
        publicData: req.body,
        txHash: data,
        error: error
      })
    })
  } catch(error) {
    console.log(error)
    res.json({
      error: error
    })
  }
})

router.get('/:address/publicKey', function(req, res) {
  try {
    let pool = new Pool(req.params.address)
    pool.publicKey(function(error, publicKey) {
      console.log(error)
      console.log(publicKey)
      res.json({
        publicKey: publicKey
      })
    })
  } catch(error) {
    res.json({
      error: "Pool address provided is incorrect"
    })
  }
})

router.get('/:address/nodes', function(req, res) {
  try {
    let pool = new Pool(req.params.address)
    pool.nodes(function(error, nodes) {
      res.json({
        nodes: nodes
      })
    })
  } catch(error) {
    res.json({
      error: "Pool address provided is incorrect"
    })
  }
})

router.get('/:address/nodes/data', function(req, res) {
  try {
    let pool = new Pool(req.params.address)
    pool.nodesWithData(function(error, data) {
      res.json({
        nodes: data
      })
    })
  } catch(error) {
    res.json({
      error: "Pool address provided is incorrect"
    })
  }
})

router.put('/:address/nodes/:nodeAddress/status', function(req, res) {
  try {
    let pool = new Pool(req.params.address)
    let nodeAddress = req.params.nodeAddress
    let code = req.body.code

    pool.nodeStatus(nodeAddress, code, function(error, response) {
      res.json({
        txHash: response
      })
    })
  } catch(error) {
    console.log(error)
    res.json({
      error: "Pool address provided is incorrect"
    })
  }
})

// Might use
function getPool(address) {
  try {
    let pool = new Pool(req.params.address)
    return (null, pool)
  } catch(error) {
    return ({
      error: "Pool address provided is incorrect"
    }, null)
  }
}

module.exports = router

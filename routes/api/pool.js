let router = require('express').Router()
let Pool = require('../../blockchain/Pool')

// GET Pool
router.get('/:address', function(req, res) {
  let poolAddress = req.params.address
  let pool = new Pool(poolAddress)

  let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl

  // Get Pool Contract at address

  res.json({
    name: 'Pool Name',
    location: 'United States',
    rating: '4.5',
    nodeCount: '23',
    maxBandwidth: '12',
    speed: {
      value: '23',
      unit: 'ms'
    },
    price: {
      value: '4',
      unit: 'Fake Money'
    },
    address: poolAddress,
    endpoints: {
      join: fullUrl + '/join',
      status: fullUrl + '/status'
    }
  })
})

router.get('/:address/join', function(req, res) {

})

router.get('/:address/status', function(req, res) {

})

router.get('/:address/data', function(req, res) {
  try {
    let pool = new Pool(req.params.address)
    let data = pool.data(null, function(error, data) {
      res.json({
        data: data
      })
    })
  } catch(error) {
    res.json({
      error: "Pool address provided is incorrect"
    })
  }
})

router.post('/:address/data', function(req, res) {
  try {
    let pool = new Pool(req.params.address)
    pool.data(req.body, function(error, data) {
      res.json({
        data: req.body
      })
    })
  } catch(error) {
    res.json({
      error: "Pool address provided is incorrect"
    })
  }
})

router.get('/:address/publicKey', function(req, res) {
  try {
    let pool = new Pool(req.params.address)
    pool.publicKey(function(error, publicKey) {
      if (!error) {
        res.json({
          publicKey: publicKey
        })
      } else {
        res.json({
          error: error
        })
      }
    })
  } catch(error) {
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

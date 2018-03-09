let router = require('express').Router()

// GET Pool
router.get('/:address', function(req, res) {
  let poolAddress = req.params.address

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

module.exports = router

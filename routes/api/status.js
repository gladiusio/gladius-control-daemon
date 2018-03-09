let router = require('express').Router()

// api/products
router.get('/', function(req, res) {
  res.json({
    api: true,
    daemons: {
      control: true,
      network: true
    }
  })
})

router.put('/', function(req, res) {
  let statusRequest = req.body

  let dControl = statusRequest.daemons.control
  let nControl = statusRequest.daemons.network

  // TODO toggle CLI state

  console.log(req.body)
  res.json({
    api: true,
    daemons: {
      control: dControl,
      network: nControl
    }
  })
})

module.exports = router

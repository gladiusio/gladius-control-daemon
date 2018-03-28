let router = require('express').Router()
let Status = require('../../blockchain/Status')

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

  res.json({
    api: true,
    daemons: {
      control: dControl,
      network: nControl
    }
  })
})

router.get('/tx/:tx', function(req, res) {
  let status = new Status()
  let tx = req.params.tx

  status.checkTxHash(tx, function(error, response) {
    res.json(response)
  })
})

module.exports = router

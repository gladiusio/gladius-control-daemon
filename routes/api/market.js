let router = require('express').Router()
let Market = require('../../blockchain/Market')
let Pool = require('../../blockchain/Pool')

// api/products
router.get('/pools', function(req, res) {
  let market = new Market(global.marketAddress)
  let poolObjects = []

  let completed = 0

  market.pools(function(error, addresses) {
    if (addresses.length == 0) {
      res.json({
        pools: []
      })
    }

    for (let poolAddress of addresses) {
      let pool = new Pool(poolAddress)
      pool.publicData(null, function(error, response) {
        poolObjects.push({address: poolAddress, data: response})
        completed++
        // TODO not the best way to handle this synchronously
        if (completed == addresses.length) {
          res.json({
            pools: poolObjects
          })
        }
      })
    }
  })
})

router.post('/pools/create', function(req, res) {
  let domain = req.protocol + '://' + req.get('host')

  let market = new Market(global.marketAddress)
  let publicKey = req.body.publicKey

  market.poolsCreate(publicKey, function(error, txHash) {
    console.log(error)
    res.json({
      txHash: txHash,
      endpoints: {
        status: domain + '/api/status/tx/' + txHash
      }
    })
  })
})

module.exports = router

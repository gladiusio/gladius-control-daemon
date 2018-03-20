let router = require('express').Router()
let Market = require('../../blockchain/Market')
let Pool = require('../../blockchain/Pool')

// api/products
router.get('/pools', function(req, res) {
  let market = new Market(global.marketAddress)
  let poolObjects = []

  let completed = 0

  market.pools(function(error, addresses) {
    for (let poolAddress of addresses) {
      let pool = new Pool(poolAddress)
      pool.data(null, function(error, response) {
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

module.exports = router

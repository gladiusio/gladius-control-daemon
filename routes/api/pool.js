var router = require('express').Router()

// api/products
router.get('/', function(req, res) {
  res.json({
    placeholder: 'hey there'
  })
})

module.exports = router

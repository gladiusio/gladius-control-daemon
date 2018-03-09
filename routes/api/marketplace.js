let router = require('express').Router()

// api/products
router.get('/pools', function(req, res) {
  res.json({
    placeholder: 'hey there'
  })
})

module.exports = router

var router = require('express').Router()

// split up route handling
router.use('/status', require('./status'))
router.use('/market', require('./market'))
router.use('/pool', require('./pool'))
router.use('/client', require('./client'))
router.use('/node', require('./node'))
router.use('/settings', require('./settings'))

module.exports = router

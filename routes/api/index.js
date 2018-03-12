var router = require('express').Router()

// split up route handling
router.use('/status', require('./status'))
router.use('/marketplace', require('./marketplace'))
router.use('/pool', require('./pool'))
router.use('/client', require('./client'))
router.use('/node', require('./node'))
router.use('/settings', require('./settings'))

module.exports = router

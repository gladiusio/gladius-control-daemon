let router = require('express').Router()
let Control = require('../../blockchain/Control')

let address
let privateKey
let providerUrl

router.get('/', function(req, res) {

  let domain = req.protocol + '://' + req.get('host') + req.baseUrl

  let running = false
  let message

  if (address && privateKey && providerUrl) {
    running = true
  } else {
    message = 'Server not running, see endpoints to configure & start'
  }

  res.json({
    running: running,
    privateKey: privateKey,
    address: address,
    providerUrl: providerUrl,
    message: message,
    endpoints: {
      start: domain + '/start'
    }
  })
})

router.post('/start', function(req, res) {
  let reqProviderUrl = req.body['provider']
  let reqPrivateKey = req.body['privateKey']

  let response = Control.start(reqProviderUrl, reqPrivateKey)

  address = response.address
  privateKey = response.privateKey
  providerUrl = response.providerUrl

  res.json(response)
})

module.exports = router

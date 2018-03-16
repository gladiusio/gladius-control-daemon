# Control Daemon REST API Docs

URL will usually be in the 'http://localhost/' format.

## All Endpoints

### Status

* `GET  /api/status/` : [Get Status](status/README.md#get-)
* `PUT /api/status/` : [Update Status](status/README.md#put-)

### Settings

* `GET  /api/settings/` : [Get Settings](settings/README.md#get-)
* `POST /api/settings/` : [Initialize Settings](status/README.md#post-)

### Node

* `GET  /api/node/` : [Node Base](node/README.md#get-)
* `GET  /api/node/:address` : [Node Details](node/README.md#get-node)
* `POST /api/node/create` : [Create Node](node/README.md#post-create)
* `POST /api/node/:address` : [Add Node Data](node/README.md#post-node-data)
* `GET  /api/node/:address/apply` : [Get Node Application](node/README.md#get-node-apply)
* `POST /api/node/:address/apply/:poolAddress` : [Apply to Pool](node/README.md#post-node-apply-pool)
* `POST /api/node/:address/status/:poolAddress` : [Node Application](node/README.md#get-node-application)

### Pool

* `GET  /api/pool/` : [Pool Base](pool/README.md#get-)
* `GET  /api/pool/:address/publicKey` : [Pool Public Key](pool/README.md#get-public-key)
* `GET  /api/pool/:address/data` : [Pool Public Data](pool/README.md#get-public-data)
* `POST /api/pool/:address/data` : [Pool Public Data](pool/README.md#post-public-data)

## Notes
The above methods are subject to change but breaking changes will be tagged as such.

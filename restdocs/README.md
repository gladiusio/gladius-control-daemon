# Control Daemon REST API Docs

URL will usually be in the 'http://localhost/' format.

## All Endpoints

### Status

* [Get Status](status/README.md#get-) : `GET /api/status/`
* [Update Status](status/README.md#put-) : `PUT /api/status/`

### Settings

* [Get Settings](settings/README.md#get-) : `GET /api/settings/`
* [Initialize Settings](status/README.md#post-) : `POST /api/settings/`

### Node

* [Get Node Base](node/README.md#get-) : `GET /api/node/`
* [Get Node](node/README.md#get-node) : `GET /api/node/:address`
* [Create Node](node/README.md#post-create) : `POST /api/node/create`
* [Add Node Data](node/README.md#post-node-data) : `POST /api/node/:address`
* [Get Node Application](node/README.md#get-node-apply) : `GET /api/node/:address/apply`
* [Apply to Pool](node/README.md#post-node-apply-pool) : `POST /api/node/:address/apply/:poolAddress`
* [Node Application](node/README.md#get-node-application) : `POST /api/node/:address/status/:poolAddress`

### Pool

* [Get Pool Base](pool/README.md#get-) : `GET /api/pool/`
* [Get Pool Public Key](pool/README.md#get-public-key) : `GET /api/pool/:address/publicKey`
* [Get Pool Public Data](pool/README.md#get-public-data) : `GET /api/pool/:address/data`
* [Post Pool Public Data](pool/README.md#post-public-data) : `POST /api/pool/:address/data`

## Notes
The above methods are subject to change but breaking changes will be tagged as such.

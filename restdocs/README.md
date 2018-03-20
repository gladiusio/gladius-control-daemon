# Control Daemon REST API Docs

URL will usually be in the 'http://localhost/' format.

## All Endpoints

### Status

* `GET  /api/status/` : [Get Status](status/README.md#get-)
* `PUT /api/status/` : [Update Status](status/README.md#put-)

### Settings

* `GET  /api/settings/` : [Get Settings](settings/README.md#get-)
* `POST /api/settings/` : [Initialize Settings](status/README.md#post-start)

### Node

* `GET  /api/node/` : [Node Base](node/README.md#get-node)
* `POST /api/node/create` : [Create Node](node/README.md#post-nodecreate)
* `GET  /api/node/:address` : [Node Details](node/README.md#get-nodeaddress)
* `POST /api/node/:address/data` : [Add Node Data](node/README.md#get-post-nodeaddressdata)
* `GET  /api/node/:address/apply` : [Get Node Application](node/README.md#post-nodeaddressapplypooladdress)
* `POST /api/node/:address/apply/:poolAddress` : [Apply to Pool](node/README.md#post-nodeaddressapplypooladdress)
* `POST /api/node/:address/status/:poolAddress` : [Node Application](node/README.md#get-nodeaddressstatuspooladdress)

### Pool

* `GET  /api/pool/:address` : [Pool Details](pool/README.md#get-pooladdress)
* `GET  /api/pool/:address/publicKey` : [Pool Public Key](pool/README.md#get-pooladdresspublickey)
* `GET  /api/pool/:address/data` : [Pool Public Data](pool/README.md#get-post-pooladdressdata)
* `POST /api/pool/:address/data` : [Pool Public Data](pool/README.md#get-post-pooladdressdata)

### Market

* `GET  /api/market/pools` : [Retrieve all Pools](market/README.md#get-pools)

## Notes
The above methods are subject to change but breaking changes will be tagged as such.

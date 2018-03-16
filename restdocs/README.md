# Control Daemon REST API Docs

URL will usually be in the 'http://localhost/' format.

## All Endpoints

### Status

* [Update Status](status/README.md#PUT) : `PUT /api/status/`
* [Get Status](status/README.md#GET) : `GET /api/status/`

### Settings


### Node


### Pool

* [Join a pool](pools/join.md) : `POST /api/pools/join/`
* [List all pools](pools/list.md) : `GET /api/pools/`
* [Check join status](pools/check.md) : `GET /api/pools/check`

## Notes
The above methods are subject to change but breaking changes will be tagged as such.

# GET /node

Get the root of the node endpoints to list available actions

**URL** : `/api/node`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

Initial endpoint for node, gives available endpoints that can be accessed

```json
{
	"endpoints": {
		"create": "http://localhost:3000/api/node/create"
	}
}
```

## Notes

* More endpoints may be added in the future

# POST /node/create

Create a new node

**URL** : `/api/node/create`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

Initial endpoint for node, gives available endpoints that can be accessed

*Some properties may be added or removed during development, especially in `data`*

```json
{
	"address": "0x5241Eb39da845bfEA23Fe4096AE0176B28Ac6C7F",
	"endpoints": {
    "details": "http://localhost:3000/api/node/0x5241Eb39da845bfEA23Fe4096AE0176B28Ac6C7F",
    "data": "http://localhost:3000/api/node/0x5241Eb39da845bfEA23Fe4096AE0176B28Ac6C7F/data",
		"apply": "http://localhost:3000/api/node/0x5241Eb39da845bfEA23Fe4096AE0176B28Ac6C7F/apply"
	}
}
```

# GET /node/:address

Get the details of a node, only the owner of the node's private key can see the `data` field

**URL** : `/api/node/:address`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

Initial endpoint for node, gives available endpoints that can be accessed

*Some properties may be added or removed during development, especially in `data`*

```json
{
	"type": "node",
	"address": "0x5241Eb39da845bfEA23Fe4096AE0176B28Ac6C7F",
	"data": {
		"name": "Node Owner Name",
		"email": "node@node-address.com",
		"status": "active"
	},
	"endpoints": {
		"create": "http://localhost:3000/api/node/create",
		"status": "http://localhost:3000/api/node/0x5241Eb39da845bfEA23Fe4096AE0176B28Ac6C7F/status"
	}
}
```

# GET POST /node/:address/data

Get the details of a node, only the owner of the node's private key can see the `data` field

**URL** : `/api/node/:address/data`

**Method** : `GET` `POST`

**Auth required** : NO

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

Initial endpoint for node, gives available endpoints that can be accessed

*Some properties may be added or removed during development, especially in `data`*

```json
{
	"type": "node",
	"address": "0x5241Eb39da845bfEA23Fe4096AE0176B28Ac6C7F",
	"data": {
		"name": "Node Owner Name",
		"email": "node@node-address.com",
		"status": "active"
	},
	"endpoints": {
		"create": "http://localhost:3000/api/node/create",
		"status": "http://localhost:3000/api/node/0x5241Eb39da845bfEA23Fe4096AE0176B28Ac6C7F/status"
	}
}
```

# POST /node/:address/apply/:poolAddress

Apply node `address` to pool `poolAddress`

**URL** : `/api/node/:address/apply/:poolAddress`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Request Payload**

*Some properties may be added or removed during development and have not been finalized*

```json
{
  "name": "Node Owner Name",
  "email": "node@node-address.com"
}
```

**Content examples**

Gives available endpoints that can be accessed

```json
{
	"data": "Encrypted data sent to Pool",
	"poolAddress": "0xf2beae25b23f0ccdd234410354cb42d08ed54981",
	"status": "Pending",
	"endpoints": {
		"node": "http://localhost:3000/api/node/0x5241Eb39da845bfEA23Fe4096AE0176B28Ac6C7F",
		"status": "http://localhost:3000/api/node/0x5241Eb39da845bfEA23Fe4096AE0176B28Ac6C7F/status/0xf2beae25b23f0ccdd234410354cb42d08ed54981"
	}
}
```

# GET /node/:address/status/:poolAddress

Retrieve the status of the node application to the pool

**URL** : `/api/node/:address/status/:poolAddress`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
	"status": "Pending",
	"applications": [
		"http://localhost:3000/api/node/0x5241Eb39da845bfEA23Fe4096AE0176B28Ac6C7F/status/0x4957839572394/status/0xf2beae25b23f0ccdd234410354cb42d08ed54981"
	]
}
```

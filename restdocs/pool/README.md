# GET /pool/:address

Get the detail of pool

**URL** : `/api/pool/:address`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

*Some properties may be removed for security*

Returns the details of the pool

```json
{
	"name": "Pool Name",
	"location": "United States",
	"rating": "4.5",
	"nodeCount": "23",
	"maxBandwidth": "12",
	"speed": {
		"value": "23",
		"unit": "ms"
	},
	"price": {
		"value": "4",
		"unit": "GLA"
	},
	"address": "0xf2beae25b23f0ccdd234410354cb42d08ed54981",
	"endpoints": {
		"join": "http://localhost:3000/api/pool/0xf2beae25b23f0ccdd234410354cb42d08ed54981/join",
		"status": "http://localhost:3000/api/pool/0xf2beae25b23f0ccdd234410354cb42d08ed54981/status"
	}
}
```

# GET /pool/:address/publicKey

Get the public key of pool

**URL** : `/api/pool/:address/publicKey`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

*Some properties may be removed for security*

Returns the public key of the pool

```json
{
	"publicKey": "Pool's Key"
}
```

# GET POST /pool/:address/data

Get or replace the pool's public data

**URL** : `/api/pool/:address/data`

**Method** : `GET` `POST`

**Auth required** : NO

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Request Data**

```json
{
	"name": "New Pool",
	"location": "United States",
	"rating": "4.5",
	"nodeCount": "23",
	"maxBandwidth": "12",
	"speed": {
		"value": "23",
		"unit": "ms"
	},
	"price": {
		"value": "4",
		"unit": "GLA"
	}
}
```

**Content examples**

Initial endpoint for node, gives available endpoints that can be accessed

*Some properties may be added or removed during development, especially in `data`*

```json
{
	"name": "New Pool",
	"location": "United States",
	"rating": "4.5",
	"nodeCount": "23",
	"maxBandwidth": "12",
	"speed": {
		"value": "23",
		"unit": "ms"
	},
	"price": {
		"value": "4",
		"unit": "GLA"
	}
}
```

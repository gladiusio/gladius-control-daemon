# GET /market/pools

Get the details of all pools in a market

**URL** : `/api/market/pools`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

Array of Pools with public data included

```json
{
	"pools": [
		{
			"address": "0xf2BeaE25b23F0cCDd234410354Cb42D08eD54981",
			"data": {
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
		}
	]
}
```

# GET /

Get the current status of the daemon (running/stopped)

**URL** : `/api/settings`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

The control daemon is connected to the blockchain

*Some properties may be removed for security*

```json
{
	"running": true,
	"privateKey": "Wallet Private Key",
	"address": "Wallet Address",
	"marketAddress": "Market Address",
	"nodeFactoryAddress": "Node Factory Address",
	"providerUrl": "http://127.0.0.1:9545",
	"endpoints": {
		"start": "http://localhost:3000/api/settings/start"
	}
}
```

The API has not been configured using the `/api/settings/start`

```json
{
	"running": false,
	"message": "Server not running, see endpoints to configure & start",
	"endpoints": {
		"start": "http://localhost:3000/api/settings/start"
	}
}
```

## Notes

* The private key can be generated from [here](https://pgpkeygen.com/), please use a

# POST /start

Start the control daemon with the provided configuration payload

**URL** : `/api/settings/start`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Request Payload**

```json
{
	"provider": "http://127.0.0.1:9545",
	"privateKey": "Wallet Private Key",
	"pgpKey": "-----BEGIN PGP PRIVATE KEY BLOCK----\n\n-----END PGP PRIVATE KEY BLOCK-----\n",
	"passphrase": "PGP Private Key Passphrase",
  "marketAddress": "Market Address",
	"nodeFactoryAddress": "Node Factory Address",
}
```

## Success Response

**Code** : `200 OK`

**Content examples**

The control daemon is connected to the blockchain

*Some properties may be removed for security*

```json
{
	"running": true,
	"privateKey": "Wallet Private Key",
	"address": "Wallet Address",
	"marketAddress": "Market Address",
	"nodeFactoryAddress": "Node Factory Address",
	"providerUrl": "http://127.0.0.1:9545",
	"endpoints": {
		"start": "http://localhost:3000/api/settings/start"
	}
}
```

The API has not been configured using the `/api/settings/start`

```json
{
	"running": false,
	"message": "Server not running, see endpoints to configure & start",
	"endpoints": {
		"start": "http://localhost:3000/api/settings/start"
	}
}
```

## Notes

* The private key can be generated from [here](https://pgpkeygen.com/), please use a

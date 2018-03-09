# Get the status of the application to that pool

Get the details of the currently Authenticated User along with basic
subscription information.

**URL** : `/api/pools/check/:pool/`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

Returns the status of that application. Can be "pending", "accepted", or "denied".

```json
{
  "status": "pending"
}
```

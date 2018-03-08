# Get a list of all pools available in the marketplace

Get the details of the currently Authenticated User along with basic
subscription information.

**URL** : `/api/pools/`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

Returns a list of pool objects

```json
{
  "pools": [
    {
      "pool_name": "Name here",
      "pool_desc": "Description here",
      "pool_address": "Address here"
    }
  ]
}
```

## Notes

* If the User does not have a `UserInfo` instance when requested then one will
  be created for them.

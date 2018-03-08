# Join a pool

Join the specified pool with the application information. 

**URL** : `/api/pools/join`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints**

Provide information to the daemon (which it encrypts) and sends to the specified pool.

```json
{
    "pool_id": "some address here",
    "init_info":{
      name: "",
      email: ""
    }
}
```

## Success Response

**Condition** : All went well, the pool exists, and they provided complete information.

**Code** : `201 CREATED`

**Content example**

```json
{
    "pool_id": "address",
    "encrypted_data": "here",
    "join_status": "pending"
}
```

## Error Responses

**Condition** : If pool has already been applied to.

**Code** : `409 CONFLICT`

**Content** : `{}`

### Or

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "name": [
        "This field is required."
    ]
}
```

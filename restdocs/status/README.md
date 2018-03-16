# GET /

Get the current status of the daemon (running/stopped)

**URL** : `/api/status/`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

The node is currently ready to serve content

```json
{
    "network_daemon": true,
    "control_daemon": true
}
```

The node is not ready to serve content

```json
{
    "network_daemon": false,
    "control_daemon": false
}
```

## Notes

* The network daemon will return be false if it is either not ready to serve content (user asked to stop) or there is an error (not running or other problem).

# PUT

Allows the user to set whether they want to serve content or not. Will inform the pool and open/close the networking.

**URL** : `/api/status/`

**Method** : `PUT`

**Auth required** : NO

**Permissions required** : None

**Data to provide**

```json
{
    "status": true
}
```

Note that we are setting only the overall status and not indiviudal daemon status.


## Success Responses

**Condition** : Data is valid and the status can be changed.

**Code** : `200 OK`

**Content example** : Response will reflect back the updated information.

```json
{
    "status": true,
    "more_data": {
       "network_daemon": true,
       "control_daemon": true
    }
}
```

## Error Response

**Condition** : If provided data is invalid or cannot comlete request

**Code** : `400 BAD REQUEST`

**Content example** :

```json
{
    "status": "Error: status can't be changed"
}
```

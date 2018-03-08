# Get the status of the daemon

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

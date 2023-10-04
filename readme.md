# A-Frame Starter Template

This is a generic template of a working A-Frame XR scene, with a spinning cube. Uses WebXR and can be launched from both desktop or the Quest browser. Needs node.js.

## Usage

- `npm install`
- WebXR must be served over HTTPS to be used on VR devices. Generate `server.cert` and `server.key` using OpenSSL, and place them in the subfolder `certs-self-signed`. Check `making-certs.md` in that folder for details.
- `node ./app.js`, then navigate to `{localhost OR your local IP address}:3000`. 

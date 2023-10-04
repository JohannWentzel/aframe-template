You need to make two files that go in this folder: `server.cert` and `server.key`. 

I generate self-signed certificates using Git Bash (Windows), with this command: `openssl req -nodes -new -x509 -keyout server.key -out server.cert`. That command should work with Mac/Linux too.
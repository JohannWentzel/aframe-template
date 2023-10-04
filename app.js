// Requiring in-built https for creating
// https server
const https = require("https");

// Express for handling GET and POST request
const express = require("express");
const app = express();

// Requiring file system to use local files
const fs = require("fs");

// Parsing the form of body to take
// input from forms
const bodyParser = require("body-parser");

// Configuring express to use body-parser
// as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/components', express.static(__dirname + '/components'));

// Get request for root of the app
app.get("/", function (req, res) {
    // Sending index.html to the browser
    res.sendFile(__dirname + "/index.html");
});

// Creating object of key and certificate
// for SSL
const options = {
    key: fs.readFileSync("./certs-self-signed/server.key"),
    cert: fs.readFileSync("./certs-self-signed/server.cert"),
};

// Creating https server by passing
// options and app object
https.createServer(options, app).listen(3000, function (req, res) {
    console.log("Server started at port 3000");
});

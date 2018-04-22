// HTTP module
const http = require("http");

// Port Setup
const goodPort = 7000;
const badPort = 7500;

// Handle requests, one for each server - One(Good) & Two (Bad)
function goodHandleRequest(request, response) {
  response.end("You Really Know your Stuff!!");
}

function badHandleRequest(request, response) {
  response.end("Geezz, Go get some Help, please...");
}

// Create our servers
let goodServer = http.createServer(goodHandleRequest);
let badServer = http.createServer(badHandleRequest);

// Starting our servers
goodServer.listen(goodPort, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log(`Server listening on: http://localhost: ${goodPort}`);
});

badServer.listen(badPort, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log(`Server listening on: http://localhost: ${badPort}`);
});

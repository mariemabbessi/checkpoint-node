var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("HELLO WORLD\n");
  })
  .listen(8081);
  console.log('HELLO WORLD');

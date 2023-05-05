var http = require('http');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log(
      `Connected at: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    );
    res.end(
      `Hello ${new Date().getHours()}:${new Date().getMinutes()}`
    );
  })
  .listen(8080);

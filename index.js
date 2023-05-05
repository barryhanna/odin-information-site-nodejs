const http = require('http');
const fs = require('fs');

http
  .createServer(function (req, res) {
    console.log(req.method);
    console.log(req.url);

    let path = './';
    switch (req.url) {
      case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
      case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
      case '/contact':
        path += 'contact-me.html';
        res.statusCode = 200;
        break;
      case '/styles.css':
        path += 'styles.css';
        res.statusCode = 200;
        break;
      case '/favicon.ico':
        path += 'favicon.ico';
        res.statusCode = 200;
        break;
      default:
        path += '404.html';
        res.statusCode = 404;
    }

    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.end(data);
      }
    });
  })
  .listen(8080);

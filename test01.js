const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(8080, '172.31.32.198'); // Or 8081 or 8082 instead of 8080. Or '127.0.0.1' instead of 'localhost'.
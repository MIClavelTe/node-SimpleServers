const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  homeRoute(req, res);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function homeRoute(req, res) {
  if (req.url == "/") {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Header\n');
    res.end('End\n');
  }  
}
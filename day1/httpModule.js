//Learning the http module in Node.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World\n');
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

server.on('error', (err) => {
  console.error('Server error:', err);
});
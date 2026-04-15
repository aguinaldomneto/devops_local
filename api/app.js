const http = require('http');

http.createServer((req, res) => {
  res.end('API funcionando 🚀');
}).listen(3000);

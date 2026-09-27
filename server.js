// Tiny dependency-free local server for the HARMORA demo.
const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const types = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.jpg':'image/jpeg','.png':'image/png'};
http.createServer((req,res) => {
  const file = path.normalize(path.join(root, req.url === '/' ? 'index.html' : decodeURIComponent(req.url)));
  if (!file.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(file, (err,data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, {'Content-Type':types[path.extname(file)] || 'application/octet-stream'}); res.end(data);
  });
}).listen(4173, () => console.log('HARMORA running at http://localhost:4173'));

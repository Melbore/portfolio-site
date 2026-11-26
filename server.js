// Мини-сервер для локального просмотра: node server.js
// Только стандартная библиотека Node.js — ничего устанавливать не нужно.
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
};

http
  .createServer((req, res) => {
    const file = req.url === '/' ? 'index.html' : req.url.slice(1);
    const filePath = path.join(__dirname, file);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('Не найдено');
      }
      res.writeHead(200, { 'Content-Type': types[path.extname(filePath)] || 'text/plain; charset=utf-8' });
      res.end(data);
    });
  })
  .listen(port, () => console.log(`Сайт доступен: http://localhost:${port}`));

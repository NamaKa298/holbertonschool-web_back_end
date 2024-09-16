const http = require('http');

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(process.env.PORT || 1245);

module.exports = app;

const http = require('http');


  const server = http.createServer((req, res) => {
      res.end('Hello Holberton School!');
  });
  
  server.listen(process.env.PORT || 1245);
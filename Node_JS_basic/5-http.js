const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    // Capture la sortie console.log() de countStudents
    let oldLog = console.log;
    let logOutput = '';
    
    console.log = function(message) {
      logOutput += message + '\n';
    };

    countStudents(database)
      .then(() => {
        console.log = oldLog; // Restaure la méthode console.log originale
        res.write(logOutput);
        res.end();
      })
      .catch((error) => {
        console.log = oldLog; // Restaure la méthode console.log originale
        res.write(`${error.message}\n`);
        res.end();
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;

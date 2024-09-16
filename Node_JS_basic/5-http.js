const http = require('http');
const { Writable } = require('stream');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    // Capture la sortie console.log()
    const logCapture = [];
    const logWritable = new Writable({
      write(chunk, encoding, callback) {
        logCapture.push(chunk.toString());
        callback();
      },
    });

    const originalStdoutWrite = process.stdout.write;

    process.stdout.write = logWritable.write.bind(logWritable);

    countStudents(database)
      .then(() => {
        process.stdout.write = originalStdoutWrite;
        res.write(logCapture.join(''));
        res.end();
      })
      .catch((error) => {
        process.stdout.write = originalStdoutWrite;
        res.write(`${error.message}\n`);
        res.end();
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(process.env.PORT || 1245, () => {
  console.log('Serveur en cours d\'exécution sur le port 1245');
});

module.exports = app;

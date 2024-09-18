const http = require('http');
const { Writable } = require('stream');
const countStudents = require('./3-read_file_async');
const path = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    // Capture the console output
    const captureStream = new Writable();
    let output = '';
    captureStream._write = (chunk, encoding, done) => {
      output += chunk.toString();
      done();
    };

    const originalConsoleLog = console.log;
    console.log = (...args) => {
      captureStream.write(`${args.join(' ')}\n`);
    };

    try {
      await countStudents(path);
      res.write(output);
    } catch (err) {
      res.write('Cannot load the database');
    } finally {
      console.log = originalConsoleLog; // Restore original console.log
    }

    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
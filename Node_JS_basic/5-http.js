const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    try {
      // Capture la sortie de console.log()
      const logCapture = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logCapture.push(args.join(' '));
      };

      await countStudents(database);

      // Restaurer la méthode console.log
      console.log = originalLog;

      // Envoie la réponse au client
      res.write(logCapture.join('\n'));
      res.end();
    } catch (error) {
      // Restaurer la méthode console.log en cas d'erreur
      console.log = originalLog;
      res.write('Cannot load the database\n');
      res.end();
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(process.env.PORT || 1245, () => {
  console.log('Serveur en cours d\'exécution sur le port 1245');
});

module.exports = app;

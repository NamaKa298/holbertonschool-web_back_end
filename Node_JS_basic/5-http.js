const http = require('http');
const countStudents = require('./3-read_file_async');

// Obtenir le chemin du fichier à partir des arguments de la ligne de commande
const database = process.argv[2];

// Créer le serveur HTTP
const app = http.createServer(async (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    try {
      // Appel de countStudents et capture des résultats
      const output = await countStudents(database);
      res.write(output);
      res.end();
    } catch (error) {
      // Gestion des erreurs
      res.write(`${error.message}\n`);
      res.end();
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Le serveur écoute sur le port 1245
app.listen(process.env.PORT || 1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;

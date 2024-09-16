const express = require('express');

const app = express();

// Endpoint principal
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Endpoint pour gérer les erreurs 404
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET ${req.url}</pre>
    </body>
    </html>
  `);
});

// Démarrer le serveur sur le port 1245
const port = process.env.PORT || 1245;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;

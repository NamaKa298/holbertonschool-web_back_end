const express = require('express');
const countStudents = require('./3-read_file_async');
const app = express();
const path = process.argv[2];

// Route pour "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route pour "/students"
app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  
  try {
    const output = await countStudents(path);
    res.write(output);
  } catch (err) {
    res.write(err.message);
  }
  
  res.end();
});

// Serveur écoute sur le port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;

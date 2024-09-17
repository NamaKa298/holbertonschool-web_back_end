const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const port = process.env.PORT || 1245;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;

express = require('express');
router = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;

const http = require('http');
const fs = require('fs').promises;

async function countStudents(chemin) {
  try {
    const data = await fs.readFile(chemin, 'utf8');
    const lignes = data.trim().split('\n');
    if (lignes.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const students = {};
    let totalStudents = 0;

    for (let i = 1; i < lignes.length; i += 1) {
      const line = lignes[i].trim();
      if (line) {
        const [firstname, , , field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
        totalStudents += 1;
      }
    }

    let output = `Number of students: ${totalStudents}\n`;
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      }
    }
    return output;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const database = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    countStudents(database)
      .then((output) => {
        res.write(output);
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(process.env.PORT || 1245);

module.exports = app;

const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n');
    const students = lines.filter(line => line.trim() !== '').slice(1);
    const fields = {};

    students.forEach(student => {
      const details = student.split(',');
      const field = details[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(details[0]);
    });

    console.log(`Number of students: ${students.length}`);
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

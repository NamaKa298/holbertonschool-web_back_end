const fs = require('fs');

function countStudents(chemin) {
  let data;
  try {
    data = fs.readFileSync(chemin, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lignes = data.trim().split('\n');
  if (lignes.length <= 1) {
    throw new Error('Cannot load the database');
  }

  const students = {};
  let totalStudents = 0;

  for (let i = 1; i < lignes.length; i++) {
    const line = lignes[i].trim();
    if (line) {
      const [firstname, lastname, age, field] = line.split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
      totalStudents++;
    }
  }

  console.log(`Number of students: ${totalStudents}`);
  for (const field in students) {
    if (students.hasOwnProperty(field)) {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    }
  }
}

module.exports = countStudents;
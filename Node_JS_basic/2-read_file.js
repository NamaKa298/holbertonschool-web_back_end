const fs = require('fs');
const readline = require('readline');

function countStudents(database_name) {
  let compteur = 0;
  const students = {};
  const rl = readline.createInterface({
    input: fs.createReadStream(database_name),
    output: process.stdout,
    terminal: false
  });

  rl.on('line', (line) => {
    if (compteur === 0 && line.includes(',')) {
      compteur++; // Compter la ligne d'en-tête
      return;
    }
    const [firstname, lastname, age, field] = line.split(',');
    if (!students[field]) {
      students[field] = [];
    }
    students[field].push(firstname);
    compteur++;
  });

  rl.on('close', () => {
    console.log(`Number of students: ${compteur - 1}`); // Soustraire la ligne d'en-tête
    for (const field in students) {
      if (students.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  });

  rl.on('error', (err) => {
    throw new Error('Cannot load the database');
  });
}

module.exports = countStudents;
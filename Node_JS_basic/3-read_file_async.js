const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');  // Read the file asynchronously
    const lines = data.split('\n');  // Split by line
    const students = lines.filter(line => line.trim() !== '').slice(1);  // Ignore empty lines and header
    const fields = {};

    students.forEach(student => {
      const details = student.split(',');  // Split by CSV columns
      const field = details[3];  // Field is assumed to be in the 4th column (index 3)
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(details[0]);  // Add student name (assumed to be the 1st column)
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

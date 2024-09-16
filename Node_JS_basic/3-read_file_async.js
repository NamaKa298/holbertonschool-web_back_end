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

    // Créer la sortie sous forme de chaîne
    let output = `Number of students: ${totalStudents}\n`;
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      }
    }
    
    // Retourner la sortie sous forme de chaîne
    return output.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

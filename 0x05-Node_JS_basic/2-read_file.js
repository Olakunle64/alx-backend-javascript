#!/usr/bin/node
// comment
const fs = require('fs');

function countStudents(filePath) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    let rows = data.split('\n');
    rows = rows.filter((row) => row);
    console.log(`Number of students: ${rows.length - 1}`);
    const fields = {};
    for (let i = 1; i < rows.length; i += 1) {
      const rowAttr = rows[i].split(',');
      const field = rowAttr[rowAttr.length - 1];
      const firstName = rowAttr[0];
      if (field in fields) {
        fields[field].count += 1;
        fields[field].firstNames.push(firstName);
      } else {
        fields[field] = { count: 1, firstNames: [firstName] };
      }
    }
    for (const [key, value] of Object.entries(fields)) {
      console.log(`Number of students in ${key}: ${value.count}. List: ${value.firstNames.join(', ')}`);
    }
  } else {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;

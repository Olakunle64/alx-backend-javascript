#!/usr/bin/node
// create HTTP server with express
const fs = require('fs');
const express = require('express');

function countStudents(filePath) {
  const body = [];
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      let rows = data.split('\n');
      rows = rows.filter((row) => row);
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
      body.push(`Number of students: ${rows.length - 1}`);
      for (const [key, value] of Object.entries(fields)) {
        body.push(`Number of students in ${key}: ${value.count}. List: ${value.firstNames.join(', ')}`);
      }
      resolve(body.join('\n'));
    });
  });
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  countStudents(databasePath).then((body) => {
    res.set('Content-Type', 'text/plain');
    res.send(`This is the list of our students\n${body}`);
  }).catch((error) => {
    res.set('Content-Type', 'text/plain');
    res.send(error.message);
  });
});

app.listen(port);
module.exports = app;

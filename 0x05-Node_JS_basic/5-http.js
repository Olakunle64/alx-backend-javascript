#!/usr/bin/node
// create HTTP server
const { createServer } = require('http');
const fs = require('fs');

// Function to count students in the database
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

// Server connection details
const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];
    countStudents(databasePath).then((body) => {
      res.end(`This is the list of our students\n${body}`);
    }).catch(() => {
      res.end('This is the list of our students\nCannot load the database');
    });
  } else {
    res.end('Not found');
  }
});

app.listen(port, hostname);
module.exports = app;

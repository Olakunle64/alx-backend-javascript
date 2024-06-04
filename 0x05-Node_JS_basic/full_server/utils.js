#!/usr/bin/node
// create a function that reads the database
const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
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
          fields[field].push(firstName);
        } else {
          fields[field] = [firstName];
        }
      }
      resolve(fields);
    });
  });
}

module.exports = readDatabase;

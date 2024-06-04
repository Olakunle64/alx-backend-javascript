#!/usr/bin/node
// create a class named AppController
const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const body = ['This is the list of our students'];
    readDatabase('database.csv').then((fields) => {
      const sortedKeys = Object.keys(fields).sort();
      sortedKeys.forEach((key) => {
        const firstNames = fields[key];
        body.push(`Number of students in ${key}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
      });
      const page = body.join('\n');
      response.status(200).send(page);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request;
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase('database.csv').then((fields) => {
      const page = `List: ${fields[major].join(', ')}`;
      response.status(200).send(page);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;

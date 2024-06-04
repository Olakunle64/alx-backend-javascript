#!/usr/bin/node
// create HTTP server
const { createServer } = require("http")
const countStudents = require('./2-read_file')

const hostname = "127.0.0.1"
const port = 1245

const app = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/students') {
        res.end("This is the list of our students")
        countStudents("database.csv")
    } else {
        res.end("Hello Holberton School!")
    }
    
}).listen(port)
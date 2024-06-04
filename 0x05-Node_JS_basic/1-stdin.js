#!/usr/bin/node
// A program that will be executed through command line
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    if (name === '\n') {
      console.log('Your name is:');
    } else {
      console.log(`Your name is: ${name.trim()}`);
    }
  }
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

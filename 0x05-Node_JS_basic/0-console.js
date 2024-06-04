#!/usr/bin/node
// This module contains a function that display a message to the stdout
module.exports = function displayMessage(arg) {
  if (typeof arg === 'string') process.stdout.write(`${arg}\n`);
};

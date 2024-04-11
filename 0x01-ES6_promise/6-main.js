import handleProfileSignup from './6-final-user.js';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg").then((result) => {
  console.log(result)
})
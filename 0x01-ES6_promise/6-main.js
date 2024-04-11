import handleProfileSignup from './6-final-user.js';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg").then((data) => {
  console.log(data.body);
}).catch((err) => console.log(err.message));
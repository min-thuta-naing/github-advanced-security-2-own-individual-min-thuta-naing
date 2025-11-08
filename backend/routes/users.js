// INTENTIONAL SQL INJECTION FOR TRAINING
// function getUser(name){
//   return `SELECT * FROM users WHERE name = '${name}'`;
// }
// module.exports = { getUser };

// const db = require('../db');

function getUser(name) {
  const query = "SELECT * FROM users WHERE name = ?";
  const params = [name];
  return { query, params };
}

module.exports = { getUser };

//adding loggin
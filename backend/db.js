// INTENTIONALLY VULNERABLE
// const password = 'hardcoded_password';
// module.exports = { password };


// require('dotenv').config();

// const password = process.env.DB_PASSWORD;
// module.exports = { password };


require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

module.exports = { dbUser, dbPassword };

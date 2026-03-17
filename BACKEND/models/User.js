const db = require("../config/db");

// Create User
const createUser = (user, callback) => {
  const { name, email, password } = user;
  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    callback
  );
};

// Find User by Email
const findUserByEmail = (email, callback) => {
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    callback
  );
};

module.exports = {
  createUser,
  findUserByEmail
};

const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Register
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "User Registered" });
    }
  );
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=? AND password=?",
    [email, password],
    (err, results) => {
      if (err) return res.status(500).json(err);
      if (results.length > 0) {
        res.json({ message: "Login Successful" });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    }
  );
});

module.exports = router;

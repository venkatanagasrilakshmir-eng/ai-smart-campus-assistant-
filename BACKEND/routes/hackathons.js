const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get Hackathons
router.get("/", (req, res) => {
  db.query("SELECT * FROM hackathons", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// Add Hackathon
router.post("/", (req, res) => {
  const { name, prize, deadline } = req.body;

  db.query(
    "INSERT INTO hackathons (name, prize, deadline) VALUES (?, ?, ?)",
    [name, prize, deadline],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Hackathon Added" });
    }
  );
});

module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get Menu
router.get("/", (req, res) => {
  db.query("SELECT * FROM canteen", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// Add Item
router.post("/", (req, res) => {
  const { item, price } = req.body;

  db.query(
    "INSERT INTO canteen (item, price) VALUES (?, ?)",
    [item, price],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Item Added" });
    }
  );
});

module.exports = router;

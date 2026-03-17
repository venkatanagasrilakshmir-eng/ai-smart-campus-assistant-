const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { question } = req.body;

  let answer = "I am your campus assistant 🤖";

  if (question.includes("event")) {
    answer = "Check the events page for latest events!";
  } else if (question.includes("canteen")) {
    answer = "Canteen is open from 9 AM to 5 PM";
  }

  res.json({ answer });
});

module.exports = router;

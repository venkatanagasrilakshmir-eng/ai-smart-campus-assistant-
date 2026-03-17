const db = require("../config/db");

// Get All Hackathons
const getAllHackathons = (callback) => {
  db.query("SELECT * FROM hackathons ORDER BY deadline ASC", callback);
};

// Add Hackathon
const addHackathon = (hackathon, callback) => {
  const { name, prize, deadline } = hackathon;
  db.query(
    "INSERT INTO hackathons (name, prize, deadline) VALUES (?, ?, ?)",
    [name, prize, deadline],
    callback
  );
};

module.exports = {
  getAllHackathons,
  addHackathon
};

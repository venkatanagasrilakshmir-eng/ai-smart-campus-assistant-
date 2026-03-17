const db = require("../config/db");

// Get All Events
const getAllEvents = (callback) => {
  db.query("SELECT * FROM events ORDER BY date DESC", callback);
};

// Add Event
const addEvent = (event, callback) => {
  const { title, date, description } = event;
  db.query(
    "INSERT INTO events (title, date, description) VALUES (?, ?, ?)",
    [title, date, description],
    callback
  );
};

module.exports = {
  getAllEvents,
  addEvent
};

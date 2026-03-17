const db = require("../config/db");

// Get All Items
const getAllItems = (callback) => {
  db.query("SELECT * FROM canteen", callback);
};

// Add Item
const addItem = (itemData, callback) => {
  const { item, price } = itemData;
  db.query(
    "INSERT INTO canteen (item, price) VALUES (?, ?)",
    [item, price],
    callback
  );
};

module.exports = {
  getAllItems,
  addItem
};

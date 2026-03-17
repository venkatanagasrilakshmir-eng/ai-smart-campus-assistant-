const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));
app.use("/api/hackathons", require("./routes/hackathons"));
app.use("/api/canteen", require("./routes/canteen"));
app.use("/api/assistant", require("./routes/assistant"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

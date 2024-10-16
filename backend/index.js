const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 7000;
require("dotenv").config();

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Server for book app is running");
  });
}

main()
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error(err));

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});

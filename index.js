const express = require("express");
const cors = require("cors");
require("dotenv/config");
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send({ message: "Hello ji this is server 1" });
});
app.get("/service1/hello", (req, res) => {
  res.send({ message: "Hello ji this is server 1" });
});
app.get("/service1/mello", (req, res) => {
  res.send({ message: "Mello ji this is server 1" });
});

app.listen(PORT, () => {
  console.log("Server 1 is running on port", PORT);
});

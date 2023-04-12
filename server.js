const express = require("express");

const dotenv = require("dotenv");

const route = require("./routes/index");
const db = require("./config/db/index");
// const authMiddleware = require("./app/middlewares/authMiddleware");

const app = express();
dotenv.config();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(authMiddleware);

// db.connect();
route(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

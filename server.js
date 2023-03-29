const express = require("express");
const dotenv = require("dotenv");

const route = require("./routes/index");

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
route(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

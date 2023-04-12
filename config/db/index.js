const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

connect = async function () {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connecting to DB successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connect };

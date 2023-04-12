const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const isEmail = require("validator/lib/isEmail.js");
module.exports = mongoose.model(
  "User",
  new Schema({
    name: {
      type: String,
      required: true, //NOT NULL
      validate: {
        validator: (value) => value.length > 3,
        // Quăng ra err cho catch hứng
        message: "Username must be at least 3 characters",
      },
    },
    email: {
      type: String,
      validate: {
        validator: (value) => isEmail,
        message: "Email is incorrect format",
      },
    },
    password: {
      //hashed/encrypted password
      type: String,
      required: true,
      //validate ??
    },
  })
);

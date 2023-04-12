const mongoose = require("mongoose");
const { Schema } = require("mongoose");
module.exports = mongoose.model(
  "typeKPI",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    formula: {
      type: String,
      required: true,
    },
  })
);

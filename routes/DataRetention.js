const express = require("express");

const Router = express.Router();

const DataRetentionController = require("../app/controllers/DataRetentionController");

Router.get("/", DataRetentionController.getDataRetentionSetting);
Router.put("/", DataRetentionController.updateDataRetentionSetting);

module.exports = Router;

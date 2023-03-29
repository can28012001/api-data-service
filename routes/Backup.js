const express = require("express");

const Router = express.Router();

const BackupController = require("../app/controllers/BackupController");

Router.get("/Config", BackupController.getConfigBackup);
Router.post("/Config", BackupController.restoreConfigBackup);
Router.get("/Data", BackupController.getDataBackup);
Router.post("/Data", BackupController.restoreDataBackup);

module.exports = Router;

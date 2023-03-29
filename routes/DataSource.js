const express = require("express");

const Router = express.Router();

const DataSourceController = require("../app/controllers/DataSourceController");

Router.get("/", DataSourceController.getDataSources);
Router.post("/", DataSourceController.resolveDataSources);

module.exports = Router;

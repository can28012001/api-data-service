const express = require("express");

const Router = express.Router();

const DataController = require("../app/controllers/DataController");

Router.get("/", DataController.getDataMulVariables);
Router.post("/", DataController.writeDataMulVariables);
Router.delete("/", DataController.deleteDataMulVariables);
Router.get("/:id", DataController.readDataSingleVariable);
Router.post("/Delta", DataController.getDataDelta);
Router.post("/:id", DataController.writeDataSingleVariable);
Router.delete("/:id", DataController.deleteDataSingleVariable);
Router.get("/Size", DataController.getDatabaseSize);
Router.get("/:id/Size", DataController.getDataSize);
Router.get("/:id/Count", DataController.getCountData);

module.exports = Router;

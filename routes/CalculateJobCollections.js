const express = require("express");

const Router = express.Router();

const CalculateJobCollectionsController = require("../app/controllers/CalculateJobCollectionsController");

Router.get("/Ids", CalculateJobCollectionsController.getAllJobCalculionIds);
Router.post("/", CalculateJobCollectionsController.createJobCalculation);
Router.get("/:id", CalculateJobCollectionsController.getStateJobCalculionIds);
Router.delete("/:id", CalculateJobCollectionsController.deleteJobCalculation);
Router.delete(
  "/:id/:jobIndex",
  CalculateJobCollectionsController.deleteJobCalculationIndex
);
module.exports = Router;

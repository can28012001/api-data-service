const express = require("express");

const Router = express.Router();

const AggregationsController = require("../app/controllers/AggregationsController");

Router.get("/", AggregationsController.getAllAggregations);
Router.post("/", AggregationsController.createAggregation);
Router.get("/:id", AggregationsController.readAggregation);
Router.put("/:id", AggregationsController.updateAggregation);
Router.delete("/:id", AggregationsController.deleteAggregation);
Router.get("/:id/Reset", AggregationsController.resetAggregation);

module.exports = Router;

const express = require("express");

const Router = express.Router();

const CalculateController = require("../app/controllers/CalculateController");

Router.post("/Calculate", CalculateController.calculateAggregated);
Router.post("/CalculateTrend", CalculateController.calculateTrendAggregated);

module.exports = Router;

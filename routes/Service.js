const express = require("express");

const Router = express.Router();

const ServiceController = require("../app/controllers/ServiceController");

Router.get("/Version", ServiceController.getVersion);
Router.get("/IsRunning", ServiceController.checkIsRunning);

module.exports = Router;

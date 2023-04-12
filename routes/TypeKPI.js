const express = require("express");

const Router = express.Router();

const TypeKPIController = require("../app/controllers/TypeKPIController");

// Create
Router.post("/create", TypeKPIController.create);

//LOG IN
// Router.post("/login", TypeKPIController.login);

module.exports = Router;

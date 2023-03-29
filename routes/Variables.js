const express = require("express");

const Router = express.Router();

const VariablesController = require("../app/controllers/VariablesController");

Router.get("/", VariablesController.getAllVariables);
Router.post("/", VariablesController.createVariable);
Router.get("/:id", VariablesController.readVariable);
Router.put("/:id", VariablesController.updateVariable);
Router.delete("/:id", VariablesController.deleteVariable);

module.exports = Router;

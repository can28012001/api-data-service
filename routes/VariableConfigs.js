const express = require("express");

const Router = express.Router();

const VariableConfigsController = require("../app/controllers/VariableConfigsController");

Router.get("/:id", VariableConfigsController.readVariableConfig);
Router.put("/:id", VariableConfigsController.updateVariableConfig);
Router.delete("/:id", VariableConfigsController.deleteVariableConfig);

module.exports = Router;

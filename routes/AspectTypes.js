const express = require("express");

const Router = express.Router();

const AspectTypesController = require("../app/controllers/AspectTypesController");

Router.get("/", AspectTypesController.getAllAspectTypes);
Router.post("/", AspectTypesController.createAspectType);
Router.get("/:id", AspectTypesController.readAspectType);
Router.put("/:id", AspectTypesController.updateAspectType);
Router.delete("/:id", AspectTypesController.deleteAspectType);

module.exports = Router;

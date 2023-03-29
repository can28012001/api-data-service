const express = require("express");

const Router = express.Router();

const AspectsController = require("../app/controllers/AspectsController");

Router.get("/", AspectsController.getAllAssets);
Router.post("/", AspectsController.createAsset);
Router.get("/:id", AspectsController.readAsset);
Router.put("/:id", AspectsController.updateAsset);
Router.delete("/:id", AspectsController.deleteAsset);

module.exports = Router;

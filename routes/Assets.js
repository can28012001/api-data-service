const express = require("express");

const Router = express.Router();

const AssetsController = require("../app/controllers/AssetsController");

Router.get("/", AssetsController.getAllAssets);
Router.post("/", AssetsController.createAsset);
Router.get("/:id", AssetsController.readAsset);
Router.put("/:id", AssetsController.updateAsset);
Router.delete("/:id", AssetsController.deleteAsset);
Router.get("/Root", AssetsController.getAllAssets);
Router.get("/:id/children", AssetsController.readAsset);
Router.get("/:id/decendants", AssetsController.readAsset);
Router.get("/:id/breadcrumb", AssetsController.readAsset);
Router.get("/Tree", AssetsController.getAllAssets);

module.exports = Router;

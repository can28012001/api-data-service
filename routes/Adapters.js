const express = require("express");

const Router = express.Router();

const AdaptersController = require("../app/controllers/AdaptersController");

Router.get("/", AdaptersController.getAllAdapters);
Router.post("/", AdaptersController.createAdapter);
Router.get("/:id", AdaptersController.readAdapter);
Router.put("/:id", AdaptersController.updateAdapter);
Router.delete("/:id", AdaptersController.deleteAdapter);
Router.get("/:id/browse", AdaptersController.browseAdapter);
Router.get("/:id/RawMetaData", AdaptersController.getRawMetadata);

module.exports = Router;

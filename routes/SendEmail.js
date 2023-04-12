const express = require("express");

const Router = express.Router();

const SendEmailController = require("../app/controllers/SendEmailController");

Router.post("/send", SendEmailController.sendEmail);

module.exports = Router;

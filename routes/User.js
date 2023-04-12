const express = require("express");
const { body } = require("express-validator");

const Router = express.Router();

const UserController = require("../app/controllers/UsersController");

//REGISTER
Router.post(
  "/register",
  // username must be an email
  body("email").isEmail(),
  // password must be at least 5 chars long
  body("password").isLength({ min: 5 }),
  UserController.register
);

//LOG IN
Router.post("/login", UserController.login);

module.exports = Router;

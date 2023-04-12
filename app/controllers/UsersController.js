const { validationResult } = require("express-validator");
const UserRepository = require("../repositories/UsersRepository");
const HttpRequestCode = require("../../utils/HttpRequestCode");

class UserController {
  register = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpRequestCode.BAD_REQUEST)
        .json({ errors: errors.array() });
    }
    const { email, password, name } = req.body;
    try {
      const newUser = await UserRepository.register({
        email,
        password,
        name,
      });
      res.status(HttpRequestCode.OK).json({
        newUser,
        message: "resgister successfully",
      });
    } catch (err) {
      res.status(HttpRequestCode.INTERVAL_SERVER_ERROR).json({
        message: err.message.toString(),
      });
    }
  };

  login = async function (req, res) {
    const { email, password } = req.body;
    try {
      const token = await UserRepository.login({
        email: email,
        password: password,
      });
      res.status(HttpRequestCode.OK).json({
        message: "login successfully",
        data: token,
      });
    } catch (err) {
      res.status(HttpRequestCode.INTERVAL_SERVER_ERROR).json({
        message: err.toString(),
      });
    }
  };
}

module.exports = new UserController();

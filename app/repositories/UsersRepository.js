const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

class UserRepository {
  login = async function ({ email, password }) {
    const exitUser = await User.findOne({ email }).exec();
    if (exitUser) {
      // Không được mã hóa ngước mật khẩu
      const isPassword = bcrypt.compareSync(password, exitUser.password);
      if (!!isPassword) {
        const token = jwt.sign(
          {
            data: exitUser,
          },
          "secret",
          { expiresIn: "1h" }
        );
        return {
          // chú ý khi phân rã object, để tránh có nhiều thành phần ta dùng toObject()
          ...exitUser._doc,
          password: "not show",
          token,
        };
      } else {
        throw new Error("Email and password is wrong");
      }
    } else {
      throw new Error("Email and password is wrong");
    }
  };
  // validate already
  register = async function ({ email, password, name }) {
    const hash = await bcrypt.hash(password, 10);
    const exitUser = await User.findOne({ email }).exec();
    if (!exitUser) {
      let newUser = await User.create({
        email,
        name,
        password: hash,
      });
      return newUser;
    } else {
      throw new Error("User already registered");
    }
  };
}

module.exports = new UserRepository();

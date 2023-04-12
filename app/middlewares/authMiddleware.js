const HttpRequestCode = require("../../utils/HttpRequestCode");
const jwt = require("jsonwebtoken");
module.exports = function checkToken(req, res, next) {
  //bypass login, register
  if (
    req.url.toLowerCase().trim() == "/users/login".toLowerCase().trim() ||
    req.url.toLowerCase().trim() == "/users/register".toLowerCase().trim()
  ) {
    next();
    return;
  }
  //other requests
  //get and validate token
  const token = req.headers?.authorization?.split(" ")[1];
  try {
    // verify là biến chuỗi token thành object có key value (đặc biệt là key exp để check ngày hêt hạn va object truyen vao)
    const jwtObject = jwt.verify(token, "secret");
    const isExpired = Date.now() >= jwtObject.exp * 1000; //Date.now() tính theo ms

    if (isExpired) {
      res.status(HttpRequestCode.BAD_REQUEST).json({
        message: "Token is expired",
      });
      res.end();
    } else {
      next();
      return;
    }
  } catch (err) {
    res.status(HttpRequestCode.BAD_REQUEST).json({
      message: err,
    });
  }
};

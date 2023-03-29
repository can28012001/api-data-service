const ServiceApi = require("../api/ServiceApi");
let _EXTERNAL_URL;
class ServiceController {
  getVersion = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    ServiceApi.getApi(_EXTERNAL_URL, function (response) {
      console.log(req.originalUrl);
      res.json(response);
    });
  };
  checkIsRunning = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    ServiceApi.getApi(_EXTERNAL_URL, function (response) {
      console.log(_EXTERNAL_URL);
      res.json(response);
    });
  };
}

module.exports = new ServiceController();

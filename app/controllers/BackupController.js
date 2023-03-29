const BackupApi = require("../api/BackupApi");
let _EXTERNAL_URL;
class BackupController {
  getConfigBackup = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    BackupApi.getApi(_EXTERNAL_URL, function (url, response) {
      console.log(_EXTERNAL_URL);
      res.json({
        download: url,
        response,
      });
    });
  };
  restoreConfigBackup = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { BackupFile } = req.body;
    BackupApi.postApi(_EXTERNAL_URL, { BackupFile }, function (response) {
      console.log(_EXTERNAL_URL);
      res.json(response);
    });
  };
  getDataBackup = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    BackupApi.getApi(_EXTERNAL_URL, function (url, response) {
      console.log(req.originalUrl);
      res.json({ download: url, response });
    });
  };
  restoreDataBackup = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { BackupFile } = req.body;
    BackupApi.postApi(_EXTERNAL_URL, { BackupFile }, function (response) {
      console.log(_EXTERNAL_URL);
      res.json(response);
    });
  };
}

module.exports = new BackupController();

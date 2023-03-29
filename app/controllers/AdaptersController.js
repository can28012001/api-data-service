const AdaptersApi = require("../api/AdaptersApi");
let _EXTERNAL_URL;
class AdaptersController {
  getAllAdapters = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    AdaptersApi.getApi(_EXTERNAL_URL, function (response) {
      console.log(_EXTERNAL_URL);
      res.json(response);
    });
  };
  createAdapter = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { name, type, locked, active, isDefault, config } = req.body;
    AdaptersApi.postApi(
      _EXTERNAL_URL,
      { name, type, locked, active, isDefault, config },
      function (response) {
        res.json(response);
      }
    );
  };
  readAdapter = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    AdaptersApi.readApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
  updateAdapter = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    const { name, type, locked, active, isDefault, config } = req.body;
    AdaptersApi.putApi(
      _EXTERNAL_URL,
      { id, name, type, locked, active, isDefault, config },
      function (response, err) {
        if (err) {
          res.json(err);
        }
        res.json(response);
      }
    );
  };
  deleteAdapter = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    AdaptersApi.deleteApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
  browseAdapter = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    AdaptersApi.readApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
  getRawMetadata = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    AdaptersApi.readApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
}

module.exports = new AdaptersController();

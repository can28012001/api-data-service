const DataApi = require("../api/DataApi");
let _EXTERNAL_URL;
class DataController {
  getDataMulVariables = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    DataApi.getApi(_EXTERNAL_URL, function (response) {
      console.log(_EXTERNAL_URL);
      res.json(response);
    });
  };
  writeDataMulVariables = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const [{ variableId, values }] = req.body;
    DataApi.postApi(_EXTERNAL_URL, { variableId, values }, function (response) {
      res.json(response);
    });
  };
  deleteDataMulVariables = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    DataApi.deleteApiNoId(_EXTERNAL_URL, function (response) {
      res.json(response);
    });
  };
  readDataSingleVariable = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    DataApi.readApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
  writeDataSingleVariable = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    const [{ timestamp, value, qualitycode }] = req.body;
    DataApi.postApiSinggle(
      _EXTERNAL_URL,
      { id, timestamp, value, qualitycode },
      function (response, err) {
        if (err) {
          res.json(err);
        }
        res.json(response);
      }
    );
  };
  deleteDataSingleVariable = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    DataApi.deleteApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
  getDatabaseSize = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    DataApi.getApi(_EXTERNAL_URL, function (response) {
      console.log(_EXTERNAL_URL);
      res.json(response);
    });
  };
  getDataSize = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    DataApi.readApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
  getCountData = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    DataApi.readApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
  getDataDelta = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const [{ variableId, lastRequestTime }] = req.body;
    DataApi.postApiDelta(
      _EXTERNAL_URL,
      { variableId, lastRequestTime },
      function (response) {
        res.json(response);
      }
    );
  };
}

module.exports = new DataController();

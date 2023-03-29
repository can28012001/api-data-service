const VariablesApi = require("../api/VariablesApi");
let _EXTERNAL_URL;
class VariablesController {
  getAllVariables = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    VariablesApi.getApi(_EXTERNAL_URL, function (response) {
      console.log(_EXTERNAL_URL);
      res.json(response);
    });
  };
  createVariable = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const {
      variableName,
      dataType,
      assetId,
      aspectId,
      adapterId,
      topic,
      unit,
    } = req.body;
    VariablesApi.postApi(
      _EXTERNAL_URL,
      { variableName, dataType, assetId, aspectId, adapterId, topic, unit },
      function (response) {
        res.json(response);
      }
    );
  };
  readVariable = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    VariablesApi.readApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
  updateVariable = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    const {
      variableName,
      dataType,
      assetId,
      aspectId,
      adapterId,
      topic,
      unit,
    } = req.body;
    VariablesApi.putApi(
      _EXTERNAL_URL,
      { id, variableName, dataType, assetId, aspectId, adapterId, topic, unit },
      function (response, err) {
        if (err) {
          res.json(err);
        }
        res.json(response);
      }
    );
  };
  deleteVariable = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    VariablesApi.deleteApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
}

module.exports = new VariablesController();

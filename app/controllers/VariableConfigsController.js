const VariableConfigsApi = require("../api/VariableConfigsApi");
let _EXTERNAL_URL;
class VariableConfigsController {
  readVariableConfig = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    VariableConfigsApi.readApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
  updateVariableConfig = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    const {
      unit,
      isAggregated,
      acquisitionCategory,
      acquisitionCycle,
      counterConfigurations,
    } = req.body;
    VariableConfigsApi.putApi(
      _EXTERNAL_URL,
      {
        id,
        unit,
        isAggregated,
        acquisitionCategory,
        acquisitionCycle,
        counterConfigurations,
      },
      function (response, err) {
        if (err) {
          res.json(err);
        }
        res.json(response);
      }
    );
  };
  deleteVariableConfig = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    VariableConfigsApi.deleteApi(
      _EXTERNAL_URL,
      { id },
      function (response, err) {
        if (err) {
          res.json(err);
        }
        res.json(response);
      }
    );
  };
}

module.exports = new VariableConfigsController();

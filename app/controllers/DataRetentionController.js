const DataRetentionApi = require("../api/DataRetentionApi ");
let _EXTERNAL_URL;
class DataRetentionController {
  getDataRetentionSetting = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    DataRetentionApi.getApi(_EXTERNAL_URL, function (response) {
      console.log(_EXTERNAL_URL);
      res.json(response);
    });
  };
  updateDataRetentionSetting = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { sourceId, sourceTypeId, settings } = req.body;
    DataRetentionApi.putApi(
      _EXTERNAL_URL,
      { sourceId, sourceTypeId, settings },
      function (response) {
        res.json(response);
      }
    );
  };
}

module.exports = new DataRetentionController();

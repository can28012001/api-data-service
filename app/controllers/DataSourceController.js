const DataSourceApi = require("../api/DataSourceApi");
let _EXTERNAL_URL;
class DataSourceController {
  getDataSources = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    DataSourceApi.getApi(_EXTERNAL_URL, function (response) {
      console.log(_EXTERNAL_URL);
      res.json(response);
    });
  };
  resolveDataSources = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const [{ type, id, aggregation, name }] = req.body;
    DataSourceApi.postApi(
      _EXTERNAL_URL,
      { type, id, aggregation, name },
      function (response) {
        res.json(response);
      }
    );
  };
}

module.exports = new DataSourceController();

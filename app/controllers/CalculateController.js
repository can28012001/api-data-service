const CalculateApi = require("../api/CalculateApi");
let _EXTERNAL_URL;
class ServiceController {
  calculateAggregated = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { from, to, dataSources } = req.body;
    CalculateApi.postApi(
      _EXTERNAL_URL,
      { from, to, dataSources },
      function (response) {
        console.log(req.originalUrl);
        res.json(response);
      }
    );
  };
  calculateTrendAggregated = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { from, to, dataSources, calculationTimeRange } = req.body;
    CalculateApi.postApiTrend(
      _EXTERNAL_URL,
      { from, to, dataSources, calculationTimeRange },
      function (response) {
        console.log(_EXTERNAL_URL);
        res.json(response);
      }
    );
  };
}

module.exports = new ServiceController();

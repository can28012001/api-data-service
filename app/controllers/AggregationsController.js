const AggregationsApi = require("../api/AggregationsApi");
let _EXTERNAL_URL;
class AggregationsController {
  getAllAggregations = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    AggregationsApi.getApi(_EXTERNAL_URL, function (response) {
      console.log(_EXTERNAL_URL);
      res.json(response);
    });
  };
  createAggregation = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { aggregation, sourceId, cycle, provideAsVariable, publishMqtt } =
      req.body;
    AggregationsApi.postApi(
      _EXTERNAL_URL,
      { aggregation, sourceId, cycle, provideAsVariable, publishMqtt },
      function (response) {
        res.json(response);
      }
    );
  };
  readAggregation = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    AggregationsApi.readApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
  updateAggregation = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    const { aggregation, sourceId, cycle, provideAsVariable, publishMqtt } =
      req.body;
    AggregationsApi.putApi(
      _EXTERNAL_URL,
      { id, aggregation, sourceId, cycle, provideAsVariable, publishMqtt },
      function (response, err) {
        if (err) {
          res.json(err);
        }
        res.json(response);
      }
    );
  };
  deleteAggregation = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    AggregationsApi.deleteApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
  resetAggregation = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    AggregationsApi.readApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
}

module.exports = new AggregationsController();

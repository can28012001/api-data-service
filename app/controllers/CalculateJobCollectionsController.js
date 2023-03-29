const CalculateJobCollectionsApi = require("../api/CalculateJobCollectionsApi");
let _EXTERNAL_URL;
class CalculateJobCollectionsController {
  getAllJobCalculionIds = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    CalculateJobCollectionsApi.getApi(_EXTERNAL_URL, function (response) {
      console.log(_EXTERNAL_URL);
      res.json(response);
    });
  };
  getStateJobCalculionIds = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    CalculateJobCollectionsApi.readApi(
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
  createJobCalculation = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { jobs } = req.body;
    CalculateJobCollectionsApi.postApi(
      _EXTERNAL_URL,
      { jobs },
      function (response) {
        res.json(response);
      }
    );
  };
  deleteJobCalculation = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    CalculateJobCollectionsApi.deleteApi(
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
  deleteJobCalculationIndex = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id, jobIndex } = req.params;
    CalculateJobCollectionsApi.deleteApi(
      _EXTERNAL_URL,
      { id, jobIndex },
      function (response, err) {
        if (err) {
          res.json(err);
        }
        res.json(response);
      }
    );
  };
}

module.exports = new CalculateJobCollectionsController();

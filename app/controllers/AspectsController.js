const AsspectsApi = require("../api/AspectsApi");
let _EXTERNAL_URL;
class AsspectsController {
  getAllAssets = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    AsspectsApi.getApi(_EXTERNAL_URL, function (response) {
      console.log(_EXTERNAL_URL);
      res.json(response);
    });
  };
  createAsset = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { aspectName, assetId, aspectTypeId } = req.body;
    AsspectsApi.postApi(
      _EXTERNAL_URL,
      { aspectName, assetId, aspectTypeId },
      function (response) {
        res.json(response);
      }
    );
  };
  readAsset = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    AsspectsApi.readApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
  updateAsset = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    const { aspectName, assetId, aspectTypeId } = req.body;
    AsspectsApi.putApi(
      _EXTERNAL_URL,
      { id, aspectName, assetId, aspectTypeId },
      function (response, err) {
        if (err) {
          res.json(err);
        }
        res.json(response);
      }
    );
  };
  deleteAsset = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    AsspectsApi.deleteApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
}

module.exports = new AsspectsController();

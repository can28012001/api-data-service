const AssetsApi = require("../api/AssetsApi");
let _EXTERNAL_URL;
class AssetsController {
  getAllAssets = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/AssetService${req.originalUrl}`;
    AssetsApi.getApi(_EXTERNAL_URL, function (response) {
      console.log(_EXTERNAL_URL);
      res.json(response);
    });
  };
  createAsset = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/AssetService${req.originalUrl}`;
    const { name, parentId, sortOrder } = req.body;
    AssetsApi.postApi(
      _EXTERNAL_URL,
      { name, parentId, sortOrder },
      function (response) {
        res.json(response);
      }
    );
  };
  readAsset = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/AssetService${req.originalUrl}`;
    const { id } = req.params;
    AssetsApi.readApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
  updateAsset = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/AssetService${req.originalUrl}`;
    const { id } = req.params;
    const { name, parentId, sortOrder } = req.body;
    AssetsApi.putApi(
      _EXTERNAL_URL,
      { id, name, parentId, sortOrder },
      function (response, err) {
        if (err) {
          res.json(err);
        }
        res.json(response);
      }
    );
  };
  deleteAsset = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/AssetService${req.originalUrl}`;
    const { id } = req.params;
    AssetApi.deleteApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
}

module.exports = new AssetsController();

const AspectTypesApi = require("../api/AspectTypesApi");
let _EXTERNAL_URL;
class AspectTypesController {
  getAllAspectTypes = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    AspectTypesApi.getApi(_EXTERNAL_URL, function (response) {
      console.log(_EXTERNAL_URL);
      res.json(response);
    });
  };
  createAspectType = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { name, isSystemType } = req.body;
    const { variables } = req.body;

    AspectTypesApi.postApi(
      _EXTERNAL_URL,
      { name, variables, isSystemType },
      function (response) {
        res.json(response);
      }
    );
  };
  readAspectType = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    AspectTypesApi.readApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
  updateAspectType = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    const { name } = req.body;
    const { variables } = req.body;
    AspectTypesApi.putApi(
      _EXTERNAL_URL,
      { id, name, variables },
      function (response, err) {
        if (err) {
          console.log("lổi");
          res.json(err);
        }
        res.json(response);
      }
    );
  };
  deleteAspectType = function (req, res, next) {
    _EXTERNAL_URL = `http://localhost:4203/DataService${req.originalUrl}`;
    const { id } = req.params;
    AspectTypesApi.deleteApi(_EXTERNAL_URL, { id }, function (response, err) {
      if (err) {
        res.json(err);
      }
      res.json(response);
    });
  };
}

module.exports = new AspectTypesController();

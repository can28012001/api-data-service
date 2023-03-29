const axios = require("axios");

const callApi = require("../../utils/Request");

const AspectsApi = {
  ...callApi,
  postApi: (_EXTERNAL_URL, { aspectName, assetId, aspectTypeId }, callback) => {
    axios
      .post(_EXTERNAL_URL, { aspectName, assetId, aspectTypeId })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
  putApi: (
    _EXTERNAL_URL,
    { id, aspectName, assetId, aspectTypeId },
    callback
  ) => {
    axios
      .put(_EXTERNAL_URL, {
        params: {
          id,
        },
        aspectName,
        assetId,
        aspectTypeId,
      })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
};

module.exports = AspectsApi;

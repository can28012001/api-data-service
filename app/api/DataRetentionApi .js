const axios = require("axios");

const callApi = require("../../utils/Request");

const DataRetentionApi = {
  ...callApi,
  putApi: (_EXTERNAL_URL, { sourceId, sourceTypeId, settings }, callback) => {
    axios
      .put(_EXTERNAL_URL, {
        sourceId,
        sourceTypeId,
        settings,
      })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
};

module.exports = DataRetentionApi;

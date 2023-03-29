const axios = require("axios");

const callApi = require("../../utils/Request");

const VariablesApi = {
  ...callApi,
  postApi: (
    _EXTERNAL_URL,
    { variableName, dataType, assetId, aspectId, adapterId, topic, unit },
    callback
  ) => {
    axios
      .post(_EXTERNAL_URL, {
        variableName,
        dataType,
        assetId,
        aspectId,
        adapterId,
        topic,
        unit,
      })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
  putApi: (
    _EXTERNAL_URL,
    { id, variableName, dataType, assetId, aspectId, adapterId, topic },
    callback
  ) => {
    axios
      .put(_EXTERNAL_URL, {
        params: {
          id,
        },
        variableName,
        dataType,
        assetId,
        aspectId,
        adapterId,
        topic,
      })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
};

module.exports = VariablesApi;

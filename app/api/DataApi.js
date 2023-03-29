const axios = require("axios");

const callApi = require("../../utils/Request");

const DataApi = {
  ...callApi,
  postApi: (_EXTERNAL_URL, { variableId, values }, callback) => {
    axios
      .post(_EXTERNAL_URL, [{ variableId, values }])
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
  postApiDelta: (_EXTERNAL_URL, { variableId, lastRequestTime }, callback) => {
    axios
      .post(_EXTERNAL_URL, [{ variableId, lastRequestTime }])
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
  postApiSinggle: (
    _EXTERNAL_URL,
    { timestamp, value, qualitycode },
    callback
  ) => {
    axios
      .post(_EXTERNAL_URL, [{ timestamp, value, qualitycode }])
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
  putApi: (
    _EXTERNAL_URL,
    { id, name, type, locked, active, isDefault, config },
    callback
  ) => {
    axios
      .put(_EXTERNAL_URL, {
        params: {
          id,
        },
        name,
        type,
        locked,
        active,
        isDefault,
        config,
      })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
  deleteApiNoId: (_EXTERNAL_URL, callback) => {
    axios
      .delete(_EXTERNAL_URL)
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
};

module.exports = DataApi;

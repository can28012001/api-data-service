const axios = require("axios");

const callApi = require("../../utils/Request");

const CalculateApi = {
  ...callApi,
  postApi: (_EXTERNAL_URL, { from, to, dataSources }, callback) => {
    axios
      .post(_EXTERNAL_URL, { from, to, dataSources })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err);
      });
  },
  postApiTrend: (
    _EXTERNAL_URL,
    { from, to, dataSources, calculationTimeRange },
    callback
  ) => {
    axios
      .post(_EXTERNAL_URL, { from, to, dataSources, calculationTimeRange })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err);
      });
  },
};

module.exports = CalculateApi;

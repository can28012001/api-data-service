const axios = require("axios");

const callApi = require("../../utils/Request");

const DataSourceApi = {
  ...callApi,
  postApi: (_EXTERNAL_URL, { type, id, aggregation, name }, callback) => {
    axios
      .post(_EXTERNAL_URL, [{ type, id, aggregation, name }])
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
};

module.exports = DataSourceApi;

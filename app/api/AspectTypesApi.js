const axios = require("axios");

const callApi = require("../../utils/Request");

const AspectTypesApi = {
  ...callApi,
  postApi: (_EXTERNAL_URL, { name, variables, isSystemType }, callback) => {
    axios
      .post(_EXTERNAL_URL, { name, variables, isSystemType })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
  putApi: (_EXTERNAL_URL, { id, name, variables }, callback) => {
    axios
      .put(_EXTERNAL_URL, {
        params: {
          id,
        },
        name,
        variables,
      })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
};

module.exports = AspectTypesApi;

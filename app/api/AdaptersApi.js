const axios = require("axios");

const callApi = require("../../utils/Request");

const AdaptersApi = {
  ...callApi,
  postApi: (
    _EXTERNAL_URL,
    { name, type, locked, active, isDefault, config },
    callback
  ) => {
    axios
      .post(_EXTERNAL_URL, { name, type, locked, active, isDefault, config })
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
};

module.exports = AdaptersApi;

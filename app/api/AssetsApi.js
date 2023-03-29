const axios = require("axios");

const callApi = require("../../utils/Request");

const AssetsApi = {
  ...callApi,
  postApi: (_EXTERNAL_URL, { name, parentId, sortOrder }, callback) => {
    axios
      .post(_EXTERNAL_URL, { name, parentId, sortOrder })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
  putApi: (_EXTERNAL_URL, { id, name, parentId, sortOrder }, callback) => {
    axios
      .put(_EXTERNAL_URL, {
        params: {
          id,
        },
        name,
        parentId,
        sortOrder,
      })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
};

module.exports = AssetsApi;

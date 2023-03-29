const axios = require("axios");

const callApi = {
  getApi: (_EXTERNAL_URL, callback) => {
    axios
      .get(_EXTERNAL_URL)
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
  postApi: (_EXTERNAL_URL, { name, parentId }, callback) => {
    axios
      .post(_EXTERNAL_URL, { name, parentId })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err);
      });
  },
  readApi: (_EXTERNAL_URL, { id, name }, callback) => {
    axios
      .get(_EXTERNAL_URL, {
        params: {
          id,
          name,
        },
      })
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
  deleteApi: (_EXTERNAL_URL, { id }, callback) => {
    axios
      .delete(_EXTERNAL_URL, {
        params: {
          id,
        },
      })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },

  //   request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
  //     if (err) {
  //       return callback(err);
  //     }
  //     return callback(body);
  //   });
};

module.exports = callApi;

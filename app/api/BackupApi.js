const axios = require("axios");

const BackupApi = {
  getApi: (_EXTERNAL_URL, callback) => {
    axios
      .get(_EXTERNAL_URL)
      .then((response) => {
        return callback(response.config.url, response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
  postApi: (_EXTERNAL_URL, { BackupFile }, callback) => {
    axios
      .post(_EXTERNAL_URL, { BackupFile })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
};

module.exports = BackupApi;

const axios = require("axios");

const callApi = require("../../utils/Request");

const CalculateJobCollectionsApi = {
  ...callApi,
  postApi: (_EXTERNAL_URL, { jobs }, callback) => {
    axios
      .post(_EXTERNAL_URL, {
        jobs,
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
  deleteApi: (_EXTERNAL_URL, { id, jobIndex }, callback) => {
    axios
      .delete(_EXTERNAL_URL, {
        params: {
          id,
          jobIndex,
        },
      })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
};

module.exports = CalculateJobCollectionsApi;

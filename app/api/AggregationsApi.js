const axios = require("axios");

const callApi = require("../../utils/Request");

const AggregationsApi = {
  ...callApi,
  postApi: (
    _EXTERNAL_URL,
    { aggregation, sourceId, cycle, provideAsVariable, publishMqtt },
    callback
  ) => {
    axios
      .post(_EXTERNAL_URL, {
        aggregation,
        sourceId,
        cycle,
        provideAsVariable,
        publishMqtt,
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
    { id, aggregation, sourceId, cycle, provideAsVariable, publishMqtt },
    callback
  ) => {
    axios
      .put(_EXTERNAL_URL, {
        params: {
          id,
        },
        aggregation,
        sourceId,
        cycle,
        provideAsVariable,
        publishMqtt,
      })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
};

module.exports = AggregationsApi;

const axios = require("axios");

const callApi = require("../../utils/Request");

const VariableConfigsApi = {
  ...callApi,
  putApi: (
    _EXTERNAL_URL,
    {
      id,
      unit,
      isAggregated,
      acquisitionCategory,
      acquisitionCycle,
      counterConfigurations,
    },
    callback
  ) => {
    axios
      .put(_EXTERNAL_URL, {
        params: {
          id,
        },
        unit,
        isAggregated,
        acquisitionCategory,
        acquisitionCycle,
        counterConfigurations,
      })
      .then((response) => {
        return callback(response.data);
      })
      .catch((err) => {
        return callback(err.response.data);
      });
  },
};

module.exports = VariableConfigsApi;

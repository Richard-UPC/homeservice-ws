const constants = require("./Constants");

module.exports.success = function(response) {
  return {
    code: constants.OK,
    result: response
  };
};

module.exports.error = function(errorCode) {
  return {
    code: errorCode,
    result: null
  };
};

module.exports.successResult = function(response) {
  return {
    data: response,
    success: true,
    message: ""
  };
};
module.exports.errorResult = function(errorMessage) {
  return {
    data: null,
    success: false,
    message: errorMessage
  };s
};
module.exports.errorLog = function(serviceName, reqBody, exception){
  return {
    ServiceName: serviceName,
    ReqBody: reqBody,
    Exception: exception
  }
};
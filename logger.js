var url = 'http://someloggystuff.io';

function log(message) {
  //log the message
  console.log(message);
}

//below line is adding the log function to module.exports so it can be made available in other parts of the app. Don't export everything for use on the outside. We can also re-name how the module is referred to outside of here (module.exports.______)

//we don't need to export all implementation details for use outside of this. (things like variables etc)

module.exports.log = log;

//EventEmmitter is a class. that is why it is double upper case.

const EventEmitter = require('events');

var url = 'http://someloggystuff.io';

// with this extension, logger will have all of the base functionality defined in EventEmitter, plus the function we have added.
//Always create a custom class extended off a base class.

class Logger extends EventEmitter {

   log(message){
    //log the message
    console.log(message);

    //raised an event

    this.emit('messagedLogged', {id: 1, url: "url"});
  }
}



//below line is adding the log function to module.exports so it can be made available in other parts of the app. Don't export everything for use on the outside. We can also re-name how the module is referred to outside of here (module.exports.______)

//we don't need to export all implementation details for use outside of this. (things like variables etc)

module.exports= Logger;

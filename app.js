//require function is unique to node, and how we import modules.
//always upload modules as constants, not vars. so we can't overwrite them

//this path object is baked into node. lets us know the path.

//ALWAYS USE ASYNC METHODS. NODE OPERATES WITH A SINGLE THREAD.

const Logger = require('./logger');

const logger = new Logger();

const path = require('path');

const os = require ('os');

const EventEmitter = require('events');




//Register a listener
// listen for emission. if i register this listener after the event, nothing happens.

logger.on('messagedLogged', (arg) => {
  console.log("listener called", arg);
});


logger.log('message');









//To work with files and directories in node, we must require the FS module.

const fs = require('fs');

const files = fs.readdirSync('./');

//All async methods take a function as their last arguement. node will call this function when that asyncronous operation completes. (callback function)

// const asyncFiles = fs.readdir('./', function(err, files){
//
//   if (err) console.log("error",err);
//
//   else console.log('Result', files)
// });

// console.log(files);



// var pathObj = path.parse(__filename);
//
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
//
//
// console.log('Total Memory: ' + totalMemory);
//
// console.log('Free Memory ' + freeMemory);

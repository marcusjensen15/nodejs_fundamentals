//require function is unique to node, and how we import modules.
//always upload modules as constants, not vars. so we can't overwrite them

//this path object is baked into node. lets us know the path.

//ALWAYS USE ASYNC METHODS. NODE OPERATES WITH A SINGLE THREAD.

const log = require('./logger');

const path = require('path');

const os = require ('os');

//EventEmmitter is a class. that is why it is double upper case.

const EventEmitter = require('events');

const emitter = new EventEmitter();

// listen for emission. if i register this listener after the event, nothing happens.

emitter.on('messagedLogged', function(){
  console.log('Listener called');
});

//raised an event

emitter.emit('messagedLogged');


//Register a listener




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

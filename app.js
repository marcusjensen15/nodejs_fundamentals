//require function is unique to node, and how we import modules.
//always upload modules as constants, not vars. so we can't overwrite them

//this path object is baked into node. lets us know the path.

//ALWAYS USE ASYNC METHODS. NODE OPERATES WITH A SINGLE THREAD.

const log = require('./logger');

const path = require('path');

const os = require ('os');

const fs = require('fs');

const files = fs.readdirSync('./');

console.log(files);



// var pathObj = path.parse(__filename);
//
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
//
//
// console.log('Total Memory: ' + totalMemory);
//
// console.log('Free Memory ' + freeMemory);

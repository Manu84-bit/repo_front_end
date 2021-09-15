// const logger = require('./logger') //the ./ notation indicates the element imported is at the same folder.
// //logger.logg("This is how to call the object imported from logger.js")
// logger("This is how to call the function imported from logger.js")
// const path = require('path'); // imports a built in module
// var pathObject = path.parse(__filename) //path.parse returns an object with the relevant properties of a files' path
// console.log(pathObject)

// module to access to os data
// const os = require('os')
// let totalMemory = os.totalmem()
// let freeMemory = os.freemem()

// console.log( `Total memory = ${totalMemory}`)

// console.log( `Freememory = ${freeMemory}`)

// module to work with files

const fs = require('fs');
//asynchrobous way ta manage files and diriectories

fs.readdir('./', function(err, files){
    if(err) console.log('Error', err)
    else console.log('Results', files)
})

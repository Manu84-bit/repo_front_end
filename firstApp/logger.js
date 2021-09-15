var URL = 'htttp://logger.io/log';

function logg(message){
    console.log(message)
}

//module is the file treated as an object. This object has a property called
//exports. This propoerty allows the use of variables and functions outside
//that module

//module.exports.logg = logg;
//module.exports.url = URL;

// console.log(module)

//to simply export a function use:
module.exports = logg;
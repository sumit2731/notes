/* 
Here we are using old way of importing modules, common js, because inside configyrtons we cannot ES6 modules
*/
const path = require('path');

//this file is basically js module, webpack expect us to export the configuration object
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        //path: './dist'
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none'
}
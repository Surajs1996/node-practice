console.log("importing xyz module into the app module");

// require('./path');

// All the code of modules is wrapped inside a special function known as IIFE (Immediately invoked function express);

console.log(__dirname);
console.log(__filename);

// IIFE Immediately Invoked Function Expression

// (function(module, require){
//     //require(./../multiply);
//     // all the code of th multiply module will run here. 

    
// })();

// (function(exports, require, module, __dirname, __filename){
//         // all code will execute here
// })();
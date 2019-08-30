let tut = require('./app.js');
//Used to call the exported files from the file location 
console.log(tut.sum(1,1));
console.log(tut.pi);
new tut.SomeMathObject();
//Object that we get from the app.js file to show the Output
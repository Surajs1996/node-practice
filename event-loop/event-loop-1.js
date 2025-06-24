const fs = require("fs");

console.log("Event loop started");
const a = 2050;

fs.readFile("./sync-async/dummyFile.txt", "utf8", (err, res) => {
    console.log("FIle read opeartion done => ", res);
});


setImmediate(() => {
    console.log("Set Immediate function called");
});

setTimeout(() => {
    console.log("Set Timeout for 1 sec");
}, 1000);

function printA() {
    console.log("Printing Value of A=>", a);
}

printA();

console.log("last line of the event loop");

//event loop started
//Printing Value of A=> 2050
//last line of the event loop
//Set Immediate function called
//FIle read opeartion done =>
//Set Immediate function called

const fs = require("fs");

const A = 200;

console.log("event loop started");

setImmediate(()=>{
    console.log("Set Immediate called");
});

setTimeout(()=>{
    console.log("Set Timeout called for 1 sec")
}, 1000);

fs.readFile("./sync-async/dummyFile.txt", "utf8", (err, res)=>{
    console.log("File reading operation done successfully", res);
})

Promise.resolve("Promise Resolved").then((val)=>{
    console.log(val);
})

process.nextTick(()=>{
    console.log("process next tick");
});

function printA(){
    console.log("printing value of A", A);
};

printA();

//event loop started
//printing value of A 2050
//process next tick
//Promise Resolved
//Set Immediate called
//File reading operation done successfully
//Set Timeout called for 1 sec
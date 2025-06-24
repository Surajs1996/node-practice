const fs = require("fs");

setImmediate(()=>{
 console.log("SetImmediate called");
});

setTimeout(()=>{
    console.log("setTimeout Called");
},0);

Promise.resolve("Promise Resolved").then(console.log);

fs.readFile("./sync-async/dummyFile.txt", "utf8", ()=>{
    console.log("File reading successfull");
});

process.nextTick(()=>{
    process.nextTick(()=>{
        console.log("process next tick inner");
    });
    console.log("process next tick outer");
});

console.log("last line");

//last line
//process next tick outer
//process next tick inner
//Promise Resolved
//setTimeout Called
//SetImmediate called
//File reading successfull
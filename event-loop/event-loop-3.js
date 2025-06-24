const fs = require("fs");

console.log("event loop started");

setImmediate(()=>{
    console.log("set Immediate called 1");
});

fs.readFile("./sync-async/dummyFile.txt", "utf8", (err,res)=>{
    setImmediate(()=>{
        console.log("set Immediate called 2");
    });

    setTimeout(()=>{
        console.log("set Timeout 2")
    },0);

    process.nextTick(()=>{
        console.log("Process next tick 2")
    })

    console.log("File reading operation successfull", res);
});

setTimeout(()=>{
    console.log("set timeout 1");
},0);

Promise.resolve("Promise Resolved").then((res)=>{
    console.log("Promise is resolved by value = >", res)
});

process.nextTick(()=>{
    console.log("Process next tick 1")
})

console.log("event loop ends")

//event loop started
//event loop ends
//Process next tick 1
//Promise is resolved by value = >
// set timeout 1
//set Immediate called 1
//File reading operation successfull
//Process next tick 2
//set Immediate called 2
//set Timeout 2


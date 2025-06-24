
const fs = require("node:fs");
const https = require("https");

console.log("Hello Async Programming");

const dummyDataReadSync = fs.readFileSync("./sync-async/dummyFile.txt", "utf8");

console.log("Sync File Read =>", dummyDataReadSync);

console.log("After Sync FIle Read");

const a = 3201455454556;
const b = 985896452

https.get('https://dummy.restapiexample.com/api/v1/employees', (res) => {
    let data = "";
    res.on("data", (chunks) => {
        data += chunks;
    })
    res.on("end", () => {
        try {
            // const json = JSON.parse(data);
            console.log("Fetched data successfully from API =>\n", data);
        } catch (err) {
            console.error("Error parsing JSON:", err.message);
        }
    });
})

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log("fetch =>", json))


fs.readFile("./sync-async/dummyFile.txt", "utf8", (err, res) => {
    if (err) {
        console.error("Error reading file:", err.message);
    } else {
        console.log("File Reading Operation Successful, Data =>", res);
    }
})


setTimeout(() => {
    console.log("Set Timeout with Timer 3 s")

}, 3000); // trust issues with setTimeOut


function multiply(num1, num2) {
    return num1 * num2;
}


console.log("Multiply a*b =", multiply(a, b));
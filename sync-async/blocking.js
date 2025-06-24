
const crypto = require("node:crypto");

console.log("Start Blocking the main Thred");


console.log("===============================================")
crypto.pbkdf2Sync("password", "salt", 500000, 105, "sha512")

console.log("Aftr sync crypto")


const a = 789654123;
const b = 123456;

setTimeout(() => {
    console.log("Set Timer for 0 sec");
}, 0);

crypto.pbkdf2("password", "salt", 500000, 1005, "sha512", (err, key) => {
    console.log("crypto key =>", key);
});


function multiply(a, b) {
    return a * b
}

console.log("Multiply a * b => ", multiply(a, b));

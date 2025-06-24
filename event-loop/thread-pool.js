const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 8
console.log(process.env.UV_THREADPOOL_SIZE);

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("crypto 1 successfully generated password", key);
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("crypto 2 successfully generated password", key);
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("crypto 3 successfully generated password", key);
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("crypto 4 successfully generated password", key);
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("crypto 5 successfully generated password", key);
});

console.log("Last Line of the code");


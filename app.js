require('./xyz');

const dataJson = require('./data.json');

console.log("dataJson = >", dataJson);

const { calculateMultiply, calculateSum } = require('./calculate');

const a = 20;
const b = 30;

calculateMultiply(a, b);
calculateSum(a, b);

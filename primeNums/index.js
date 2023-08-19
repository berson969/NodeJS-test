import { findPrimeNums } from "./findPrimeNums.js";

let primeNums = findPrimeNums(2);

console.log(primeNums);

primeNums = findPrimeNums(5);
console.log(primeNums);

primeNums = findPrimeNums(1000);
console.log(primeNums.reverse());
console.log(primeNums.length)
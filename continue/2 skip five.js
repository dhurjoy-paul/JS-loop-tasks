/*
  display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

// solution
// carrierOfResult is the solution
let carrierOfResult = [], carrierOfOdd = [], carrierOfFive = [];
for (let i = 55; i <= 85; i++) {
  if (i % 2 === 1) {
    carrierOfOdd.push(i);
  } 
  if (i % 2 === 0) {
    continue;
  } else if (i % 5 === 0) {
    carrierOfFive.push(i);
    continue;
  } carrierOfResult.push(i);
}
console.log(carrierOfOdd);
console.log(carrierOfFive);
console.log(carrierOfResult);
/* 
  Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// solution
let carrier = [];
for (let i = 1; i <= 40; i++) {
  if (i % 2 === 1) {
    continue;
  } carrier.push(i);
} console.log(carrier);
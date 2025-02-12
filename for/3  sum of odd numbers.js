/*
  * Subtask-1:
    Display sum of all the odd numbers from 81 to 131.

  * Subtask-2:
    Display sum of all the even numbers from 206 to 311.
*/

// solution of subtask-1
let sum = 0;
const oddNumbers = [];
for (let i = 81; i <= 131; i++) {
  if (i % 2 === 1) {
    // console.log(i);
    oddNumbers.push(i);
    sum += i;
  }
} 
console.log('Sum:', sum);
console.log(oddNumbers);

// solution of subtask-2
let Sum = 0;
const evenNumbers = [];
for (let j = 206; j <= 311; j++) {
  if (j % 2 === 0) {
    // console.log(j);
    evenNumbers.push(j);
    Sum += j;
  }
} 
console.log('Sum:', Sum);
console.log(evenNumbers);
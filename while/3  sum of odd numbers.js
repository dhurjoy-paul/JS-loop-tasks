/*
  * Subtask-1:
    Display sum of all the odd numbers from 81 to 131.

  * Subtask-2:
    Display sum of all the even numbers from 206 to 311.
*/

// solution of subtask-1
let i = 81;
const oddNumbers = [];
let sum = 0;
while (i <= 131) {
  if (i % 2 === 1) {
    // console.log(i);
    oddNumbers.push(i);
    sum += i;
  } i++;
} 
console.log('Sum:', sum);
console.log(oddNumbers);

// solution of subtask-2
let j = 206;
const evenNumbers = [];
let Sum = 0;
while (j <= 311) {
  if (j % 2 === 0) {
    // console.log(j);
    evenNumbers.push(j);
    Sum += j;
  } j++;
} 
console.log('Sum:', Sum);
console.log(evenNumbers);
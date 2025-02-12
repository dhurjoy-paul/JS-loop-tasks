/*
  * Subtask-1:
    Find all the odd numbers from 61 to 100.

  * Subtask-2:
    Find all the even numbers from 78 to 98.
*/

// solution of subtask-1
const evenNumbers = [];
for (let i = 61; i <= 100; i++) {
  if (i % 2 === 0) {
    // console.log(i);
    evenNumbers.push(i);
  }
} 
console.log(evenNumbers); 

// solution of subtask-2
const oddNumbers = [];
for (let j = 78; j <= 98; j++) {
  if (j % 2 === 1) {
    // console.log(j);
    oddNumbers.push(j);
  }
} 
console.log(oddNumbers);
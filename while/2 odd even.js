/*
  * Subtask-1:
    Find all the odd numbers from 61 to 100.

  * Subtask-2:
    Find all the even numbers from 78 to 98.
*/

// solution of subtask-1
let i = 61;
const evenNumbers = [];
while (i <= 100) {
  if (i % 2 === 0) {
    // console.log(i);
    evenNumbers.push(i);
    // console.log(evenNumbers);
  }
  i++;
} console.log(evenNumbers);

// solution of subtask-2
let j = 78;
const oddNumbers = [];
while (j <= 98) {
  if (j % 2 === 1) {
    // console.log(j);
    oddNumbers.push(j);
    // console.log(oddNumbers);
  }
  j++;
} console.log(oddNumbers);
/*
  Implement a countdown timer that counts down from 21 to 15.
*/

// solution
let i = 21;
while (i >= 15) {
  console.log(i);
  i--;
} 
console.log('Countdown finished')

// perfect solution
// let i = 21;
// const countInterval = setInterval(() => {
//   console.log(`T-minus ${i}...`);
//   i--;
//   if (i < 15) {
//     clearInterval(countInterval);
//     console.log("Blast off!");
//   }
// }, 1000);
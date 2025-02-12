/*
  Implement a countdown timer that counts down from 21 to 15.
*/

// solution
for (i = 21; i >= 15; i--) {
  console.log(i);
} console.log('countdown finished')

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
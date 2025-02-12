/* 
  Write a while loop that adds numbers starting from 1 
  but stops (using break) as soon as the sum 'reaches' or exceeds 100
*/

// solution
sum = 0;
while (true) {
  sum += 1;
  if (sum >= 100) {
    break;
  }
} console.log(sum);
// output : 100
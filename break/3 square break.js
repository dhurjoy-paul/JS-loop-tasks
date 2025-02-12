/* 
  Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number 
  (like 4, 9, 16, etc.)
*/

// solution 
// i am using 'continue' to show all square numbers
for (let i = 1; i <= 100; i++) {
  const root = Math.sqrt(i);
  if (Number.isInteger(root)) {
    console.log(`Square number: ${i}`);
    continue;
    // break;
  } console.log(i);
}
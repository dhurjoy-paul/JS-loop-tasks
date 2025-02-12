/*
  "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
*/

// solution
let i = 1;
const message = 'while loop: I will spend at least 6 hrs every single day for next 60 days';
while (i <= 60) {
 console.log(message);
 i++;
}

// different solution
for (let day = 1; day <= 60; day++) {
  console.log('for loop: I will spend at least 6 hrs every single day for next 60 days');
}
// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let counter1 = 1;
while (counter1 <= 5) {
  console.log(counter1);
  counter1++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let counter2 = 1;
do {
  console.log(counter2);
  counter2++;
} while (counter2 <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let counter3 = 1; counter3 <= 5; counter3++) {
  console.log(counter3);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// While loop
let counter4a = 10;
while (counter4a >= 1) {
  console.log(counter4a);
  counter4a--;
}

// Do while loop
let counter4b = 10;
do {
  console.log(counter4b);
  counter4b--;
} while (counter4b >= 1);

// For loop
for (let counter4c = 10; counter4c >= 1; counter4c--) {
  console.log(counter4c);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// While loop
let count5a = 7;
while (count5a <= 27) {
  console.log(count5a);
  count5a++;
}

// Do while loop
let count5b = 7;
do {
  console.log(count5b);
  count5b++;
} while (count5b <= 27);

// For loop
for (let count5c = 7; count5c <= 27; count5c++) {
  console.log(count5c);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// While loop
let tens1 = 10;
while (tens1 <= 100) {
  console.log(tens1);
  tens1 += 10;
}

// Do while loop
let tens2 = 10;
do {
  console.log(tens2);
  tens2 += 10;
} while (tens2 <= 100);

// For loop
for (let tens3 = 10; tens3 <= 100; tens3 += 10) {
  console.log(tens3);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

/*
Reason for infinite loop:
Originally, counterFour starts at 1 and the loop condition is (counterFour < 2),
but inside the loop we only decrease counterFour (counterFour--).
That means counterFour keeps going smaller forever (1, 0, -1, -2...) and
the condition (counterFour < 2) always stays true. The loop never stops.
*/

let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let favoriteNum = 9;
for (let i = 0; i <= favoriteNum; i++) {
  console.log(i);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// (Hint - use an if statement in your loop)
let myFavNum = 25;
for (let i = 0; i <= 100; i++) {
  if (i === myFavNum) {
    console.log(i + " my favorite number!");
  } else {
    console.log(i + " not my favorite number");
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below.
//
/*
Q&A (Exercise 10)
- I use a 'for' loop when I know how many times I want the loop to run.
- I use a 'while' loop when I don’t know exactly how many times it needs to repeat, but I have a condition.
- I use a 'do while' loop when I want the code to run at least once before checking the condition.
This depends on whether the stop condition is checked first or last.
*/

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below so that for each value of outsideCounter,
// the inside loop will show a countdown.

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//
/*
Q&A (End Reflection)
This exercise helped me understand how loops control repetition.
At first, writing all three types felt repetitive, but it made me remember
when to use 'for', 'while', or 'do while' loops in real coding.

References I checked after trying on my own:
- MDN Web Docs for for, while, and do...while loops.
- W3Schools JavaScript Loops page.

Author: Chinerey Ukwu
*/

// Commit your file to GitHub.

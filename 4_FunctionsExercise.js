// Week 1 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.
function logGreeting() {
  console.log("Hello!");
}
logGreeting();


// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.
function getName() {
  return "Chinerey Ukwu";
}
console.log(getName());


// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().
function myName() {
  return "Chinerey Ukwu";
}
function logGreeting2() {
  console.log("Hello! My name is " + myName() + ".");
}
logGreeting2();


// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.
function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(sumThree(2, 3, 4));   // 9
console.log(sumThree(10, 20, 30)); // 60
console.log(sumThree(-1, 1, 0));   // 0


// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.
function isDiscountEligible(age) {
  if (age <= 14 || age >= 65) {
    return true;
  } else {
    return false;
  }
}
console.log(isDiscountEligible(10)); // true (child)
console.log(isDiscountEligible(40)); // false (adult)
console.log(isDiscountEligible(70)); // true (senior)


// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.
function repeatString(num, str) {
  for (let i = 0; i < num; i++) {
    console.log(str);
  }
}
repeatString(3, "Learning is fun!");
repeatString(2, "JavaScript rocks!");


// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

/*
Q&A (Exercise 7)
1. What mysteryFunction1 does:
   → It multiplies its input by 2 and returns that value.
2. What prints out for the value of y:
   → "The value of y is 4"
3. What prints out for the value of z:
   → "The value of z is 8"

After running the code, the output matches my prediction.
So I was correct — I learned that functions can return a result without changing the original variable (y).
*/


// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

/*
Q&A (Exercise 8)
1. What mysteryFunction2 does:
   → It subtracts the second number from the first and returns the result.
2. What prints out for the value of a:
   → a = 6 (10 - 4)
3. What prints out for the value of b:
   → b = 5 (a - 1)

After running, the console shows:
"The value of a is 6"
"The value of b is 5"
My reasoning was correct — I learned to trace variable values step by step.
*/


// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs,carrots,orange juice";
const groceryArray = groceryList.split(",");
console.log(groceryArray); // ["eggs", "carrots", "orange juice"]


// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
const morningArray = mySchedule.split("--->", 2);
console.log(morningArray); // ["wake up", "brush teeth"]


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//
/*
Q&A (End Reflection)
I found this mostly easy once I reviewed how functions return vs print values.
The slightly tricky part was remembering to use return instead of console.log when needed.
References I checked after writing my answers:
- MDN docs for split()
- MDN for return statement examples
These helped confirm the correct syntax.

Author: Chinerey Ukwu
*/

// Commit your file to GitHub.s

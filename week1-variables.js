// Week 1 - Variables

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Data Types and Variables

// Exercise 1. Simply declare a variable named 'emptyVariable'
let emptyVariable;

// Exercise 2. Declare a variable called 'myName'
let myName;

// Exercise 3. Assign your name as the value for 'myName'
myName = "Chinerey";

// Exercise 4. Declare a variable called dreamDestination and give it the value
// of what your dream vacation destination is.
let dreamDestination = "Bali";

// Exercise 5. Make the following variables and assignments
// - a variable called num1 with a value greater than 1 and less than 10
// - a variable called num2 with a value of greater than or equal to 1 and less
// than or equal to 10
let num1 = 5;
let num2 = 10;

// Exercise 6. Explain the difference (comment):
// num1 must be >1 and <10 (valid: 2–9)
// num2 can be >=1 and <=10 (valid: 1–10)
// Therefore, 1 and 10 are valid for num2 but NOT for num1.

// Exercise 7. Now we will try some addition.
// a. Assign the values of 4 and 6 to num1 and num2, respectively.
num1 = 4;
num2 = 6;
// b. Make a new variable called 'theSum' using "+".
let theSum = num1 + num2; // 10

// Exercise 8. Multiplication: make 'theProduct'
let theProduct = num1 * num2; // 24

// Exercise 9.
// Make 'statement' using myName and dreamDestination with concatenation or template string
let statement = `Hi, my name is ${myName}, and I can't wait to visit ${dreamDestination}!`;

// *NOTE* For the following exercises, answers go in the quotes of each variable.

// Exercise 10. What is the data type of the value stored in 'dreamDestination'?
const myAnswerForExercise10 = "string";

// Exercise 11. What is the data type of the value stored in 'theProduct'?
const myAnswerForExercise11 = "number";

// Exercise 12. What do you think the value of emptyVariable is?
const myAnswerForExercise12 = "undefined";

// Exercise 13. If
const A = "R";
const B = 1;
const C = 4;
const D = "D";

// What is the value of B + C
const myAnswerForExercise13 = "5";

// Exercise 14 What is the value of A + "n" + D
const myAnswerForExercise14 = "RnD";

// Exercise 15 What is the value of A + B * 2 + D + C / 2:
const myAnswerForExercise15 = "R2D2";

// Exercise 16 What is the value of A * B
const myAnswerForExercise16 = "NaN";

// Exercise 17 What is the value of true || false
const myAnswerForExercise17 = "true";

// Exercise 18 What is the value of 1 === \"1\"
const myAnswerForExercise18 = "false";

// Exercise 19 What is the value of 1 == \"1\"
const myAnswerForExercise19 = "true";

// Exercise 20 What is the value of 1 < 1
const myAnswerForExercise20 = "false";

// Exercise 21 What is the value of 1 < 2 < 3
// (1 < 2) -> true -> coerces to 1; 1 < 3 -> true
const myAnswerForExercise21 = "true";

// Exercise 22 What is the value of 2 < 1 < 3
// (2 < 1) -> false -> coerces to 0; 0 < 3 -> true
const myAnswerForExercise22 = "true";

/ Reflection:
// I found this set manageable overall. Declaring variables and basic operators were easy,
// but the trickier parts were operator precedence (e.g., A + B * 2 + D + C / 2) and
// chained comparisons like 1 < 2 < 3 (type coercion got me at first).
//
// References I used to confirm my answers and syntax:
// - MDN Web Docs (JavaScript data types, operators, equality, and type coercion)
// - freeCodeCamp (JS basics and debugging exercises)
// - Udemy (Intro to JavaScript & Git/GitHub sections for workflow understanding)
// - Git & GitHub docs (commit messages, creating/editing files in a repo)

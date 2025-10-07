
// EXERCISE 1.
function exercise1(num1) {
  let answer1 = "";
  // ------------------------------------------
  // Write your code for exercise 1 below here:
  // ------------------------------------------
  answer1 = "num1 is small";
  if (num1 > 10) {
    answer1 = `The value of num1 is ${num1} and is greater than 10`;
  }
  // ------------------------------------------
  // And above here
  // ------------------------------------------
  return answer1;
}

// EXERCISE 2.
function exercise2(num2) {
  let answer2;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (num2 % 2 === 0) {
    answer2 = `${num2} is even`;
  } else {
    answer2 = `${num2} is odd`;
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer2;
}

// EXERCISE 3.
function exercise3(num3) {
  let answer3;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (num3 > 0) {
    answer3 = `${num3} is positive`;
  } else if (num3 < 0) {
    answer3 = `${num3} is negative`;
  } else {
    answer3 = `${num3} is zero`;
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer3;
}

// EXERCISE 4.
function exercise4(varA, varB) {
  let answer4;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (varA == varB) {
    answer4 = "varA and varB are equal";
  } else {
    answer4 = "varA and varB differ";
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer4;
}

// EXERCISE 5.
// Some unexpected cases where varA and varB seem equal but are not:
// - "5" (string) vs 5 (number)
// - true vs 1
// - null vs undefined
// - [] vs false
// Using === avoids this confusion because it checks type and value.

// EXERCISE 6.
function exercise6(varA, varB, varC) {
  let answer6 = "unassigned";
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (varA === varB && (varA !== varC || varB !== varC)) {
    answer6 = true;
  } else {
    answer6 = false;
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer6;
}

// EXERCISE 7.
function exercise7(num7) {
  let answer7;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  switch (num7) {
    case 1:
      answer7 = "You won!";
      break;
    case 7:
      answer7 = "You are lucky!";
      break;
    case 101:
      answer7 = "Welcome to coding 101!";
      break;
    case 1000000:
      answer7 = "You are one in a million!";
      break;
    default:
      answer7 = "Thanks for that!";
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer7;
}

// EXERCISE 8.
function exercise8(amount1, amount2, minimum, maximum) {
  let answer8;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (
    amount1 >= minimum &&
    amount1 <= maximum &&
    amount2 >= minimum &&
    amount2 <= maximum
  ) {
    answer8 = true;
  } else {
    answer8 = false;
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer8;
}

// EXERCISE 9.
function exercise9(item) {
  let answer9;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (typeof item === "number") {
    switch (item) {
      case 1:
        answer9 = "You won!";
        break;
      case 7:
        answer9 = "You are lucky!";
        break;
      case 101:
        answer9 = "Welcome to coding 101!";
        break;
      case 1000000:
        answer9 = "You are one in a million!";
        break;
      default:
        answer9 = "Thanks for that!";
    }
  } else {
    answer9 = `Please send a number, that was a ${typeof item}.`;
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer9;
}

// EXERCISE 10.
function exercise10(num10) {
  let answer10;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  if (num10 % 15 === 0) {
    answer10 = "Fizz Buzz";
  } else if (num10 % 3 === 0) {
    answer10 = "Fizz";
  } else if (num10 % 5 === 0) {
    answer10 = "Buzz";
  } else {
    answer10 = num10;
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer10;
}

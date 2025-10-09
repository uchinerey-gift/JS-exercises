// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1.
// Write a function called prependToString, which accepts two strings.
// The function should return a new string with the second string prepended to the first string.
function prependToString(str1, str2) {
    return str2 + str1;
}
// Examples:
console.log(prependToString('awesome', 'very')); // --> 'veryawesome'
console.log(prependToString('world', 'hello ')); // --> 'hello world'
console.log(prependToString('nothing', '')); // --> 'nothing'

// Exercise 2.
// Write a function called stringIncludes, which accepts two strings: 
// the first string is a word and the second string is a single character.
// The function should return true if the first string includes the character, otherwise false.
// Do NOT use .includes()
function stringIncludes(word, char) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === char) {
            return true;
        }
    }
    return false;
}
// Examples:
console.log(stringIncludes('awesome', 'e')); // --> true
console.log(stringIncludes('awesome', 'z')); // --> false

// Exercise 3.
// Write a function called stringLastIndexOf, which accepts two strings: 
// the first is a word and the second is a single character.
// Return the last index of the character, or -1 if not found.
function stringLastIndexOf(word, char) {
    for (let i = word.length - 1; i >= 0; i--) {
        if (word[i] === char) {
            return i;
        }
    }
    return -1;
}
// Examples:
console.log(stringLastIndexOf('awesome', 'e')); // --> 6
console.log(stringLastIndexOf('awesome', 'z')); // --> -1

// Exercise 4.
// Write a function called removeFromString, which accepts a string, 
// a starting index (number), and a number of characters to remove.
// The function should return a new string with the characters removed.
function removeFromString(str, start, numToRemove) {
    return str.slice(0, start) + str.slice(start + numToRemove);
}
// Examples:
console.log(removeFromString('Elie', 2, 2)); // --> 'El'
console.log(removeFromString('Elie', 0, 1)); // --> 'lie'
console.log(removeFromString('Hello School', 0, 6)); // --> 'School'
console.log(removeFromString('Hello School', 2, 4)); // --> 'HeSchool'
console.log(removeFromString('Hello School', 6, 400)); // --> 'Hello '

// Exercise 5.
// Write a function called indexOf, which accepts an array and a number.
// Return the first index at which the value exists or -1 if not found.
// Do NOT use .indexOf()
function indexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
// Examples:
let arr = [5, 10, 15, 20];
console.log(indexOf(arr, 20)); // --> 3
let arr2 = [1, 2, 3, 4, 5];
console.log(indexOf(arr2, 2)); // --> 1
let arr3 = [1, 2];
console.log(indexOf(arr3, 10)); // --> -1

// Exercise 6.
// Write a function called includes which accepts a collection, a value, and an optional starting index.
// Return true if the value exists in the collection when we search starting from the starting index.
// Otherwise, return false.
// The collection can be a string, an array, or an object.
function includes(collection, value, startIndex = 0) {
    if (Array.isArray(collection) || typeof collection === "string") {
        for (let i = startIndex; i < collection.length; i++) {
            if (collection[i] === value) {
                return true;
            }
        }
        return false;
    } else if (typeof collection === "object" && collection !== null) {
        for (let key in collection) {
            if (collection[key] === value) {
                return true;
            }
        }
        return false;
    }
}
// Examples:
console.log(includes([1, 2, 3], 1)); // --> true
console.log(includes([1, 2, 3], 1, 2)); // --> false
console.log(includes([1, 2, 3], 6)); // --> false
console.log(includes({ 'a': 1, 'b': 2 }, 1)); // --> true
console.log(includes({ 'a': 1, 'b': 2 }, 'a')); // --> false
console.log(includes('abcd', 'b')); // --> true
console.log(includes('abcd', 'e')); // --> false
console.log(includes('abcd', 'a', 2)); // --> false

/*
Q&A (End Reflection)
This exercise helped me understand how functions can be written to handle different data types,
like strings, arrays, and objects. I practiced loops, conditionals, and using slice()
to rebuild new strings.

Hardest part:
- Remembering to return the correct boolean values.
- Checking object values correctly in Exercise 6.

References I checked after writing my code:
- MDN Web Docs: for loops, slice(), and typeof.
- W3Schools examples for string and array basics.

Overall, this was fun and made me more confident writing basic JS functions.

Author: Chinerey Ukwu
*/

// Commit your work

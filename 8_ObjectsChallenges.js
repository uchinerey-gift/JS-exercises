// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
function keys(obj) {
    const out = [];
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            out.push(key);
        }
    }
    return out;
}
// Examples:
let obj1 = { a: 1, b: 2, c: 3 };
console.log(keys(obj1)); // ["a","b","c"]
let obj1b = { first: "Matt", last: "Lane" };
console.log(keys(obj1b)); // ["first","last"]
console.log(keys({})); // []


// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
function values(obj) {
    const out = [];
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            out.push(obj[key]);
        }
    }
    return out;
}
// Examples:
let obj2 = { a: 1, b: 2, c: 3 };
console.log(values(obj2)); // [1,2,3]
let obj2b = { first: "Matt", last: "Lane", isDogOwner: true };
console.log(values(obj2b)); // ["Matt","Lane",true]
console.log(values({})); // []


// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// IMPORTANT: Do not use the built in Object.entries() function!
function entries(obj) {
    const out = [];
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            out.push([key, obj[key]]);
        }
    }
    return out;
}
// Examples:
let obj3 = { a: 1, b: 2, c: 3 };
console.log(entries(obj3)); // [["a",1],["b",2],["c",3]]
let obj3b = { first: "Matt", last: "Lane", isDogOwner: true };
console.log(entries(obj3b)); // [["first","Matt"],["last","Lane"],["isDogOwner",true]]
console.log(entries({})); // []


// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object,
// or undefined if that key is not present in the object.
function pluck(arr, keyName) {
    const out = [];
    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];
        // If the key doesn't exist, this will push undefined (as required)
        out.push(obj[keyName]);
    }
    return out;
}
// Examples:
console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }], "name"));
// ["Tim","Matt","Elie"]
console.log(
    pluck(
        [{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],
        "isBoatOwner"
    )
);
// [true, false, undefined]


// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value". Each pair separated by ", " except the last.
function stringFromObject(obj) {
    const parts = [];
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            parts.push(key + " = " + obj[key]);
        }
    }
    return parts.join(", ");
}
// Examples:
console.log(stringFromObject({ a: 1, b: "2" })); // "a = 1, b = 2"
console.log(stringFromObject({ name: "Elie", job: "Instructor", isCatOwner: false }));
// "name = Elie, job = Instructor, isCatOwner = false"
console.log(stringFromObject({})); // ""




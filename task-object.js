// Exercise 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);

// Exercise 2
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

// Exercise 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum); // should print 390

// Exercise 4
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.log(menu);
// should print: { width: 400, height: 600, title: 'My menu' }

/*
Q&A (End Reflection)

I found these object exercises clear and fun to work through. 
They helped me understand how JavaScript objects store data using key/value pairs, 
and how to loop through them with the "for...in" statement.

The most helpful part was learning how to:
- Create and edit properties inside objects.
- Use loops to add up values (like in the salaries example).
- Check property types with "typeof" and modify only numeric values.
- Write reusable functions that work with any object.

References I used after trying it on my own:
- MDN Web Docs: Objects, for...in loop, typeof operator
- Previous exercises from Techtonica’s curriculum
- My VS Code terminal output for debugging

Overall, I feel confident about manipulating objects and looping through their data now.

Author: Chinerey Ukwu
*/











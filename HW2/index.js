//*****Task 1*****/

/*let x = 1;
let y = 2;

let res1 = x.toString() + y.toString();
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = (x < y).toString() + y;
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x < y;
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x * "abc";
console.log(res4); // NaN
console.log(typeof res4); // "number"*/


//*****Task 2*****/

/*let inputValue = prompt("Enter a number:");

if (isNaN(inputValue)) {
    console.log("Incorrect input.");
} else {
    inputValue = Number(inputValue);
    let isEvenPositive = (inputValue > 0 && inputValue % 2 === 0);
    let isMultipleOf7 = (inputValue % 7 === 0);
    console.log(`The number even and positive: ${isEvenPositive}`);
    console.log(`The number a multiple of 7: ${isMultipleOf7}`);

    let areBothConditionCOrrect = isEvenPositive && isMultipleOf7;
    console.log(`The both conditions are correct: ${areBothConditionCOrrect}`);  
}*/


//*****Task 3*****/

/*let arr = [];

arr[0] = 88;   
arr[1] = "Hello";
arr[2] = true;
arr[3] = null;

console.log(`Number of elements: ${arr.length}`);

arr[4] = prompt("Enter any value for the fifth element:");
console.log(`Fifth element: ${arr[4]}`);

arr.shift();
console.log(arr);*/


//*****Task 4*****/

/*let cities = ["Rome", "Lviv", "Warsaw"];
let result = cities.join(" * ");
console.log(result);*/


//*****Task 5*****/

/*let isAdult = prompt("How old are you?");

if (isAdult >= 18) {
    console.log("You have reached the age of majority.");
} else {
    console.log("You are still too young.");
}*/


//*****Task 6*****/

/*let a = parseFloat(prompt("Enter the length of side a:"));
let b = parseFloat(prompt("Enter the length of side b:"));
let c = parseFloat(prompt("Enter the length of side c:"));

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    console.log("Incorrect data.");
} else {
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(`Area of the triangle: ${area.toFixed(3)}`);

    let isRectangularTriangle = (a * a + b * b === c * c) || 
                          (b * b + c * c === a * a) || 
                          (c * c + a * a === b * b);

    let isRectangularTriangle = (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) || 
                          (Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)) || 
                          (Math.pow(c, 2) + Math.pow(a, 2) === Math.pow(b, 2));
    
    console.log(`Is the triangle rectangular: ${isRectangularTriangle}`);
}*/



//*****Task 7*****/

// Using if-else
let currentTime = new Date().getHours();

if (currentTime >= 23 || currentTime < 5) {
    console.log("Good night");
} else if (currentTime >= 5 && currentTime < 11) {
    console.log("Good morning");
} else if (currentTime >= 11 && currentTime < 17) {
    console.log("Good day");
} else {
    console.log("Good evening");
}

// Using switch-case
let currentHour = new Date().getHours();
let greeting;

switch (true) {
    case (currentHour >= 23 || currentHour < 5):
        greeting = "Good night";
        break;
    case (currentHour >= 5 && currentHour < 11):
        greeting = "Good morning";
        break;
    case (currentHour >= 11 && currentHour < 17):
        greeting = "Good day";
        break;
    case (currentHour >= 17 && currentHour < 23):
        greeting = "Good evening";
        break;
}

console.log(greeting);
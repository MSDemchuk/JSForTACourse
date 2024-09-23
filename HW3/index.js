//*****Task 1*****/

// for
/*let array1 = [2, 3, 4, 5];
let product = 1;

for (let i = 0; i < array1.length; i++) {
    product *= array1[i];
}
console.log("Product using for loop:", product);

// while
let array2 = [2, 3, 4, 5];
let product2 = 1;
let i = 0;

while (i < array2.length) {
    product2 *= array2[i];
    i++;
}
console.log("Product using while loop:", product2);*/


//*****Task 2*****/

/*for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}*/


//*****Task 3*****/

/*function randArray(k) {
    let array = [];
    for (let i = 0; i < k; i++) {
        array.push(Math.floor(Math.random() * 500) + 1);
    }
    return array;
}

k = Number(prompt("Enter a random number: "));
console.log(randArray(k));*/


//*****Task 4*****/

/*function raiseToDegree(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "Both a and b must be integers";
    }

    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

let a = parseInt(prompt("Enter number a:"));
let b = parseInt(prompt("Enter number b:"));

console.log("Result:", raiseToDegree(a, b));*/


//*****Task 5*****/

/*function findMin(...args) {
    return Math.min(...args);
}

console.log(findMin(12, 14, 4, -4, 0.2));*/

/*function findMin() {
    if (arguments.length === 0) {
        return "No arguments provided";
    }

    let minValue = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < minValue) {
            minValue = arguments[i];
        }
    }
    return minValue;
}

console.log(findMin(12, 14, 4, -4, 0.2)); // => -4*/


//*****Task 6*****/

/*function findUnique(array) {
    let uniqueElements = new Set(array);
    return uniqueElements.size === array.length;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));*/

/*function findUnique(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));*/


//*****Task 7*****/

/*function lastElem(array, x = 1) {
    let result = [];

    if (x >= array.length) {
        return array;
    }

    for (let i = array.length - x; i < array.length; i++) {
        result.push(array[i]);
    }

    if (x === 1) {
        return result[0];
    }

    return result;
}

console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));
console.log(lastElem([3, 4, 10, -5], 8));*/


/*function lastElem(array, x = 1) {
    if (x >= array.length) {
        return array;
    } else {
        return array.slice(-x);
    }
}
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));
console.log(lastElem([3, 4, 10, -5], 8));*/


//*****Task 8*****/

function capitalizeWords(phrase) {
    let words = phrase.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let capitalizedWord = word[0].toUpperCase() + word.slice(1);
        result.push(capitalizedWord);
    }
    return result.join(' ');
}

console.log(capitalizeWords('i love java script'));
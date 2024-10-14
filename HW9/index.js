//*****Task 1*****/

/*function getPromise(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

// Example usage:
getPromise("test promise", 2000).then(function(data) {
    console.log(data);
});*/


//*****Task 2*****/

/*function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        let product = 1;

        for (let num of arr) {
            if (typeof num !== 'number') {
                return reject("Error! Incorrect array!");
            }
            product *= num;
        }

        resolve(product);
    });
}

// Example usage:
calcArrProduct([3, 4, 5])
    .then(result => console.log(result))  // 60
    .catch(error => console.log(error));

calcArrProduct([5, "user2", 7, 12])
    .then(result => console.log(result))  // Will not execute
    .catch(error => console.log(error));  // "Error! Incorrect array!"*/


//*****Task 3*****/

/*
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

function showNumbers() {
    let maxTime = 3000;
    let promises = [];

    for (let i = 0; i < 10; i++) {
        let randomTime = Math.floor(Math.random() * maxTime);
        promises.push(() => delay(i, randomTime)); // Push each delayed number as a function
    }

    promises.reduce((prevPromise, nextPromise) => {
        return prevPromise.then(() => nextPromise().then(result => console.log(result)));
    }, Promise.resolve());
}

showNumbers();
*/



//*****Task 4*****/

/*

*/
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
    let maxTime = 3000;

    for (let i = 0; i < 10; i++) {
        let randomTime = Math.floor(Math.random() * maxTime);
        let result = await delay(i, randomTime);
        console.log(result);
    }
}

showNumbers();

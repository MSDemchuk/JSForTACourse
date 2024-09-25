//*****Task 1*****/

/*function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error('Both parameters must be numbers');
    }
    if (width <= 0 || height <= 0 ){
        throw new Error('Both parameters must be positive numbers');
    }

    return width * height;
}

try {
    let width = 5;
    let height = 9;
    let area = calcRectangleArea(width, height);
    console.log('Rectangle Area:', area);
} catch (error) {
    alert(error.message);
    console.error('Error:', error.message);
}*/



//*****Task 2*****/

/**function checkAge() {
    try {
        let age = prompt('Enter your age:');
        
        if (!age) {
            throw new Error('The field is empty! Please enter your age.');
        }

        if (isNaN(age)) {
            throw new Error('The value entered is not a number!');
        }

        age = Number(age);

        if (age < 14) {
            throw new Error('Your age is less than 14.');
        }

        alert('You have access to watch the movie.');
    } catch (error) {
        alert(`Error: ${error.name} - ${error.message}`);
    }
}

checkAge(); */



//*****Task 3*****/

/** class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }
}

function showMonthName(month) {
    const monthNames = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    };

    if (isNaN(month) || month <= 0) {
        throw new MonthException('Invalid input');
    }
    if (month > 12) {
        throw new MonthException('Incorrect month number');
    }

    return monthNames[month];
}

try {
    let input = prompt("Enter a month number:")
    console.log(showMonthName(input));
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}*/



//*****Task 4*****/

/* */
function showUser(id) {
    if (isNaN(id)) {
        throw new Error(`ID must be a number: ${id}`);
    }
    if (id < 0) {
        throw new Error(`ID must not be negative: ${id}`);
    }
    return { id: id };
}

function showUsers(ids) {
    let validUsers = [];
    
    ids.forEach((id) => {
        try {
            let user = showUser(id);
            validUsers.push(user);
        } catch (error) {
            console.error(error.message);
        }
    });

    return validUsers;
}

console.log(showUsers([7, -12, 44, 22, "test"]));
//*****Task 1*****/

/*function upperCase(str) {
    const pattern = /^[A-Z]/;

    if (pattern.test(str)) {
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character");
    }
}

upperCase('regexp');
upperCase('RegExp');*/


//*****Task 2*****/

/*function checkEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

console.log(checkEmail("Qmail2@gmail.com"));
console.log(checkEmail("invalid-email.com"));
*/


//*****Task 3*****/

/*function findPattern(str) {
    const pattern = /d[bB]+d?|[bB]+|d/gi;
    const matches = str.match(pattern);
    return matches;
}

const result = findPattern("cdbBdbsbz");
console.log(result);
*/


//*****Task 4*****/

/*function swapSubstrings(str) {
    const pattern = /(\w+)\s*,\s*(\w+)/;
    return str.replace(pattern, '$2, $1');
}

const input = "Script, Java";
const result = swapSubstrings(input);
console.log(result);
*/



//*****Task 5*****/

/*function validateCardNumber(cardNumber) {
    const pattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return pattern.test(cardNumber);
}

console.log(validateCardNumber("9999-9999-9999-9999"));
console.log(validateCardNumber("1234567891011121"));*/


//*****Task 6*****/

/*function checkEmail(email) {
    const pattern = /^[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

    if (pattern.test(email) && !email.includes("--")) {
        console.log("Email is correct!");
    } else {
        console.log("Email is not correct!");
    }
}

checkEmail('my_mail@gmail.com'); // "Email is correct!"
checkEmail('#my_mail@gmail.com'); // "Email is not correct!"
checkEmail('my_ma--il@gmail.com'); // "Email is not correct!"*/


//*****Task 7*****/

/**/
function checkLogin(str) {
    const [loginPart] = str.split(" ");

    const loginPattern = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;

    const isValid = loginPattern.test(loginPart);

    const numberPattern = /[0-9]*\.?[0-9]+/g;
    const numbers = str.match(numberPattern) || [];

    const invalidCharPattern = /[^a-zA-Z0-9\s.,-]/;
    const finalResult = isValid && !invalidCharPattern.test(str);

    console.log(finalResult);
    console.log(numbers.join(", "));
}

checkLogin('ee 1.1 ret 3');
checkLogin('ee 1*1 ret 3');

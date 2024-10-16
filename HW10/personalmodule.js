const os = require('os');

function getGreeting() {
    const username = os.userInfo().username;
    const currentHour = new Date().getHours();

    let greeting;
    if (currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
    return `${greeting}, ${username}`;
}

module.exports = {
    getGreeting
};
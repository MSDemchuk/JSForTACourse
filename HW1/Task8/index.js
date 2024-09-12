const secondsPerMinute = 60;
const minutesPerHour = 60;
const hoursPerDay = 24;
const daysPerMonth = 30;

const secondsInHour = secondsPerMinute * minutesPerHour;
const secondsInDay = secondsInHour * hoursPerDay;
const secondsInMonth = secondsInDay * daysPerMonth;

alert(`Seconds in an hour: ${secondsInHour}, seconds in a day: ${secondsInDay}, seconds in a month:  ${secondsInMonth}`);
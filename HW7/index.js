//*****Task 1*****/

/*let newWindow = window.open("", "", "width=300,height=300");

setTimeout(() => {
    newWindow.resizeTo(500, 500);
}, 2000);

setTimeout(() => {
    newWindow.moveTo(200, 200);
}, 4000);

setTimeout(() => {
    newWindow.close();
}, 6000);*/


//*****Task 2*****/

/* function changeCSS() {
    let paragraph = document.getElementById("text");
    paragraph.style.color = "orange";
    paragraph.style.fontSize = "20px";
    paragraph.style.fontFamily = "Comic Sans MS";
}

document.getElementById("styleButton").addEventListener("click", changeCSS);*/


//*****Task 3*****/

/*
document.getElementById("btn1").addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});

document.getElementById("btn2").addEventListener("dblclick", function() {
    document.body.style.backgroundColor = "pink";
});


document.getElementById("btn3").addEventListener("mousedown", function() {
    document.body.style.backgroundColor = "brown";
});

document.getElementById("btn3").addEventListener("mouseup", function() {
    document.body.style.backgroundColor = "white";
});

document.getElementById("link").addEventListener("mouseover", function() {
    document.body.style.backgroundColor = "yellow";
});

document.getElementById("link").addEventListener("mouseout", function() {
    document.body.style.backgroundColor = "white";
});
*/


//*****Task 4*****/

/*
document.getElementById("deleteBtn").addEventListener("click", function() {
    let dropdown = document.getElementById("namesDropdown");
    let selectedOption = dropdown.selectedIndex;

    if (selectedOption !== -1) {
        dropdown.remove(selectedOption);
    }
});
*/


//*****Task 5*****/

/*const button = document.getElementById("liveButton");
const messageArea = document.getElementById("messageArea");

function logMessage(message) {
    const p = document.createElement("p");
    p.textContent = message;
    messageArea.appendChild(p);
}

button.addEventListener("click", function () {
    logMessage("I was pressed!");
});

button.addEventListener("mouseover", function () {
    logMessage("Mouse on me!");
});

button.addEventListener("mouseout", function () {
    logMessage("Mouse is not on me!");
}); */



//*****Task 6*****/

/*function updateWindowSize() {
    document.getElementById("width").textContent = window.innerWidth;
    document.getElementById("height").textContent = window.innerHeight;
}

window.addEventListener("resize", updateWindowSize);

updateWindowSize(); */


//*****Task 7*****/

/**/

const countryCities = {
    ger: ["Berlin", "Munich", "Hamburg"],
    usa: ["New-York", "Washington", "Boston", "Chicago"],
    ukr: ["Kyiv", "Lviv", "Odessa"]
};

const countryDropdown = document.getElementById("country");
const citiesDropdown = document.getElementById("cities");
const selectionResult = document.getElementById("selectionResult");

function populateCities() {
    const selectedCountry = countryDropdown.value;
    const cities = countryCities[selectedCountry];

    citiesDropdown.innerHTML = "";
    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citiesDropdown.appendChild(option);
    });
    updateSelectionResult();
}

function updateSelectionResult() {
    const selectedCountry = countryDropdown.options[countryDropdown.selectedIndex].text;
    const selectedCity = citiesDropdown.value;
    selectionResult.textContent = `${selectedCountry}, ${selectedCity}`;
}

countryDropdown.addEventListener("change", populateCities);
citiesDropdown.addEventListener("change", updateSelectionResult);

populateCities();
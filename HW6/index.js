//*****Task 1*****/

/*document.getElementById("test").textContent = "Last";
console.log(document.getElementById("test"));

document.querySelector("#test").textContent = "Last";
console.log(document.getElementById("test"));*/


//*****Task 2*****/

/* let imgElement = document.querySelector(".image");
imgElement.src = "cat.jpg";

alert(imgElement.outerHTML);*/


//*****Task 3*****/

/*let paragraphs = document.querySelectorAll("#text p");
paragraphs.forEach((paragraph, index) => {
    console.log(`Selector text ${index}: ${paragraph.textContent}`);
});*/


//*****Task 4*****/
let listItems = document.getElementById("list").children;

/*const first = listItems.firstElementChild;
const second = listItems.lastElementChild;  
const third = first.nextElementSibling;
const fourth = second.previousElementSibling;
const last = third.nextElementSibling;*/

const first = listItems[0];
const second = listItems[4];  
const third = listItems[1];
const fourth = listItems[3];
const last = listItems[2];

let order = [first, second, third, fourth, last];

for (let index = 0; index < order.length; index++) {
    alert(order[index].textContent);   
}


//*****Task 5*****/

/* 
document.querySelector("h1").style.backgroundColor = "green";

let paragraphs = document.querySelectorAll("#myDiv p");
paragraphs[0].style.fontWeight = "bold";
paragraphs[1].style.color = "red";
paragraphs[2].style.textDecoration = "underline";
paragraphs[3].style.fontStyle = "italic";

let listItems = document.querySelectorAll("#myList li");
listItems.forEach(item => {
    item.style.display = "inline";
    item.style.marginRight = "10px";
});

document.querySelector("span").style.display = "none";
*/


//*****Task 6*****/

/* 
let input1Value = prompt("Enter the first message:");
let input2Value = prompt("Enter the second message:");

document.getElementById("input1").value = input1Value;
document.getElementById("input2").value = input2Value;

let temp = document.getElementById("input1").value;
document.getElementById("input1").value = document.getElementById("input2").value;
document.getElementById("input2").value = temp;
*/


//*****Task 7*****/

   /* let main = document.createElement("main");
    main.className = "mainClass check item";

    let div = document.createElement("div");
    div.id = "myDiv";

    let paragraph = document.createElement("p");
    paragraph.textContent = "First paragraph";

    div.appendChild(paragraph);
    main.appendChild(div);
    document.body.appendChild(main);*/
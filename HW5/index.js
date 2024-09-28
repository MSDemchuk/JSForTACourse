//*****Task 1*****/

/*function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web development"
};

console.log(propsCount(mentor));*/


//*****Task 2*****/

/* function showProps(obj) {
    let properties = Object.keys(obj);
    let values = Object.values(obj);
    
    console.log("Properties:", properties);
    console.log("Values:", values);
}

let bookObject = {
    title: "Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937,
    pages: 366,
    hasRead: true
};

showProps(bookObject);*/


//*****Task 3*****/

/* class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName) {
        return `${this.surname} ${this.name} ${middleName}`;
    }

    showCourse() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());*/


//*****Task 4*****/

/* class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        const salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${salary}`);
    }

    showSalaryWithExperience() {
        const salaryWithExp = this.dayRate * this.workingDays * this.#experience;
        console.log(`${this.fullName} salary: ${salaryWithExp}`);
    }

    get getExperience() {
        return this.#experience;
    }

    set setExperience(value) {
        this.#experience = value;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
worker1.showSalary();
console.log("New experience: " + worker1.getExperience);
worker1.showSalaryWithExperience();
worker1.setExperience = 1.5;
console.log("New experience: " + worker1.getExperience);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Thomson", 48, 22);
worker2.showSalary();
console.log("New experience: " + worker2.getExperience);
worker2.showSalaryWithExperience();
worker2.setExperience = 1.5;
console.log("New experience: " + worker2.getExperience);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
worker3.showSalary();
console.log("New experience: " + worker3.getExperience);
worker3.showSalaryWithExperience();
worker3.setExperience = 1.5;
console.log("New experience: " + worker3.getExperience);
worker3.showSalaryWithExperience();

let workers = [worker1, worker2, worker3];
workers.sort((a, b) => (a.dayRate * a.workingDays * a.getExperience) - (b.dayRate * b.workingDays * b.getExperience));

console.log("Sorted salary:");
workers.forEach(worker => {
    worker.showSalaryWithExperience();
});*/



//*****Task 5*****/

/* 

*/
class GeometricFigure {
    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    getArea() {
        return 0.5 * this.base * this.height;
    }
}

class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }

    getArea() {
        return this.side * this.side;
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

function handleFigures(figures) {
    let totalArea = figures.reduce((area, figure) => {
        if (figure instanceof GeometricFigure) {
            console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
            return area + figure.getArea();
        }
        return area;
    }, 0);

    console.log("Total area: " + totalArea);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
handleFigures(figures);

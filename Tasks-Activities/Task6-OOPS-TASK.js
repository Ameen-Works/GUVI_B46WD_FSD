//Question 1
console.log("Question 1");

let movies = [];
//The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
let Defaultrating = "PG";

class Movie {
    title = "";
    studio = "";
    rating = "";

    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating || Defaultrating;
        // let movie=[title,studio,rating];
    }

    setMovieList(newMovie) {
        movies = [...movies, newMovie];
    }
}
//Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
const getPG = (arr) => {
    let result = arr.filter((item) => { if (item.rating === "PG") return item }).map((item) => { return item.title });
    return result;
}

let Sardar = new Movie("Sardar", "AVM", "PG");
let Sarpatta = new Movie("Sarpatta", "AVM", "PG13");
let serversundharam = new Movie("ServerSUndharam", "AVM");
//Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
let CasinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");
Sardar.setMovieList(Sardar);
Sarpatta.setMovieList(Sarpatta);
serversundharam.setMovieList(serversundharam);
CasinoRoyale.setMovieList(CasinoRoyale);
console.log(movies);

console.log(getPG(movies));



//Question 2
console.log("Question 2");
let defaultRad = 1.0;
let defaultCol = "red";
class Circle {
    constructor(rad, col) {
        this.rad = rad || defaultRad;
        this.col = col || defaultCol;
    }
    setRadius(radius) {
        this.rad = radius;
    }
    getRadius() {
        return this.rad;
    }
    setColor(color) {
        this.col = color;
    }
    getColor() {
        return this.col;
    }
    getArea() {
        return 3.14 * this.rad;
    }
    getCircumference() {
        return 2 * 3.14 * this.rad;
    }
}


let defaultCircle = new Circle();
console.log(defaultCircle);

let circle1 = new Circle(2, "green");
console.log(circle1);

let circle2 = new Circle(3);
console.log(circle2);

circle2.setColor("yellow");
console.log(circle2);

circle1.setRadius(5);
console.log(circle1);

console.log(circle2.getColor());
console.log(circle1.getArea());
console.log(defaultCircle.getCircumference());
//Question 3
//class to hold person details.
console.log("Question 3");

class Person {
    constructor() {
        let canWalk, canEat, canRun = true;
    }
    setPersonalDetails(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getPersonalDetails() {
        return (this);
    }
}

let person1 = new Person();
person1.setPersonalDetails("Arshath", 24, "Male");
console.log(person1.getPersonalDetails());

//Calculate Uber Price
console.log("Question 4");

class UberPrice {
    startLocation = "";
    endLocation = "";
    distance = 0;
    minfare=0;
    constructor() {
        this.minfare = 25;
    }
    setLocation(start, end) {
        this.startLocation = start;
        this.endLocation = end;
    }
    calculateDistance() {
        this.distance = 250;
    }
    getUberPrice() {
        return this.distance * this.minfare;
    }

}

let ride1 = new UberPrice();
ride1.setLocation("chennai", "Pondicherry");
ride1.calculateDistance();
console.log(`UberPrice: ${ride1.getUberPrice()}`);

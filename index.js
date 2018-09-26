// Variables must be meaningful names
// Use 'let' in ES6 instead of var
// Use camelCase

let name = 'Brian';
let firstName = 'Jessie'

console.log(firstName);

// init. variables without defining them:
let myName;

// Constants are unchanging values of variables
const interestRate = 0.3;
console.log(interestRate);  // This value can not be reassigned.
// If you don't need to reassign different values to a variable, you should use constants, otherwise 'let'


let person = {
    name: 'Brian',
    age: 30
};

// Dot Notation
person.name = 'John';

// Bracket Notation
person['name'] = 'Marry';
console.log(person.name);
// Dot notation is more clean and often used.



// ARRAYS
let selectedColors = ['red','blue'];
console.log(selectedColors[0]);
// changing array values:
selectedColors[0] = 'blue';
console.log(selectedColors[0]);
// Accessing the count of items in an array:
console.log(selectedColors.length);


// Functions - argument vs. parameter
function greet(name){  // The parameter
    console.log(name);
}

greet('Brian');  // The argument passed into the function param.


// Incrimenting and Decrimenting oddities
let x = 1;
console.log(++x); // output will be: 2
x = 1; // resetting X back to 1
console.log(x++); // output will be: 1 (x is output first, then incrimented to 2) so the value is 2, but console will read 1

// equality checks
console.log(1 === 1);  // checks the value and the type - TRUE
console.log(1 === '1'); // FALSE
console.log(1 == '1'); // Converts types (evaluates to TRUE)
console.log(true == 1); // Also true, because 1 was converted to true;


// Ternary Operators (Conditional Operators) the Groovy Elvis type operator
// if a customer has more than 100 points they are a gold costumer.  otherwise they are silver
let points = 110;
let type = points > 100 ? 'gold' : 'silver';  // If evaluation is true, we set "type" to 'gold' otherwise silver
console.log(type);


// Falsy (not false), these are undefined, null, 0, false, '', NaN
// Anything is not falsy is truthy.
// Short-circuiting : when a evaluation finds something truthy, it stops:
// false || 1 || 2 that would return 1.  False is falsy, 1 is not falsy, so it stops and returns 1.

let userColor = 'red';
let defaultColor = 'blue';
let currentcolor = userColor || defaultColor;
console.log(currentcolor); // returns red

let userColor2 = undefined;
let defaultColor2 = 'blue';
let currentcolor2 = userColor2 || defaultColor2;
console.log(currentcolor2); // returns blue, as we have a default set, using OR operators


let xb = 10;
let yb = xb++;
console.log(yb);


// Exercise 1
let a = 'red';
let b = 'blue';
// swap the values
// solution 1:
// a = 'blue';
// b = 'red';

// solution 2:
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);


// If else
let hour = 23;
if (hour >= 6 && hour <= 12){
    console.log("Good Morning");
}else if (hour >= 12 && hour <= 18){
    console.log("Good Afternoon");
}else
    console.log("Good Evening");



// Switch

let role; //instiation of role variable;
role = 'guest';
switch(role) {
    case 'guest':
        console.log("Hi Guest");
        break;
    case 'moderator':
        console.log('Hi Moderator');
        break;
    case 'admin':
        console.log('Hi Admin');
        break
    default:
        console.log('Unknown condition or role')
}


// For loop in object

const guy = {
    name: 'Guy',
    age: 31
};

for (let key in guy){
    console.log(key, guy[key]);
}

// For loop of object
const manyColors = ['red','blue','green','white','black'];

for (let color of manyColors){
    console.log(color)
}

function twoNumbers(num1, num2) {
    let larger = num1 > num2 ? num1 : num2;
    console.log(larger);
    return larger
}

twoNumbers(22,19);

function isLandscape(width, height){
    return (width > height) ? true: false;
}

console.log(isLandscape(768,1024));

let output = fizzBuzz('hi');
console.log(output);

function fizzBuzz(input) {
    if ((input % 3 === 0) && (input % 5 === 0)){
        return 'FizzBuzz';
    }

    if (input % 3 === 0){
        return 'Fizz'
    }

    if (input % 5 === 0){
        return 'Buzz'
    }

    if (isNaN(input)){
        return 'Not a number';
    }

    if ((input % 3 !== 0) || (input % 5 !== 0)){
        return input;
    }

    // switch (input) {
    //     case (input % 3 === 0) && (input % 5 === 0):
    //         console.log('FizzBuzz');
    //         break;
    //     case input % 3 === 0:
    //         console.log('Fizz');
    //         break;
    //     case input % 5 === 0:
    //         console.log('Buzz');
    //         break;
    //     case input % 3 !== 0 || input % 5 !== 0:
    //         console.log(input);
    //         break;
    //     case isNaN(input):
    //         console.log('Not a number');
    //         break;
    // }
}

// speed limit = 70
// 5 over the speed limit is equal to 1 point
// math.floor()
// 12 points > license is suspended.

checkSpeed(72);

function checkSpeed(speed) {
    if (speed > 70){
        let counter = 0;
        let adjustedSpeed = speed - 70;
        while (adjustedSpeed > 1){
            if (adjustedSpeed % 5 === 0){
                counter ++;
            }
            adjustedSpeed--;
        }
        console.log(counter);
        if(counter >= 12){
            console.log('License Revoked');
        }
    }
}


// Exercise: write function that takes an object that has number and string data. only output the string data.

const movie = {
    title: 'Lost in Space',
    releaseYear: 2017,
    rating: '4.8',
    director: 'Freddie Mercury'
};

showProperties(movie);

function showProperties(object) {
    for(let key in object) {
        if (isNaN(object[key])) {
            console.log(object[key])
        }
    }
}

// Exercise: calculate letter grade averages
const marks = [80,80,50, 50];

console.log(calculateGrade(marks));
function calculateGrade(marks) {
    let gradeCount = marks.length;
    let sum = 0;
    for(let i of marks){
        sum = sum + i
    }
    let grade = sum / gradeCount;
    if (grade < 60) return 'F';
    if (grade >= 60 && grade <=69) return 'D';
    if (grade >= 70 && grade <=79) return 'C';
    if (grade >= 80 && grade <=89) return 'B';
    if (grade >= 90) return 'A';
}

// DYNAMIC NATURE OF OBJECTS

const circle = {
    radius: 1
};

circle.color = 'yellow';        // Properties can be dynamcially added like this
circle.draw = function() {};    // Even functions can be added this way
//delete ciricle.color;           // To delete a property, you use the delete operator

// Types of functions: factory function vs. constructor
// Factory Functions are defined like so:
function createCircle(radius){
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
// Instantiated like so:
const anotherCircle = createCircle(1);

// Constructor function:
function Circle(radius) {       // Recomended naming convention Pascal Case
    this.radius = radius;       // this keyword used to setup variables
    this.draw = function() {
        console.log('draw');
    }
}
// Instantiated like so:
const another = new Circle(1)

// CLONING AN OBJECT
const circle2 = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another2 = Object.assign({}, circle2);  // this copies the key/values in circle object into a new object called another.

// We can add new attributes to the object like so:
const anotherOne = Object.assign({
    color: 'yellow',
}, circle2);
// The above copies the original object, and adds an attribute color, assigned to 'yellow'

// Cloning using the Spread Opperator (...)
const circleThree = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
const anotherSpread = { ...circleThree }; // this also clones an object


// STRINGS
// String primitives
const message = 'hi';   // This outputs 'hi'

// String object using a constructor function:
const anotherMessage = new String('hi');  // This outputs a string object ['hi']
console.log(anotherMessage);

// Valuable String methods:
message.length;
message.indexOf('my');
message.replace('first','second');
message.includes('message');
message.startsWith('This');
message.endsWith('e');
message.trim(); // removes white space before and after string
message.split(' '); // returns array of each word with white space separating [This, is, my, second, message]

// Formatting strings
// using backticks will respect line breaks:
const lineBreak = `This is my
'second' message.`;

const gString = `${lineBreak}`;
console.log(gString);


/**
 Value vs. Reference Types
 **/
// Values are stored in the variable
// Objects are stored somewhere else in memory, and referenced by the variable
// Example of a value:
let x = 10;
let y = x;

x = 20;
console.log(x,y);  // Result: x is 20, y is 10.  y is set to the initial value and not updated

// Example of an object:
let a = {value: 20};
let b = a;

a.value = 10;
console.log(a,b); // result is a = 10, b = 10


/**
 Bracket vs. dot notation
 **/
// You can use object.property to access an objects property.
// You can also use object['property'] to access an objects property.
// The bracket notation is useful if the property is hyphenated or uses a space, as dot notation won't work.

// We can also add properties into an object after it's created:
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(10);
circle.location = {x: 1};   // property added after object creation.
// We can delete a property: i.e. not returning a password to the client: using "delete"
delete circle.location;

/**
 Abstraction
 **/
// To abstract (or hide some data/details) from the client:
// By using local variables within a function scope, we make them private.
function Square(size){
    this.size = size;
    let defaultLocation = {x: 0, y:0};      // Hidden from access.  Local variables.
    let computeLocation = function(factor){ // Hidden from access.  Local variables.
        //...
    };
    this.draw = function() {
        let x,y;
        computeLocation(0.1);
    }
}
const square = new Square(10);

square.draw();

/**
 GETTERS AND SETTERS
 Using encapsulation (as above), we have hidden some assets from the rest of the app.
 How do we get and set values, that are hidden?
 Within the function, we use Getters and Setters
 **/
// Getters are constructed like so:
function Human(race){
    this.race = race;
    let ssn = "543998761";

    Object.defineProperty(this, 'ssn', {
        get: function () {
            return ssn;
        }
    })
}
let human = new Human("white");
console.log(human.ssn);

// Setters are similarly constructed:
function Animal(type){
    this.type = type;
    let referenceNumber = 88929291;
    Object.defineProperty(this, 'referenceNumber', {
        get: function (){
            return referenceNumber;
        },
        set: function (value) {
            referenceNumber = value;
        }
    });
}
const wolf = new Animal('wolf');
wolf.referenceNumber = '789281';
console.log(wolf.referenceNumber);


/**
 Prototypes:
 **/
// A prototype is like a base class or parent class.
function Insect(species){
    // Instance members
    this.species = species;
}

// Extending the Insect base, with a prototype of spiders:
Insect.prototype.spider = function (type) {
    this.type = type;
};

const genericInsect = new Insect('honey bee');
console.log(genericInsect);
const spider = new Insect('spider');
spider.type = 'Black Widow';
console.log(spider);
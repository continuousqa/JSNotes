
// Function Declaration
function walk(){
    console.log('walk');
};

// Function Expression;
let run = function() {
    console.log('run');
};

run();
let move = run;
move();


// Hoisting
// Key differences in function declaration and expressions:
/**
 * We can call a function declaration before we define it... like so:
 * talk()
 * function talk(){ console.log('blah blah');}
 *
 * We can't do that in an expression, as we can't call a constant or variable before it's defined.
 */
// Hoisting is the process of moving function declarations to the top of the file.  This is done
// automatically by the Javascript engine.


/**
 * REST operator:
 * looks like a spread operator, doe sthe dame thing, but called REST
 */
function sum(...args) {
    return args.reduce((a,b) => a+b)
}
console.log(sum(1,2,3,4,5,6,7));
// Above, we are using a rest operator to allow multiple param values to come through.
// we return the rest and in this case reduce it using adding a + b, which cycle through the values passed in.

function shoppingCart(discount=0.1, ...prices) {        // Rest param must be the last in the function.
    const total = prices.reduce((a,b) => a+b);
    return total * (1-discount);
}
console.log(shoppingCart(0.3,20,30,1));

/*
Default values:
 */
function interest(principal, rate = 3.5, years = 5){
    return principal * rate / 100 * years;
};
console.log(interest(1000));


/** GETTERS AND SETTERS
    using get and set:
 **/

const person = {
    firstName: 'Default',
    lastName: 'Default',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const input = value.split(' ');
        this.firstName = input[0];
        this.lastName = input[1];
    }
};

person.fullName = 'Brian Warner';
console.log(person);


/**
 Reason why var keyword is not liked:
 var does not adhere to a scope.  All var's are function scopped and lean out.
 let and const adhere to block-scope variables.

 **/


/** Setting THIS
 * This references the object it is in scope of.
 **/
function playVideo(){
    console.log(this);
}

playVideo();  //
console.log("************************")
playVideo.call({job: "QA"});    // This only returns what we have set to call.
playVideo.apply({job: "DEV"});
playVideo.bind({job: "Cook"})(); // 'this' now permenantly is set to this value.
// Notice the () after the bind.  That's to invoke a function call as though we called it directly fn();



/**
 More on Factory Functions vs. Constructor Functions
 **/

// A factory function returns an object.  Think of a factory that pushes out objects:
function createCircle(radius){
    return {
        radius,             // radius here is like writing: radius: radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);

// A constructor function is similar to a class in other languages:
function Circle(radius) {
    this.radius = radius;       // "this" keyword references the object in its scope (this objects radius value)
    this.draw = function() {    // this objects draw function.
        console.log('draw');
    }
}
const another = new Ciricle(1); // "new" keyword is used to instantiate a new Circle object.

// If we return an object, as part of a function, we call it a Factory Function.
// Using this keyword and "new" keyword we have a Constructor Function.
// Which one to use?  Both are fine, and they are different design patterns.  Some argue that
// a constructor function will mess up if a dev forgets the "new" keyword (then the scope is of the window)
// and not the function.  Others say that's an outdated argument.
// Use either one.



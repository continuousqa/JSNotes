// Simple array
const numbers = [3,4];
// as a constant, numbers can not be changed, but we can modify the content of an array.
numbers.push(5,6);
// push sends values to the end of the array [3, 4, 5, 6]
numbers.unshift(1, 2);
// unshift inserts values to the beginning of the array
numbers.splice(2, 0, 'a', 'b');
console.log(numbers); // [1, 2, 'a', 'b', 3, 4, 5, 6]

numbers.indexOf(3);
// returns an index of that value in the array.

numbers.includes(1);
// returns true if the element exists in the array.

const courses = [
    {id: 1, name: 'alah'},
    {id: 2, name: 'b'}
];
console.log(courses.includes({id:1, name: 'alah'}))  // returns false, because these are two different objects, even though the content is the same.

const check = courses.find(function (element) {     // find takes a callback/predicate function that checks each element, based on logic passed in.
    return element.name === 'b';
});
console.log(check);  // returns the object that has the element name of 'b'


// Arrow Functions
// in ES6, you can use arrow functions instead of callback/predicate syntax:
const course = courses.find(item => {
    return item.name === 'alah';
});
console.log(course);
// The above is the same as doing a function callback.
// We pass a variable (item) that represents the object
// appending the object property name (item.name) we can make an operation on it
// If the object has no parameters then we use () =>
// As this is looking for a single parameter, we can simply to one line:
const courseAgain = courses.find(item => item.name === 'b');


// Removing Values
const last = numbers.pop(); // removes last element in the array, and returns it
console.log(last);

const arrayFirst = numbers.shift(); // removes the first element of the array;

const arrayMiddle = numbers.splice(2, 1); // removes 1 element from index 2.


// Emptying an Array
// if an array is not a constant, we can reassign it to an empty array
let m = [1, 2, 3, 4];
m = [];
// The above works as long as you don't have references to the original array.
// if you have a reference like let n = m;  then n will point to the original value, but
// m will now be empty and n will have the original values 1, 2, 3, 4.

// Truncating an array will remove all elemnts:
m.length = 0;  // This is a preferred solution.
// the above will turn the array to be empty.
// all other references to this will also update to an empty array.

// A final approach is to use splice:
m.splice(0, numbers.length);
// the above will start at index 0 and cut out the entire length of the array.
// this also applies to any references to the same array.


// Combining arrays & slicing arrays
const firstArray = [1,2,3];
const secondArray = [4,5,6];

const combinedArray = firstArray.concat(secondArray);  // returns a new array (leaving the originals untouched)
console.log(combinedArray);

const slice = combinedArray.slice(2, 4); // extract after index 2 (index 3) and after index 4
console.log(slice);

// We can also combine arrays using Spread:
const spreadArray = [...firstArray, ...secondArray];
// we can also use spread to mix in other stuff:
const spreadArrayWithStuff = [...firstArray, 'a', ...secondArray, 'b'];

console.log("*****************")
// Iterating an Array
// instead of doing a for (let x of array)... we can use a forEach
numbers.forEach(number => {console.log(number)});
// the above can be written in callback format as:
numbers.forEach(function (number) {
    console.log(number);    // whatever is here will be run against the logic we specify
});
// we can also use multiple params in arrow syntax:
numbers.forEach((number, index) => console.log(index, number));


const sortMe = [2, 99, 1, 5, 'a'];
const sorted = sortMe.sort();
console.log(sorted);

// reversing a sort is handled with reverse:
const reversed = sortMe.reverse();
console.log(reversed);

const courseArray = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'python'}
];
// To sort the above objects, we use this comparison:
const sortObject = courseArray.sort(function(a, b){
    if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
    if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
    return 0;
});
console.log(sortObject);


// Testing Arrays
const testArray = numbers.every(function(value){
    return value >= 0;
});
console.log(testArray);  // returns false as 'a' is in the array.

const someValues = numbers.some(function(value){
    return value >= 0;
});
console.log(someValues);  // returns true as some values are numbers great or equal to 0.


// Filtering an Array
const filteredArray = numbers.filter(function (value) {
    return value >=0;
});
console.log(filteredArray);
// the above can be re-written as:
const fArray = numbers.filter(value => value >= 0);
// We can also filter on an array of objects:
const fObjectArray = sortObject.filter(value => value.id >= 2);
console.log(fObjectArray);


// Mapping an Array
const listFromArray = filteredArray.map(n => '<li>' + n + '</li>');
console.log(listFromArray);
const html = '<ul>' + listFromArray.join('') + '</ul>';
console.log(html);

// object mapping:
const mappedObject = filteredArray.map(n => {
    return {value: n};
});
console.log(mappedObject);

// Chaining
const chainedResults = numbers
    .filter(n => n >= 0)
    .map(n => ({value: n}));
console.log(chainedResults);

// Reducing an Array (summing the values)
// This can be done with a counter, or you can use the reduce method:
const newArrayOfNumbers = [1, 2, 5, 99];
const sum = newArrayOfNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);

// Array keys & values enumeration
myObj = {
    name: "brian",
    age: 45
};

const keys = Object.keys(myObj);
const values = Object.values(myOjb);
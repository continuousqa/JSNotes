// Create object that has: street, city, zipCode, 
// Create a function showAddress(address) that displays all the values.

const address = {
    street: '444444 Cyrus Ln.',
    city: 'hhhhhh',
    zipCode: 22222
};

function showAddress(address) {
    for(let key in address){
        console.log(address[key])
    }
}
showAddress(address)

// Initialize the address object using a Factory Function
function createAdress(street, city, zipCode) {
    return {
        street, city, zipCode
    };
}
console.log(createAdress('555555 Airport Blvd.', 'Los Angeles', 90021));

// Initialize the address object using a Constructor Function
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    return this.street, this.city, this.zipCode;
}
let work = new Address('5555 airport blvd.', 'los angeles', '90045');
let home = new Address('5555 airport blvd.', 'los angeles', '90045');
console.log(work);

// Exercise #3: make 2 functions. The first areEqual(address1, address2) checks the properites of each object return true or false
// depending if the property values are the same.  The second function areSame(address1, address2) looks for objects sharing the same
// reference.

function areEqual(work, home){
    return work.street === home.street && work.city === home.city && work.zipCode === home.zipCode;
}
console.log(areEqual(work, home));

function areSame(work, home){
    return work === home;
}
console.log(areSame(work,home));

// Exercise #4: Create object with title, body, author, views and comments. Comments itself has values of:
// Author, body.  A boolean for isLive as well;

let post = {
    title: 'A wonderful life',
    body: 'guess who',
    author: 'bad dev',
    views: 23,
    comments: [{            // Comments should be an array, as we can have multiple comments.
        author: 'trolly troll',
        body: 'this post sucks'
    },{            // Comments should be an array, as we can have multiple comments.
        author: 'nice guy',
        body: 'love it'
    }
    ],
    isLive: true
};

console.log(post.comments[0]);

// Exercise 5
// Simulate a user inputting a blog post, but they aren't finished with it

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;         // Setting a default value;
    this.comments = [];     // Setting a default value;
    this.isLive = false;    // Setting a default value;
}

let firstPost = new Post('Armageddon', 'The end has come, and I\'m sorry to say, you\'re alone', 'bwarner');
console.log(firstPost)


// Exercise 6
// Create 3 price range objects, like you might find on yelp

let priceRanges = [
    {label: '$', tooltip: 'cheap', minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: 'medium', minPerPerson: 11, maxPerPerson: 18},
    {label: '$$$', tooltip: 'expensive', minPerPerson: 19, maxPerPerson: 50}
];

let shops = [
    { averagePerPerson: 5}
];
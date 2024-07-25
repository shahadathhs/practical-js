function functionName(parameter1, parameter2) {
  // Function body
  // Code to be executed
  return value; // Optional, returns a value from the function
}

function greet(name) {
  return `Hello, ${name}!`; // Returns a greeting message
}

console.log(greet("Alice")); // Output: Hello, Alice!


function greet(name = "Guest") {
  return `Hello, ${name}!`; // Uses "Guest" if no name is provided
}

console.log(greet());        // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!

function logMessage(message) {
  console.log(message); // Logs the message to the console
}

logMessage("This is a message"); // Output: This is a message


const add = function(a, b) {
  return a + b; // Adds two numbers and returns the result
};

console.log(add(3, 5)); // Output: 8

(function() {
  console.log("This is an IIFE"); // Immediately logs the message
})(); // Output: This is an IIFE

function map(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i])); // Applies the function to each array element
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const doubled = map(numbers, num => num * 2); // Doubles each number

console.log(doubled); // Output: [2, 4, 6, 8]


function createCounter() {
  let count = 0; // Count is enclosed in the closure
  return function() {
    count++;
    return count; // Increments and returns the count
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // Recursively calculates the factorial
}

console.log(factorial(5)); // Output: 120

console.log(hoistedFunction()); 
// Output: This function is hoisted!

function hoistedFunction() {
  return "This function is hoisted!"; 
  // Can be called before its declaration
}

console.log(notHoistedFunction()); 
// Output: TypeError: notHoistedFunction is not a function

const notHoistedFunction = function() {
  return "This function is not hoisted!"; 
  // Cannot be called before its definition
};

// (parameters) => { function body }

const add = (x, y) => x + y; 
// Adds two numbers and implicitly returns the result
console.log(add(5, 3)); // Output: 8

const fullName = (firstName, lastName) => {
  const greeting = "Hello";
  return `${greeting}, ${firstName} ${lastName}!`; 
  // Explicitly returns the greeting
};
console.log(fullName("Alice", "Bob")); 
// Output: Hello, Alice Bob!


const person1 = {
  name: 'Alice',
  sayName: function() {
    setTimeout(() => {
      console.log(this.name); // 'this' refers to 'person1'
    }, 1000);
  }
};

person1.sayName(); // Output after 1 second: Alice

const Person = (name) => {
  this.name = name; // Arrow functions don't have their own 'this'
};

// This will throw an error
const alice = new Person('Alice'); 
// TypeError: Person is not a constructor

const person = {
  name: 'Alice',
  sayName: () => {
    console.log(this.name); // 'this' does not refer to 'person'
  }
};

person.sayName(); // Output: undefined


// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

const obj = {
  name: "My Object",
  regularFunction: function() {
    return this.name;
  },
  arrowFunction: () => {
    return this.name;
  }
};

console.log(obj.regularFunction()); // Output: "My Object"
console.log(obj.arrowFunction());   // Output: undefined


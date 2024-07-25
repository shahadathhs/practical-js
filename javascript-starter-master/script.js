/* 
JavaScript Variables

In JavaScript, variables are fundamental to storing and manipulating data.
or Variables are containers for storing data

JavaScript variables can be declared using var, let and const keyword.

1. var
The var keyword should only be used in code written for older browsers. 
In short Only use var if you MUST support old browsers.

2. let 
Variables declared with let
  a. must be declared before use
  b. cannot be re declared in the same scope

3. const 
Variables defined with const
  a. cannot be Re declared
  b. cannot be Reassigned
 */ 

// let keyword
/*
Variables defined with let are also hoisted to 
the top of the block, but not initialized.

Meaning: Using a let variable before it is 
declared will result in a ReferenceError.
*/ 

carName = "Saab";
let carName = "Volvo";

/*
With let, re declaring a variable in the same block is NOT allowed:
*/ 
var x = 2;   // Allowed
let x = 3;   // Not allowed

{
//let x = 2;   // Allowed
let x = 3;   // Not allowed
}

// const keyword
/*
JavaScript const variables must be assigned a value when they are declared:
*/ 

//correct
const PI = 3.14159265359;

// incorrect
//const PI2;
PI2 = 3.14159265359;

/*
Reassigning an existing const variable, in the same scope, is not allowed:
*/ 
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

/*
Re declaring a variable with const, in another scope, or in another block, is allowed:
*/ 
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}


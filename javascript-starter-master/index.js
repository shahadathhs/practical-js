'use strict';

var name = 'Sajib';
var age = 20;
var address = 'Chattogram';
console.log("My name is " + name + " and I am " + age + " years old!");

function aFunc() {
  // 'use strict';

  // job = "Student";
  console.log("A Function with Strict mode.")
  
}
aFunc()

// console.log("I am a " + job + " and I am from " + address)

// 'use strict';
var name2 = "Rajib";
// naem = "Tajib";
console.log("Name: ", name2);
// console.log("Mistakenly created: ", naem)

var obj = {
  name: "Zonayed Ahmed",
  job: "Student"
}

console.table(obj)
Object.preventExtensions(obj)

// obj.age = 20;

// console.log(obj.age)

function var1() {
  if (true) {
    var  a= 5;
  }
  console.log(a)
} 

var1()

console.warn('A simple warning')
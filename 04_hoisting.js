// Variable hoisting
console.log(a); // undefined
var a = 5;

// Function hoisting
sayHello();
function sayHello() {
  console.log("Hello World");
}

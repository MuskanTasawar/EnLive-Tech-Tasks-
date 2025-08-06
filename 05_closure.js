// Closure
function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log(count);
    };
  }
  const counter = outer();
  counter(); // 1
  counter(); // 2
  
  // Array method
  let numbers = [1, 2, 3];
  let doubled = numbers.map(n => n * 2);
  
  // Object method
  const person = {
    name: "Ali",
    greet() {
      console.log(`Hello, ${this.name}`);
    }
  };
  person.greet();
  
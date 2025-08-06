// Shallow copy
let obj1 = { a: 1, b: { c: 2 } };
let shallow = { ...obj1 };
shallow.b.c = 99;
console.log(obj1.b.c); // 99 (affected)

// Deep copy
let deep = JSON.parse(JSON.stringify(obj1));
deep.b.c = 50;
console.log(obj1.b.c); // 99 (not affected)

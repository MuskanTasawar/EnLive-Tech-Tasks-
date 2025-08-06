// var (function-scoped)
function testVar() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x); // 20
  }
  console.log(x); // 20
}
testVar();

// let (block-scoped)
function testLet() {
  let y = 10;
  if (true) {
    let y = 20;
    console.log(y); // 20
  }
  console.log(y); // 10
}
testLet();

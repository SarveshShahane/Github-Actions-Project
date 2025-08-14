const sum = require("./test/sum");
const multiply = require("./test/multiplication");
const expected = 10;
const ans = sum(6, 4);
const mul = multiply(6, 4);
console.log("Expected:", expected);
console.log("Answer:  ", ans);
console.log("Multiplication:", mul);

if (ans === expected) {
  console.log("✅ Test passed!");
  process.exit(0); // success
} else {
  console.error("❌ Test failed!");
  process.exit(1); // failure
}

if (mul === 24) {
  console.log("✅ Multiplication test passed!");
  process.exit(0); // success
} else {
  console.error("❌ Multiplication test failed!");
  process.exit(1); // failure
}

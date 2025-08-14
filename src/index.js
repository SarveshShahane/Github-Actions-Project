const sum = require('./test/sum');

const expected = 10;
const ans = sum(6, 4);

console.log("Expected:", expected);
console.log("Answer:  ", ans);

if (ans === expected) {
  console.log("✅ Test passed!");
  process.exit(0); // success
} else {
  console.error("❌ Test failed!");
  process.exit(1); // failure
}

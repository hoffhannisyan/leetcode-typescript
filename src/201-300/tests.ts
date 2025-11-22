import { isHappy } from "@/201-300/0202-happy-number.js";

export function runTests() {
  testHappyNumber();
}

function testHappyNumber() {
  console.log("\n=== #202 Happy Number ===");
  console.log("Example 1 (n=19):", isHappy(19));
  console.log("Example 2 (n=2):", isHappy(2));
}

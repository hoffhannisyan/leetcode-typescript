import { dayOfYear } from "@/1101-1200/1154-day-of-the-year.js";

export function runTests() {
  testDayOfYear();
}

function testDayOfYear() {
  console.log("\n=== #1154 Day of the Year ===");
  console.log("Example 1 (2019-01-09):", dayOfYear("2019-01-09"));
  console.log("Example 2 (2019-02-10):", dayOfYear("2019-02-10"));
  console.log("Leap year test (2020-03-01):", dayOfYear("2020-03-01"));
  console.log("Year end test (2019-12-31):", dayOfYear("2019-12-31"));
}

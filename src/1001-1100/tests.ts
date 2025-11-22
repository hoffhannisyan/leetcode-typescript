import { divisorGame } from "@/1001-1100/1025-divisor-game.js";

export function runTests() {
  testDivisorGame();
}

function testDivisorGame() {
  console.log("\n=== #1025 Divisor Game ===");
  console.log("Example 1 (n=2):", divisorGame(2));
  console.log("Example 2 (n=3):", divisorGame(3));
  console.log("Additional test (n=1):", divisorGame(1));
  console.log("Additional test (n=4):", divisorGame(4));
}

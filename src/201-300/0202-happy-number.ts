/*
202. Happy Number

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:
* Starting with any positive integer, replace the number by the sum of the squares of its digits.
* Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
* Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

Example 1:

Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

Example 2:

Input: n = 2
Output: false

Constraints:
* 1 <= n <= 2^31 - 1
*/

export function isHappy(inputNumber: number): boolean {
  const seenNumbers = new Set<number>();
  let currentNumber = inputNumber;

  while (currentNumber !== 1 && !seenNumbers.has(currentNumber)) {
    seenNumbers.add(currentNumber);
    currentNumber = getSumOfSquares(currentNumber);
  }

  return currentNumber === 1;
}

function getSumOfSquares(value: number): number {
  let sumOfSquares = 0;
  let remainingValue = value;

  while (remainingValue > 0) {
    const digit = remainingValue % 10;
    sumOfSquares += digit * digit;
    remainingValue = Math.floor(remainingValue / 10);
  }

  return sumOfSquares;
}

/*
Time Complexity: O(log n)
- Each iteration processes all digits of the number
- The number of digits is O(log n)
- We might loop several times, but mathematical analysis shows it converges quickly

Space Complexity: O(log n)
- The set stores numbers we've seen during the process
- In practice, the cycle is small and limited
*/

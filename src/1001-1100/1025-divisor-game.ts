/*
1025. Divisor Game

Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:
* Choosing any integer x with 0 < x < n and n % x == 0.
* Replacing the number n on the chalkboard with n - x.

Also, if a player cannot make a move, they lose the game.

Return true if and only if Alice wins the game, assuming both players play optimally.

Example 1:

Input: n = 2
Output: true
Explanation: Alice chooses 1, and Bob has no more moves.

Example 2:

Input: n = 3
Output: false
Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.

Constraints:
* 1 <= n <= 1000
*/

export function divisorGame(n: number): boolean {
  return n % 2 === 0;
}

/*
Time Complexity: O(1)
- Simple modulo operation

Space Complexity: O(1)
- No additional space needed

Mathematical Proof:
- If n is even, Alice can choose x = 1, leaving Bob with odd number (n-1)
- If n is odd, all divisors are odd, so n - x is even, giving Bob an even number
- The player who receives an even number always wins with optimal play
- Since Alice starts first, she wins if and only if n is even
*/

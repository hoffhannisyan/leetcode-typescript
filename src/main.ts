import { twoSum } from "@/001-100/0001-two-sum.js";
import {
  isSymmetric,
  isSymmetricIterative,
  TreeNode,
} from "@/101-200/0101-symmetric-tree.js";
import { isHappy } from "./201-300/0202-happy-number";
import { sumOfLeftLeaves } from "./401-500/0404-sum-of-left-leaves";
import { divisorGame } from "./1001-1100/1025-divisor-game";
import { dayOfYear } from "./1101-1200/1154-day-of-the-year";
import { addTwoNumbers, ListNode } from "./001-100/0002-add-two-numbers";

// Run tests
testTwoSum();
testSymmetricTree();
testHappyNumber();
testSumOfLeftLeaves();
testDivisorGame();
testDayOfYear();
testAddTwoNumbers();

function testTwoSum() {
  console.log("=== #1 Two Sum ===");
  console.log("Example 1:", twoSum([2, 7, 11, 15], 9));
  console.log("Example 2:", twoSum([3, 2, 4], 6));
  console.log("Example 3:", twoSum([3, 3], 6));
}

function testSymmetricTree() {
  console.log("\n=== #101 Symmetric Tree ===");

  // Example 1: [1,2,2,3,4,4,3]
  const tree1 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
  );
  console.log("Example 1 (Recursive):", isSymmetric(tree1));
  console.log("Example 1 (Iterative):", isSymmetricIterative(tree1));

  // Example 2: [1,2,2,null,3,null,3]
  const tree2 = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(3))
  );
  console.log("Example 2 (Recursive):", isSymmetric(tree2));
  console.log("Example 2 (Iterative):", isSymmetricIterative(tree2));
}

function testHappyNumber() {
  console.log("\n=== #202 Happy Number ===");
  console.log("Example 1 (n=19):", isHappy(19));
  console.log("Example 2 (n=2):", isHappy(2));
}

function testSumOfLeftLeaves() {
  console.log("\n=== #404 Sum of Left Leaves ===");

  // Example 1: root = [3,9,20,null,null,15,7]
  const tree1 = new TreeNode(3);
  tree1.left = new TreeNode(9);
  tree1.right = new TreeNode(20);
  tree1.right.left = new TreeNode(15);
  tree1.right.right = new TreeNode(7);
  console.log("Example 1:", sumOfLeftLeaves(tree1)); // Expected: 24

  // Example 2: root = [1]
  const tree2 = new TreeNode(1);
  console.log("Example 2:", sumOfLeftLeaves(tree2)); // Expected: 0
}

function testDivisorGame() {
  console.log("=== #1025 Divisor Game ===");
  console.log("Example 1 (n=2):", divisorGame(2));
  console.log("Example 2 (n=3):", divisorGame(3));
  console.log("Additional test (n=1):", divisorGame(1));
  console.log("Additional test (n=4):", divisorGame(4));
}

function testDayOfYear() {
  console.log("\n=== #1154 Day of the Year ===");
  console.log("Example 1 (2019-01-09):", dayOfYear("2019-01-09"));
  console.log("Example 2 (2019-02-10):", dayOfYear("2019-02-10"));
  console.log("Leap year test (2020-03-01):", dayOfYear("2020-03-01"));
  console.log("Year end test (2019-12-31):", dayOfYear("2019-12-31"));
}

function testAddTwoNumbers() {
  console.log("\n=== #2 Add Two Numbers ===");

  // Example 1: [2,4,3] + [5,6,4] = [7,0,8]
  const l1_ex1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2_ex1 = new ListNode(5, new ListNode(6, new ListNode(4)));
  console.log("Example 1:", listToArray(addTwoNumbers(l1_ex1, l2_ex1)));

  // Example 2: [0] + [0] = [0]
  const l1_ex2 = new ListNode(0);
  const l2_ex2 = new ListNode(0);
  console.log("Example 2:", listToArray(addTwoNumbers(l1_ex2, l2_ex2)));

  // Example 3: [9,9,9,9,9,9,9] + [9,9,9,9] = [8,9,9,9,0,0,0,1]
  const l1_ex3 = new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
      )
    )
  );
  const l2_ex3 = new ListNode(
    9,
    new ListNode(9, new ListNode(9, new ListNode(9)))
  );
  console.log("Example 3:", listToArray(addTwoNumbers(l1_ex3, l2_ex3)));
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

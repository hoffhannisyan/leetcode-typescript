import { twoSum } from "@/001-100/0001-two-sum.js";
import { addTwoNumbers, ListNode } from "@/001-100/0002-add-two-numbers.js";
import { listToArray } from "@/utils/helpers.js";

export function runTests() {
  testTwoSum();
  testAddTwoNumbers();
}

function testTwoSum() {
  console.log("=== #1 Two Sum ===");
  console.log("Example 1:", twoSum([2, 7, 11, 15], 9));
  console.log("Example 2:", twoSum([3, 2, 4], 6));
  console.log("Example 3:", twoSum([3, 3], 6));
}

function testAddTwoNumbers() {
  console.log("\n=== #2 Add Two Numbers ===");

  const l1_ex1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2_ex1 = new ListNode(5, new ListNode(6, new ListNode(4)));
  console.log("Example 1:", listToArray(addTwoNumbers(l1_ex1, l2_ex1)));

  const l1_ex2 = new ListNode(0);
  const l2_ex2 = new ListNode(0);
  console.log("Example 2:", listToArray(addTwoNumbers(l1_ex2, l2_ex2)));

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

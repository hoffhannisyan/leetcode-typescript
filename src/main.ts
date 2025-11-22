import { twoSum } from "@/001-100/0001-two-sum.js";
import {
  isSymmetric,
  isSymmetricIterative,
  TreeNode,
} from "@/101-200/0101-symmetric-tree.js";
import { isHappy } from "./201-300/0202-happy-number";

// Run tests
testTwoSum();
testSymmetricTree();
testHappyNumber();

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

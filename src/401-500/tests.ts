import { sumOfLeftLeaves } from "@/401-500/0404-sum-of-left-leaves.js";
import { TreeNode } from "@/101-200/0101-symmetric-tree.js";

export function runTests() {
  testSumOfLeftLeaves();
}

function testSumOfLeftLeaves() {
  console.log("\n=== #404 Sum of Left Leaves ===");

  const tree1 = new TreeNode(3);
  tree1.left = new TreeNode(9);
  tree1.right = new TreeNode(20);
  tree1.right.left = new TreeNode(15);
  tree1.right.right = new TreeNode(7);
  console.log("Example 1:", sumOfLeftLeaves(tree1));

  const tree2 = new TreeNode(1);
  console.log("Example 2:", sumOfLeftLeaves(tree2));
}

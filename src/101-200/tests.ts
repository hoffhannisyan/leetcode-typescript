import {
  isSymmetric,
  isSymmetricIterative,
  TreeNode,
} from "@/101-200/0101-symmetric-tree.js";

export function runTests() {
  testSymmetricTree();
}

function testSymmetricTree() {
  console.log("\n=== #101 Symmetric Tree ===");

  const tree1 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
  );
  console.log("Example 1 (Recursive):", isSymmetric(tree1));
  console.log("Example 1 (Iterative):", isSymmetricIterative(tree1));

  const tree2 = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(3))
  );
  console.log("Example 2 (Recursive):", isSymmetric(tree2));
  console.log("Example 2 (Iterative):", isSymmetricIterative(tree2));
}

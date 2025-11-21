/*
101. Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:

Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:

Input: root = [1,2,2,null,3,null,3]
Output: false

Constraints:
* The number of nodes in the tree is in the range [1, 1000].
* -100 <= Node.val <= 100

Follow up: Could you solve it both recursively and iteratively?
*/

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Recursive approach
export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  return isMirror(root.left, root.right);
}

// Iterative approach
export function isSymmetricIterative(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  const queue: Array<TreeNode | null> = [root.left, root.right];

  while (queue.length > 0) {
    const leftNode = queue.shift()!;
    const rightNode = queue.shift()!;

    if (leftNode === null && rightNode === null) {
      continue;
    }

    if (leftNode === null || rightNode === null) {
      return false;
    }

    if (leftNode.val !== rightNode.val) {
      return false;
    }

    queue.push(leftNode.left, rightNode.right);
    queue.push(leftNode.right, rightNode.left);
  }

  return true;
}

function isMirror(
  leftNode: TreeNode | null,
  rightNode: TreeNode | null
): boolean {
  if (leftNode === null && rightNode === null) {
    return true;
  }

  if (leftNode === null || rightNode === null) {
    return false;
  }

  return (
    leftNode.val === rightNode.val &&
    isMirror(leftNode.left, rightNode.right) &&
    isMirror(leftNode.right, rightNode.left)
  );
}

/*
Recursive Approach:
Time Complexity: O(n)
- We visit each node exactly once where n is the number of nodes

Space Complexity: O(h)
- Recursion stack depth equals the height of the tree
- h is the height (worst case O(n) for skewed tree, O(log n) for balanced tree)

Iterative Approach:
Time Complexity: O(n)
- We visit each node exactly once where n is the number of nodes

Space Complexity: O(w)
- Queue stores nodes level by level
- w is the maximum width of the tree (worst case O(n) for complete tree)
*/

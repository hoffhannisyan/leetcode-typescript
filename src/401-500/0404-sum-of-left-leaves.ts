/*
404. Sum of Left Leaves

Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

Example 2:

Input: root = [1]
Output: 0

Constraints:
* The number of nodes in the tree is in the range [1, 1000].
* -1000 <= Node.val <= 1000
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

export function sumOfLeftLeaves(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let totalSum = 0;

  if (root.left !== null) {
    if (root.left.left === null && root.left.right === null) {
      totalSum += root.left.val;
    } else {
      totalSum += sumOfLeftLeaves(root.left);
    }
  }

  if (root.right !== null) {
    totalSum += sumOfLeftLeaves(root.right);
  }

  return totalSum;
}

/*
Time Complexity: O(n)
- We visit each node exactly once where n is the number of nodes

Space Complexity: O(h)
- Recursion stack depth equals tree height h
- Best case O(log n) for balanced tree, worst case O(n) for skewed tree
*/

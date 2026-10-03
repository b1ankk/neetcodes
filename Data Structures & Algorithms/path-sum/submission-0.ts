/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root: TreeNode | null, targetSum: number): boolean {

        return this.hasPathSumRec(root, 0, targetSum);


    }

    hasPathSumRec(root: TreeNode, sum: number, target: number) {
        if (!root) {
            return false;
        }

        if (!root.left && !root.right) {
            return sum + root.val === target;
        }

        return this.hasPathSumRec(root.left, sum + root.val, target)
            || this.hasPathSumRec(root.right, sum + root.val, target);
        

    }
}

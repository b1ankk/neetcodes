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

let i = 0;
class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {

        return this.isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }

    isValid(root, left, right) {
        if (!root) {
            return true;
        }

        if (root.val <= left || root.val >= right) {
            return false;
        }

        return this.isValid(root.left, left, root.val)
            && this.isValid(root.right, root.val, right);

    }
}

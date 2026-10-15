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
     * @return {number}
     */
    diameterOfBinaryTree(root) {

        let globalMax = 0;

        const getHeight = (node) => {
            if (!node) {
                return 0;
            }

            const left = getHeight(node.left);
            const right = getHeight(node.right);

            globalMax = Math.max(globalMax, left + right);

            return 1 + Math.max(left, right);
        }

        return Math.max(getHeight(root) - 1, globalMax);

    }




}

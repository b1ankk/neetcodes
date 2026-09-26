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
    maxDepth(root: TreeNode | null): number {

        return this.maxDepthDfs(root, 0)

    }

    maxDepthDfs(root, depth: number) {
        if (!root)
            return depth;

        return Math.max(
            this.maxDepthDfs(root.left, depth + 1),
            this.maxDepthDfs(root.right, depth + 1),
        )
    }
}

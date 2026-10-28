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
    goodNodes(root: TreeNode | null): number {


        const recurse = (node: TreeNode | null, max: number) => {
            if (!node) {
                return 0;
            }

            const currMax = Math.max(max, node.val);
            const currCount = node.val >= max ? 1 : 0;
  
            return currCount 
                + recurse(node.left, currMax) 
                + recurse(node.right, currMax);
        }

        return recurse(root, root.val);
    }
}

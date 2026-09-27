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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {

        const traverse = (node) => {
            if (!node) {
                return null;
            }

            const left = traverse(node.left);
            k--;
            if (k === 0) {
                return node.val;
            }

            return left ?? traverse(node.right);
        }

        return traverse(root)
    }





    

    
}

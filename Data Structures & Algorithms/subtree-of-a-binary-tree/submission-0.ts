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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (root === null && subRoot === null) {
            return true;
        }

        if (!root || !subRoot) {
            return false;
        }

        if (root.val === subRoot.val)  {
            const areSame = this.isSame(root, subRoot);
            if (areSame)
                return true;
        }
        
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    }

    isSame(r1: TreeNode | null, r2: TreeNode | null): boolean {
        if (r1 === null && r2 === null) {
            return true;
        }
        if (!r1 || !r2) {
            return false;
        }
        
        return r1.val === r2.val 
            && this.isSame(r1.left, r2.left)
            && this.isSame(r1.right, r2.right)
    }
}

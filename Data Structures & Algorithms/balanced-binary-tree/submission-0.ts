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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {

        let isBalanced = true;

        function getHeight(root: TreeNode | null) {
            if (!root || !isBalanced) {
                return 0;
            }

            const leftheight = getHeight(root.left);
            const rightheight = getHeight(root.right);

            if (Math.abs(leftheight - rightheight) > 1) {
                isBalanced = false;
            }

            return 1 + Math.max(leftheight, rightheight);
        }


        getHeight(root);

        return isBalanced;




    }

    
}

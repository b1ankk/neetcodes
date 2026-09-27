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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {

        const inOrderMap = new Map();
        inorder.forEach((n, i) => {
            inOrderMap.set(n, i);
        })

        let i = 0;
        
        const insertTreeNodes = (left, right) => {
            if (left > right) {
                return null;
            }

            const val = preorder[i];
            const inOrderIndex = inOrderMap.get(val);

            i++;

            const node = new TreeNode(val);

            node.left = insertTreeNodes(left, inOrderIndex - 1);
            node.right = insertTreeNodes(inOrderIndex + 1, right);

            return node;
        };


        return insertTreeNodes(0, preorder.length - 1);
    }
}

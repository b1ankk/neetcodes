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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {

        if (!root) {
            return [];
        }

        const queue = [root];

        const result = [];

        while (queue.length > 0) {
            const queueLength = queue.length;

            for (let i = 0; i < queueLength; i++) {
                const element = queue.shift();
                
                if (i === queueLength - 1) {
                    result.push(element.val);
                }

                if (element.left) {
                    queue.push(element.left);
                }
                if (element.right) {
                    queue.push(element.right);
                }
            }
        }

        return result;


    }
}

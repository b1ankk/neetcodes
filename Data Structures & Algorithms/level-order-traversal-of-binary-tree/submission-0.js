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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) {
            return [];
        }

        const queue = [root];
        const result = [];


        while (queue.length > 0) {
            const queueLength = queue.length;

            result.push([]);
            const currentResultArr = result.at(-1);
            for (let i = 0; i < queueLength; i++) {
                const element = queue.shift();

                if (element.left) {
                    queue.push(element.left);
                }
                if (element.right) {
                    queue.push(element.right);
                }

                currentResultArr.push(element.val);                
            }



        }


        return result;

    }
}

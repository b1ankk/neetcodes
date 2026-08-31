/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) {
            return null;
        }
        
        const createdNodes = new Map();

        return this.dfsClone(node, createdNodes);



    }

    dfsClone(node, createdNodes) {
        const alreadyCreated = createdNodes.get(node.val);

        if (alreadyCreated) {
            return alreadyCreated;
        }

        const newNode = new Node (node.val, []);
        createdNodes.set(newNode.val, newNode);

        if (node.neighbors.length === 0) {
            return newNode;
        }

        const neighbors = node.neighbors.map(oldNeighbor => {
            return this.dfsClone(oldNeighbor, createdNodes);
        })

        newNode.neighbors = neighbors;
        return newNode;
    }


}

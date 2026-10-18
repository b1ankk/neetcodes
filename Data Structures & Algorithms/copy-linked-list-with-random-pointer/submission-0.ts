// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if (!head) {
            return null;
        }

        const nodeIndexes = new Map<Node, number>();

        let node = head;
        let i = 0;
        while (node) {
            nodeIndexes.set(node, i);
            i++;
            node = node.next;
        }

        // console.log(nodeIndexes)

        let origNode = head.next;
        let newNode = new Node(head.val);
        const newNodes = [newNode];

        i = 1;
        while (origNode) {
            newNode = new Node(origNode.val)
            newNodes.push(newNode);
            newNodes[i-1].next = newNode;
            i++;
            origNode = origNode.next;
        }


        newNode = newNodes[0];
        origNode = head;
        while (newNode) {
            const randomIndex = nodeIndexes.get(origNode.random);
            if (randomIndex != null) {
                const randomNode = newNodes[randomIndex];
                newNode.random = randomNode;
            }

            newNode = newNode.next;
            origNode = origNode.next;
        }

        return newNodes[0];


    }
}

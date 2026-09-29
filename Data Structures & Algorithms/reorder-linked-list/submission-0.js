/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {

        let length = 0;
        let node = head;
        while (node) {
            node = node.next
            length++;
        }
        // console.log(length)

        node = head;
        for (let i = 1; i < Math.floor(length / 2); i++) {
            node = node.next;
        } 

        const beforeMiddle = node;
        // console.log(beforeMiddle)

        node = beforeMiddle.next;
        beforeMiddle.next = null;

        let prev = null;
        while (node) {
            const next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        // console.log(prev)


        let left = head;
        let right = prev;

        const newHead = new ListNode();
        node = newHead;

        while (left || right) {
            if (left) {
                node.next = left;
                node = node.next;
                left = left.next;
            }
            if (right) {
                node.next = right;
                node = node.next;
                right = right.next;
            }
        }

        return newHead.next;
        
    }
}

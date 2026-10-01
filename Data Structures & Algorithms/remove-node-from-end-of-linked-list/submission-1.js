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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (!head) {
            return null;
        }

        let length = 1;

        let node = head;
        while (node.next) {
            node = node.next;
            length++;
        }

        const index = length - n;

        node = head;
        let prev = null;
        for (let i = 0; i < index; i++) {
            prev = node;
            node = node.next;
        }

        if (prev) {
            prev.next = node.next;
        } else {
            head = node.next;
        }

        return head;
    }
}

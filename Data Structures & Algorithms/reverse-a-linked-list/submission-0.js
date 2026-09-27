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
     * @return {ListNode}
     */
    reverseList(head) {
        
        return this.reverse(head, null);
        
    }

    reverse(head, prev) {
        if (!head) {
            return null;
        }

        if (!head.next) {
            return new ListNode(head.val, prev);
        }

        const node = new ListNode(head.val, prev);

        return this.reverse(head.next, node);
    }
}

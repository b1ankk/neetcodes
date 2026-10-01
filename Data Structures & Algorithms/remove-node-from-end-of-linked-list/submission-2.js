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

        let left = head;
        let right = head;

        for (let i = 0; i < n; i++) {
            right = right.next;
        }


        let prev = null;
        while (right) {
            prev = left;
            left = left.next;
            right = right?.next;
        }
        // console.log(left?.val, right?.val)
 
        if (prev) {
            prev.next = left.next;
        } else {
            head = left.next;
        }

        return head;
    }
}

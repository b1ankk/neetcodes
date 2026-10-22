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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {


        let node1 = l1;
        let node2 = l2;
        let result = new ListNode(-1);
        let resultHead = result;

        let overflow = 0;

        while (node1 || node2) {
            const sum = (node1?.val ?? 0) + (node2?.val ?? 0) + overflow;

            const reminder = sum % 10
            result.next = new ListNode(reminder);
            
            overflow = Math.floor(sum / 10);

            result = result.next;
            node1 = node1?.next;
            node2 = node2?.next;
        }

        if (overflow > 0) {
            result.next = new ListNode(overflow);
        }

        return resultHead.next;

    }
}

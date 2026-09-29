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

        let slow = head;
        let fast = head.next;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let middle = slow;
        const beforeMiddle = middle;
        // console.log(beforeMiddle)

        middle = beforeMiddle.next;
        beforeMiddle.next = null;

        let prev = null;
        while (middle) {
            const next = middle.next;
            middle.next = prev;
            prev = middle;
            middle = next;
        }

        // console.log(prev)


        let left = head;
        let right = prev;

        const newHead = new ListNode();
        let node = newHead;

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

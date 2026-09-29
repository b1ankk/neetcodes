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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let currNode = new ListNode();
        const listPreHead = currNode;

        while (list1 != null && list2 != null) {
            if (list1.val > list2.val) {
                currNode.next = list2;
                currNode = currNode.next;
                list2 = list2.next;
            } else {
                currNode.next = list1;
                currNode = currNode.next;
                list1 = list1.next;
            }
        }

        if (list1 == null) {
            currNode.next = list2;
        } else if (list2 == null) {
            currNode.next = list1;
        }

        return listPreHead.next;

    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let stack = []
    let tmp = head
    while(tmp){
        if(stack.length < k){
            stack.push(tmp)
            tmp = tmp.next
        }
        if(stack.length === k){
            let node = stack.pop()
            let node2 = node
            while(stack.length){
                node2.next = stack.pop()
                node2 = node2.next
            }
            node2.next = reverseKGroup(tmp, k)
            return node
        }
    }
    return head
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head !== null && head.next !== null){
        let gen = head.next.next
        let temp = head
        head = head.next
        head.next = temp
        head.next.next = swapPairs(gen)
    }else{
        return head
    } 
    return head
};
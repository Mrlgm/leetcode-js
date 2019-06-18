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
var deleteDuplicates = function(head) {
    let temp = head
    while(temp){
        if(temp.next && (temp.val === temp.next.val)){
            temp.next = temp.next.next
        }else{
            temp = temp.next
        }
    }
    return head
};
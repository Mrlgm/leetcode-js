/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2, obj={}) {
    if(l1 && l2){
        if(l1.val < l2.val){
            obj.val = l1.val
            mergeTwoLists(l1.next, l2, obj.next={})
        }else{
            obj.val = l2.val
            mergeTwoLists(l1, l2.next, obj.next={})
        }
    }else{
        if(l1){
            obj.val = l1.val
            obj.next = l1.next
        }else if(l2){
            obj.val = l2.val
            obj.next = l2.next
        }else{
            obj = null
        }
    }
    
    return obj
};
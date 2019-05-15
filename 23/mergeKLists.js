/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let node = lists[0]
    for(let i = 1; i < lists.length; i++){
        node = merge(node, lists[i])
    }
    return node !== undefined ? node : null
};

function merge(node1, node2){
    if(node1 === null){
        return node2
    }else if(node2 === null){
        return node1
    }
    if(node1.val > node2.val){
        let newNode = new ListNode(node2.val)
        newNode.next = node1
        return merge(newNode, node2.next)
    }else if(node1.val <= node2.val){
        node1.next = merge(node1.next, node2)
        return node1
    }
    
}
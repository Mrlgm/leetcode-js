/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let node = head
  let obj=null
  let num = 1
  while (node.next) {
    node = node.next
    num++
  }
  if(num===n&&num!==1){
    return head.next
  }else if(num===1){
      return null
  }
  for(let i = 2;i<num+1;i++){
    let nodes = head
    
    for (let j = num; j > i; j--) {
      if(j === n+1){
        nodes=nodes.next.next
      }else{
        nodes=nodes.next
      }
    }
    nodes.next=obj
    obj=nodes
  }
  return obj
};
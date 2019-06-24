/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let arr = []
    root && xx(root, arr)
    return arr
};

function xx(root, arr){
    root.left && xx(root.left, arr)
    arr.push(root.val)
    root.right && xx(root.right, arr)
}
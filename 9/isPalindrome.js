/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = x.toString().split('').reverse()
    let s = arr.join('')
    if(x.toString() === s){
        return true
    }else{
        return false
    }
};
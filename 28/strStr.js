/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let length = needle.length
    if(length === 0 ){
        return 0
    }
    let arr = haystack.split('')
    for(let i = 0; i < arr.length - length + 1; i++){
        let strArr = arr.slice(i, i+length)
        if(strArr.join('') === needle){
            return i
        }
    }
    return -1
};
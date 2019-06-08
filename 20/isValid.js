/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = []
    for(let i = 0; i < s.length; i++){
        if(map[s[i]] > 0){
            arr.push(map[s[i]])
        }else{
            if(arr.pop() + map[s[i]] !== 0){
                return false
            }
        }
    }
    if(arr.length){
        return false
    }
    return true
};

let map = {
    '(' : 1,
    ')' : -1,
    '[' : 2,
    ']' : -2,
    '{' : 3,
    '}' : -3
}
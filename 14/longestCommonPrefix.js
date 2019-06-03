/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = ""
    let string = ""
    let strLength = 0
    strs.forEach((string)=>{
        if(string.length>strLength){
            strLength = string.length
        }
    })
    for(let i = 0; i < strLength; i++){
        for(let j = 0; j < strs.length; j++){
            string = strs[j]
            str = strs[0].slice(0, i+1)
            if(string.slice(0,i+1) !== str){
                return strs[0].slice(0, i)
            }
        }
    }
    return str
};
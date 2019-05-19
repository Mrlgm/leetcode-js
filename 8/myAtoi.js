/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let arr = trim(str).match(/^-[0-9]+|^[0-9]+|^\+[0-9]+/g)
    let num
    if(!arr || arr[0].length === 0){
        num = 0
    }else{
        num = parseInt(arr[0])
    }
    if(-(Math.pow(2,31))<num && num < (Math.pow(2,31)-1)){
        return num
    }else{
        if(num<0){
            return -(Math.pow(2,31))
        }else{
            return (Math.pow(2,31)-1)
        }
    }
};


function trim(str){
    return str.replace(/^\s* | \s*$/g, '')
}
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let arr = []
    generateAll('', n*2, arr)
    return arr
};

function generateAll(str, num, result){
    if(num === str.length){
        if(verify(str)){
            result.push(str)
        }
        return
    }else{
        generateAll(str+'(',num,result)
        generateAll(str+')',num,result)
    }
}

function verify(str){
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === '('){
            count+=1
        }else{
            count-=1
        }
        if(count < 0){
            return false
        }
    }
    if(count !== 0){
        return false
    }else{
        return true
    }
}

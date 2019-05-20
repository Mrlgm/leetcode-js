/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let arr = ['1']
    for(let i = 1; i < n; i++){
        let str = ''
        let char = arr[i-1][0]
        let num = 0
        for(let j = 0; j < arr[i-1].length; j++){
            if(arr[i-1][j]!==char){
                str+=`${num}${char}`
                char = arr[i-1][j]
                num = 1
            }else{
                num+=1
            }
            if(j === arr[i-1].length-1){
                 str+=`${num}${char}`
            }
        }
        arr[i] = str
    }
    return arr[arr.length - 1]
};
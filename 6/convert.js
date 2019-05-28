/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let arr = [[]]
    let n = -1
    let toggle = true
    if(numRows === 1){
        return s
    }
    for(let i = 0; i < s.length; i++){
        if(toggle){
            n++
            if(n === numRows-1){
                toggle = false
            }
        }else{
            n--
            if(n === 0){
                toggle = true
            }
        }
        if(arr[n]){
            arr[n].push(s[i])
        }else{
            arr[n]=[]
            arr[n].push(s[i])
        }
    }
    return [].concat(...arr).join('')
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let arr = []
    let start = true
    while(digits){
        let array = []
        let str = digits.substr(0,1)
        digits = digits.substr(1)
        for(let i = 0; i < obj[str].length; i++){
            if(start){
                array.push(obj[str][i])
            }else{
                array = array.concat(arr.map((item)=>item+obj[str][i]))
            }
            
        }
        arr = array
        start = false
    }
    return arr
};

let obj={
    '1':[''],
    '2':['a','b','c'],
    '3':['d','e','f'],
    '4':['g','h','i'],
    '5':['j','k','l'],
    '6':['m','n','o'],
    '7':['p','q','r','s'],
    '8':['t','u','v'],
    '9':['w','x','y','z']
}
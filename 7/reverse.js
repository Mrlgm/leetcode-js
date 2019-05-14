/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = x.toString()
    let rstr = str.match(/[0-9]/g).reverse().join('')
    let s = rstr.replace(/^0*/,'')
    let num = 0
    if(s.length === 0){
        return 0
    }
    if(rstr.length !== str.length){
        num = parseInt('-'+s)
    }else{
        num = parseInt(s)
    }
    
    if(-(Math.pow(2,31)) < num && num < (Math.pow(2,31)-1)){
        return num
    }else{
        return 0
    }
};
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let arr = s.split('')
    let max = 0
    let array
    if(arr.length===1){
        return s
    }else if(arr.length === 0){
        return ""
    }
    for(let i = 0; i < arr.length; i++){
        let a
        if(arr[i]===arr[i+1]){
            a = xxx(i,i+1,0)
            if(a[0]>max){
                max = a[0]
                array = a
            }
        } 
        if(arr[i+1]===arr[i-1]&&arr[i+1]!==undefined){
            a = xxx(i-1,i+1,1)
            if(a[0]>max){
                max = a[0]
                array = a
            }
        } 
        if(arr[i]!==arr[i-1]&&arr[i+1]!==arr[i-1]){
            if(1>max){
                array = [1,i,i]
            }
        }
    }
     
    return arr.splice(array[1],array[0]).join('')
    
    function xxx(x,y,z){
        if(arr[x]===arr[y]&&arr[x]!==undefined){
            z+=2
            return xxx(x-1,y+1,z)
        }else{
            return [z,x+1,y-1]
        }
        
    }
};
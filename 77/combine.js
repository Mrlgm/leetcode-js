/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let arr = []
    for(let i = 1; i <= n; i++){
        arr.push(i)
    }
    let res = []
    function helper(arr, tmp){
        if(tmp.length === k){
            res.push(tmp)
            return
        }
        for(let i = 0; i < arr.length; i++){
            let array = arr.slice(i+1)
            helper(array, [...tmp, arr[i]])
        }
    }
    helper(arr,[])
    return res
};
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a,b)=>a-b)
    let length = candidates.length
    let res = []
    
    function helper(i, sum, tmp){
        if(sum > target || i === length){
            return
        }
        if(sum === target){
            res.push(tmp)
            return
        }
        helper(i,  sum + candidates[i], [...tmp, candidates[i]])
        helper(i+1, sum ,tmp)
    }
    helper(0, 0, [])
    return res
};
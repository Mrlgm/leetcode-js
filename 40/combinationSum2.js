/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b)
    let length = candidates.length
    let res = []
    
    function helper(i, sum, tmp){
        if(sum === target){
            res.push(tmp)
            return
        }
        for(let j = i; j < length; j++){
            if (sum+ candidates[j]  > target){
                break
            }
            if(j > i && candidates[j] === candidates[j-1]){
                continue
            }
            helper(j+1,  sum + candidates[j], [...tmp, candidates[j]])
        }
    }
    helper(0, 0, [])
    return res
};
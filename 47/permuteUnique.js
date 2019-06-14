/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) { 
    let res = []
    function backtrack(nums, tmp){
        if(nums.length === 0){
            res.push(tmp)
        }
        for(let i = 0; i < nums.length; i++){
            let arr = JSON.parse(JSON.stringify(nums))
            arr.splice(i, 1)
            backtrack(arr, [...tmp, nums[i]])
        }
    }
    backtrack(nums, [])
    res = res.map((item)=>{
        return JSON.stringify(item)
    })
    res = Array.from(new Set(res))
    res = res.map((item)=>{
        return JSON.parse(item)
    })
    return res
};
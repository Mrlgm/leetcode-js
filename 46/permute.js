/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
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
    return res
};
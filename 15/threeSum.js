/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>{return a-b})
    let array = []
    for(let i = 0; i < nums.length; i++){
        while(i<nums.length&&nums[i]===nums[i-1]){
            i++
        }
        let num = nums[i]
        let start = i + 1
        let end = nums.length - 1
        while(start < end){
            if(nums[i]+nums[start]+nums[end] === 0){
                array.push([num,nums[start],nums[end]])
                start++
                end--
                while(start < end&&nums[start] === nums[start-1]){
                    start++
                }
                while(start < end&&nums[end] === nums[end+1]){
                    end--
                }
            }else if(nums[i]+nums[start]+nums[end] > 0){
                end--
            }else{
                start++
            }
        }
    }
    return array
};
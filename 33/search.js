/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let length = nums.length
    let i = 0
    while(nums[i]<nums[i+1]){
        i++
    }
    if(target<nums[i+1]||target>nums[i]){
        return -1
    }
    if(target<=nums[length-1]){
       return  two(i+1,length-1,nums,target)
    }else{
        return  two(0,i,nums,target)
    }
    
    function two(start,end,nums,target){
        let res = -1
        if(nums[parseInt((start+end)/2)] === target){
            res = parseInt((start+end)/2)
        }else if(nums[parseInt((start+end)/2)] < target){
           res =  two(parseInt((start+end)/2),end,nums,target)
        }else if(nums[parseInt((start+end)/2)] > target){
           res =  two(start,parseInt((start+end)/2),nums,target)
        }
        return res
    }
};
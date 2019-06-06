/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let num = nums[0]+nums[1]+nums[2]
    let cha = Math.abs(num - target)
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                let all = nums[i] + nums[j] + nums[k]
                if(Math.abs(all - target) < cha){
                    num = all
                    cha = Math.abs(all - target)
                }
            }
        }
    }
    return num
};

function add(arr){
    return arr.reduce((a,c)=>a+c,0)
}
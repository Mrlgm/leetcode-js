/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    for(let i = 0; i < height.length; i++){
        for(let j = height.length - 1; j > i; j--){
            max = Math.max((j-i)*Math.min(height[i],height[j]),max)
        }
    }
    return max
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let index1 = 0
    let index2 = 0
    let length = nums1.length + nums2.length
    let arr = []
    if(length === 1){
        arr = nums1.concat(nums2)
        return arr[0]
    }
    while(arr.length <= Math.ceil(length/2)){
        if((nums2[index2] === undefined || nums1[index1] < nums2[index2])&&nums1[index1]!==undefined){
            arr.push(nums1[index1])
            index1 += 1
        }else{
            arr.push(nums2[index2])
            index2 += 1
        }
    }
    if(length%2 === 0){
        return (arr[arr.length-1]+arr[arr.length-2])/2
    }else{
        return arr[arr.length-2]
    }
};
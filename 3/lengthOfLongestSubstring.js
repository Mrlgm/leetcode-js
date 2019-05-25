/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let arr = s.split('')
  let subArrLength = 0
  let array = []
  for(let i = 0;i<arr.length;i++){
      if(array.indexOf(arr[i])<0){
          array.push(arr[i])
          if(array.length>subArrLength){
              subArrLength = array.length
          }
      }else{
          array = array.slice(array.indexOf(arr[i])+1,array.length)
          array.push(arr[i])
      }
  }
    
  return subArrLength
};
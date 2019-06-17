/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let arr = []
  for(let i = 0; i < n; i++){
      arr[i] = i+1
  }
  
  return x(arr,k)
};
function x(arr,k){
  let rem
  let quo
  if(k===0){
      rem = 0
      quo = arr.length
  }else{
      rem = k%fac(arr.length-1)
      quo = Math.ceil(k/fac(arr.length-1)) 
  }
  if(arr[quo-1]===undefined){
      return ''
  }else{
      let str = arr[quo-1].toString()
      arr.splice(quo-1,1)
      return str + x(arr,rem)
  }
  
}
function fac(i){return i<2?1:i*fac(i-1);}
        
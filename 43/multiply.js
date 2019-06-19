/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1==="0"||num2 === "0"){
        return "0"
    }else{
        let arr1 = num1.split('').reverse()
        let arr2 = num2.split('').reverse()
        let result =[]
        for(let i = 0;i<arr1.length;i++){
            for(let j = 0; j<arr2.length;j++){
                if(result[i+j]===undefined){
                    result[i+j] = 0
                    result[i + j] += parseInt(arr1[i]) * parseInt(arr2[j]);
                }else{
                    result[i + j] += parseInt(arr1[i]) * parseInt(arr2[j]);
                }
            }
        }
        for(let n = 0;n<result.length;n++ ){
            if(Math.floor(result[n] / 10)){
                if(result[n+1]===undefined){
                    result[n+1]=Math.floor(result[n] / 10)
                }else{
                    result[n+1]=result[n+1] + Math.floor(result[n] / 10)
                }
                result[n]=result[n]%10
            }
        }
        return result.reverse().join('')
    }
};
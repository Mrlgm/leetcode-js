/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let arr = []
    let num1
    let num2
    let num3
    let num4
    for(let i = 1;i<=3;i++){
        for(let j = 1;j<=3;j++){
            for(let k = 1; k<=3;k++){
                for(let l = 1;l<=3;l++){
                    if(i+j+k+l === s.length){
                        if((s[0]==="0"&&i!==1)||(s[i]==="0"&&j!==1)||(s[i+j]==="0"&&k!==1)||(s[i+j+k]==="0"&&l!==1)){
                            
                        }else{
                            num1 = parseInt(s.slice(0,i))
                            num2 = parseInt(s.slice(i,i+j))
                            num3 = parseInt(s.slice(i+j,i+j+k))
                            num4 = parseInt(s.slice(i+j+k,s.length))
                            if(num1<=255&&num2<=255&&num3<=255&&num4<=255){
                                arr.push(`${num1}.${num2}.${num3}.${num4}`)
                            }
                        }
                    }
                }
            }
        }
    }
    return arr
};
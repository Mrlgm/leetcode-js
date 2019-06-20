/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let num1 = m+n-2
    let num2 = m - 1
    let all1 = 1
    let all2 = 1
    for(let i = num1; i > num1-num2; i--){
        all1 = all1*i
    }
    for(let j = 1; j <= num2; j++){
        all2 = all2*j
    }
    return all1/all2
};
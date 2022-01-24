
// You are given a large integer represented as an integer array digits, where each digits[i] 
// is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. 
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
var plusOne = function(digits) {
    var num = ""
    for (let i = 0; i < digits.length; i++){
        num +=digits[i]
    }
    console.log("Logging num after for loop ",num)
    var num = BigInt(num) + BigInt(1)
    console.log("Logging num after adding 1 ",num)
    num = String(num)
    var array = num.split('')
    return array
};

var plusOne = function(digits, i=digits.length-1) {
    digits[i]++
    if(digits[i] > 9) {
        digits[i] = 0
        if(i==0) return [1,...digits]
        i--
        return plusOne(digits, i)
    } else return digits
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
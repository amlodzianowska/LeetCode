var isPalindrome = function(x) {
    var y = x.toString();
    for (i=0; i<=Math.floor(y.length/2); i++){
        if (y[i] != y[y.length-i-1]){
            return false
        }
    }
    return true
};

console.log(isPalindrome(1243))
console.log(isPalindrome(121))
console.log(isPalindrome(2224222))
console.log(isPalindrome(123321))
console.log(isPalindrome(22234222))
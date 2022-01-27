// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
var isPalindrome = function(s) {
    let re = new RegExp('^[a-zA-Z0-9]+$');
    let str = ""
    for (let i = 0; i< s.length; i++){
        if (re.test(s[i])){
            str += s[i]
        }
    }
    console.log(str)
    str = str.toLowerCase()
    for (let i = 0; i <= Math.floor(str.length/2); i++){
        if (str[i] != str[str.length-i-1]){
            return false
        }
    }return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("0P"))
console.log(isPalindrome("race a car"))
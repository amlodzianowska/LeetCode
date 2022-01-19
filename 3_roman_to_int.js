var romanToInt = function(s) {
    numerals = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
    var total = 0;
    for (i=0; i< s.length; i++){
        if (s[i] == s[i+1]){
            if (i == 0){
                total = numerals[s[i]] + numerals[s[i+1]]
                i++
            }else{
                total = total + numerals[s[i]]
            }
        }
        else if (numerals[s[i]] < numerals[s[i+1]]){
            var sum = numerals[s[i+1]] - numerals[s[i]]
            total = total+sum
            i++
        }
        else {
            console.log("I is now ", i, s[i])
            total = total + numerals[s[i]]
        }
    }
    return total
};
// if (s[i] == "V" || s[i] == "L" || s[i] == "D")
romanToInt("MMMIV")
console.log("************************")
romanToInt("MMIV")
console.log("************************")
romanToInt("XL")
console.log("************************")
romanToInt("XXXIII")
console.log("************************")
console.log(romanToInt("MMCCCXCIX"))
console.log("************************")
console.log(romanToInt("MMMCXXIV"))


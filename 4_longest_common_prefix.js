// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
var longestCommonPrefix = function(strs) {
    var minIdx = 0;
    for (let i=0; i<strs.length; i++){
        if (strs[i].length < strs[minIdx].length){
            minIdx = i
        }
    }
    const [...prefix] = strs[minIdx]
    for (let i=0; i<strs.length; i++){
        if (i==minIdx){
            continue
        }else{
            for (let j=prefix.length-1; j>=0; j--){
                if (strs[i][j] != prefix[j])
                prefix.splice(j)
            }
        }
    }
    var longestPrefix = prefix.join("")
    return longestPrefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
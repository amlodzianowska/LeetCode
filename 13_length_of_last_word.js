var lengthOfLastWord = function(s) {
    var words = s.split(' ')
    const filtered = words.filter(Boolean);
    return filtered[filtered.length - 1].length
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))

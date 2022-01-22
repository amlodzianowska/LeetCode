// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
var isValid = function(str) {
    arr = [];
    for (let i = 0; i <= str.length; i++){
        if (arr.length < 1 && (str[i] == ")" || str[i] == "]" || str[i] == "}")){
            return false
        }else if (arr[arr.length - 1] == "(" && (str[i] == "]" || str[i] == "}")){
            return false
        }else if (arr[arr.length - 1] == "[" && (str[i] == ")" || str[i] == "}")){
            return false
        }else if (arr[arr.length - 1] == "{" && (str[i] == ")" || str[i] == "]")){
            return false
        }else{
            if (str[i] == "(" || str[i] == "[" || str[i] == "{"){
                arr.push(str[i])
            }else if (arr[arr.length - 1] == "(" && str[i] == ")"){
                arr.pop()
            }else if (arr[arr.length - 1] == "[" && str[i] == "]"){
                arr.pop()
            }else if (arr[arr.length - 1] == "{" && str[i] == "}"){
                arr.pop()
            }
        }
    }
    if (arr.length == 0){
        return true
    }else{
        return false
    }
};
var bracesValid = function(str) {
    const bracesStack = [];
    const openBraces = "([{";
    const closeMatches = {
        ")": "(",
        "]": "[",
        "}": "}"
    };

    for (let i=0; i < str.length; i++) {
        if (openBraces.includes(str[i])) {
            bracesStack.push(str[i]);
        } else if (str[i] in closeMatches) {
            if (closeMatches[str[i]] === bracesStack[bracesStack.length-1]) {
                bracesStack.pop();
            } else {
                return false;
            }
        }
    }return bracesStack.length === 0
}


console.log(isValid("(())[]{}"))
console.log(isValid("(])"))

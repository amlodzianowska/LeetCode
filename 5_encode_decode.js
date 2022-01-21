//encode--> given a string with repeating consecuctive characters, give a number for each number of repeats next to the letter
//example ---> aaabccccdd -> a3b1c3d2
const encode = (str)=>{
    var tempArray = [];
    var output = "";
    for (let i=0; i < str.length; i++){
        if (str[i]==str[i+1]){
            tempArray.push(str[i])
        }else{
            tempArray.push(str[i])
            output = output + str[i] + tempArray.length
            tempArray = []
        }
    }
    return output
}

//decode--> given an encoded string, decode it
//example ---> a2b3c1---> aabbbc
const decode = (str)=>{
    let output = ""
    for (let i=0; i < str.length; i++){
        if (i%2==0){
            output = output + str[i].repeat(str[i+1])
            i++
        }
    }
    return output
}

//decodeLargeNum works when the numbers of repeated letters consists of 2 or more digits
const decodeLargeNum = (str)=>{
    let output = "";
    var num = str[1];
    let currentChar = str[0]
    for (let i=2; i < str.length; i++){
        if (!isNaN(str[i])){
            num = num + str[i]
            if (i == str.length-1){
                output = output + currentChar.repeat(num)
            }
        }else{
            output = output + currentChar.repeat(num)
            currentChar = str[i]
            num = ""
        }
    }
    return output
}

console.log(encode("aaabcdd")) //a3b1c1d2
console.log(encode("aaaaaaaaaaaaaaaaaaaaaabbbc")) //a3b1c3d2
console.log(decode("a2b3c1")) //aabbbc
console.log(decodeLargeNum("a12b3c1")) //aaaaaaaaaaaabbbc


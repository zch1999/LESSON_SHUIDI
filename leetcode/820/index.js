var minimumLengthEncoding = function(words) {
    let S = new Set(words)
    let indexes = [0]
    for(word of words){
        for(let i = 1; i< word.length; i++){
            let flag = S.delete(word.substring(i))
            if(flag){
                indexes.push(i)
            }
        }
    }
    console.log(indexes)
    let sum = 0
    for(s of S){
        sum += s.length + 1
    }  
    return sum
};

const words = ["time", "me", "bell"]
console.log(minimumLengthEncoding(words))
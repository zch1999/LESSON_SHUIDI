var myAtoi = function(str) {
    let s = parseInt(str,10)
    if(isNaN(s)){
        return 0
    }
    if (s < Math.pow(-2, 31) || s > Math.pow(2, 31) - 1) {
        return s < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
    } else {
        return s;
    }
};

const str = '-4193 with words5'
console.log(myAtoi(str))
// myAtoi(str)
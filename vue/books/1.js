var s1 = 'get-element-by-id';

// getElementById
var f = function(s){
    return s.replace(/-\w/g,function(x){
        console.log(x)
        return x.slice(1).toUpperCase();
    })
}

arr = [1,2,3,2]
arr.sort(function(a,b){
    console.log(a,b)
    return b - a 
})

console.log(arr)
// console.log(f(s1))
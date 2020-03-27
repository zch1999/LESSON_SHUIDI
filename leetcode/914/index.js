// var hasGroupsSizeX = function(deck) {
//     if(deck.length < 2) return false
//     var map = new Map()
//     for(let i = 0; i< deck.length; i++){
//         // console.log(deck[i])
//         map.set(deck[i],map.has(deck[i])? map.get(deck[i]) + 1 : 1)
//     }
//     for(let x = 2; x<= deck.length; x++){
//         if(deck.length % x == 0){
//             for([k,v] of map){
//                 if(v % x !== 0){
//                     flag = false
//                     break
//                 }else{
//                     flag = true
//                 }
//             }
//             if(flag){
//                 break
//             }
//         }
//     }
//     return flag
// };


var hasGroupsSizeX = function(deck) {
    if(deck.length < 2) return false
    var map = new Map()
    for(let i = 0; i< deck.length; i++){
        // console.log(deck[i])
        map.set(deck[i],map.has(deck[i])? map.get(deck[i]) + 1 : 1)
    }
    maparr = [...map.values()]
    // console.log(maparr)
    let x = maparr[0]
    for(let i =0; i<maparr.length; i++){
        if(maparr[i] == 1) return false
        x = gys(x,maparr[i])
        if(x == 1) return false
    }
    return true
};

var gys = function(x,y){
    if(y==0) return x;
    return gys(y,x%y);
}
const deck = [1,2,3,4,4,3,2,1]
// deck.sort((a,b) => a-b)
// console.log(deck)
console.log(hasGroupsSizeX(deck))

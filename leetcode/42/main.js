let a = [7,3,4,2]
let b =0
for(let i =0; i< a.length; i++){
    for(let j =i+1; j< a.length; j++){
        if(a[i]-a[j] > 0){
            b++
        }else{
            break
        }
    }
}
console.log(b)
let x= {a:{b:{c:1}}}
let y = 'a.b.c'
function fun(x,y){
  let tmp = y.split('.')
  let a = Object.create('a')
  
  console.log(x.entries())
}
fun(x,y)

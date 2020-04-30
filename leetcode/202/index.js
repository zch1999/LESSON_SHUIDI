var isHappy = function(n) {
    let map = new Map()
    while(n != 1){
      if(map.has(n)) return true
      map.set(n,true)
      n = String(n).split('').map((item) => item ** 2).reduce((a,b) => a+b)
    }
    return true
};

var isHappy = function(n) {
  let slow = sun(n)
  let quick = sum(slow)
  while(quick != slow){
    slow = sum(slow)
    quick = sum(sum(quick))
  }
  return quick == 1
}
function sum(n){
  return String(n).split('').map((item) => item ** 2).reduce((a,b) => a+b)
} 
var myPow = function(x, n) {
  if(n == 0) return 1
  if(n == 1) return x
  if(n < 0) {
      x=1/x
      n=-n
  }
  let res = 1
  while(n){
      if(n%2){
        //  无论奇数偶数最后一步都是这个
          res = res*x
      }
      x *= x
      ///这是有符号的位运算
      n>>>=1
  }
  return res
};
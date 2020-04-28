var singleNumbers = function(nums) {
  let res1=0
  let res2=0
  let a = 0
  for(num of nums){
    console.log(num)
    a ^= num
  }
  // console.log(a)
  let b = 1
  while((a & b) === 0){
      b <<= 1
  }
  for(num of nums){
      if((b & num) === 0){
          res1 ^= num
      }else{
          res2 ^= num
      }
  }
  return [res1,res2]
};

singleNumbers([4,1,4,6])
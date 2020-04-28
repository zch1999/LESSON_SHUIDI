var singleNumbers = function(nums) {
  let res = []
  for(let i=0; i< nums.length; i++){
      let a = res.indexOf(nums[i])
      if(a == -1){
          res.push(nums[i])
      }else{
          res.splice(a,1)
      }
  }
  return res
};

var singleNumbers = function(nums){
  let res = []
  let single = 0
  for(num in nums){
    single ^= num
  }
}


var reversePairs = function(nums) {
  let res = 0
  for(let i=0;i< nums.length;i++){
      for(let j=i+1;j<nums.length;j++){
          if(nums[i] > nums[j]){
              res++
          }
      }
  }
  return res
};
// 暴力法，leetcode超时
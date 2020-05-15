/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count =0
  for(let start=0; start<nums.length; start++){
      let sum = 0
      console.log('+++')
      for(let end=start; end< nums.length; end++){
          sum += nums[end]
          console.log(sum)
          if(sum === k){
              count++
          }
      }
  }
  return count
};

subarraySum([1,1,1,1],2)
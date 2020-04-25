var permute = function(nums) {
  let res = []
  let tmp = []
  dfs(nums,res,tmp)
  console.log(res)
};
function dfs(nums,res,tmp){
  if(tmp.length == nums.length){
    return res.push([...tmp])
  }
  for(let i=0; i<nums.length; i++){
    if(tmp.includes(nums[i])) continue
    tmp.push(nums[i])
    dfs(nums,res,tmp)
    tmp.pop()
  }
}

const nums = [1,2,3]
permute(nums)
var rob = function(nums){
    var dp = [];//动态规划数组 dynamic protocol
    dp[0]=0;
    dp[1]=0;
    for(let i=2;i<nums.length+2;i++){
        dp[i]=Math.max(dp[i-2]+nums[i-2],dp[i-1]);//i 位置上的最佳策略
    }
    console.log(dp);
}
rob([1,2,1,2,1,2,1,2,6,3]);//12
// [1,2,1,2,1,2,1,2,6,3]
// [ 0, 0, 1, 2, 2, 4, 4, 6, 6, 8, 12, 12 ]
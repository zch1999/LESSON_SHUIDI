每家拥有的金额
[1,2,3,1]->4
不能偷相邻的
求最多的钱
ABCD 动态规划算法
    选择A    不选择A
    CD        BCD
                B CD

每一个位置中最大值的决策是这样的？
i=0  Math.max(,)?
nums [1,2,3,1]
dp[i]=Math.max(nums[i]+dp[i-2],dp[i-1]);

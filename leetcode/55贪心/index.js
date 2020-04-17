var canJump = function(nums) {
    let mostdump = 0;
    if(nums.length==1) return true
    for(let i= 0;i<nums.length;i++){
        if(i<=mostdump){
            mostdump = Math.max(mostdump,i+nums[i])
            if(mostdump>=nums.length-1) return true
        }
    }
    return false
};

var canJump = function(nums) {
    let mostdump = 0;
    for(let i=0;i<nums.length;i++){
        if(i> mostdump) return false
        mostdump = Math.max(mostdump,i+nums[i])
    }
    return true
};

// 给定一个非负整数数组，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个位置。

// 示例 1:

// 输入: [2,3,1,1,4]
// 输出: true
// 解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。

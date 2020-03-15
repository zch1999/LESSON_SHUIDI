// 169 easy 

// 大小为n的数组， 其中的多数元素 重复出现的数据 ，
// 出现次数大于n/2 majority  

// [3,2,3]   3  一半数据是这个majority
// 选举，投票时， 多过半数就通过
// 不可能为空， 总是存在多数元素 
// [1,2,3]     []
// [1,2,2,3,3,4] 
// n/2 

// for   json + max 
// 某个数的出现的次数，  算出来它的最大的次数
// 是哪个， O(n) 空间复杂度和时间复杂度 都是

// 选举算法 
// n/2  
// [2,2,1,1,1,2,2] 
var majorityElement = function(nums) {
    let count = 1, // 次数的计数
      majority = nums[0]; //假设第一个数是majority
    // 算法回归运算  
    for (let i = 1; i < nums.length; i++) {
      //投票  更换被选举人
      if (count == 0) { //少数派
        majority = nums[i]; //派人了
      }
      // [1,2,2]
      // majority n/2+1
  
      //投票算法 n/2 
      // 少数派投出去  
      //
      if (nums[i] === majority) {
        count++;
      } else {
        count--; //少数投出去 
      }
      // majority ?  count ?
      // count < 0 这个数不是我们要的，
      // majority  那个数 
      // 如果再出现这个数， count++ 
      // 不一样的数， count-- 
      // 不一样的数， 慢慢的被销灭 
      // 选举出来的， n/2
    }
  
    return majority;
  }
  
  console.log(majorityElement([1,1,1,2,2,2,2,3]));
  
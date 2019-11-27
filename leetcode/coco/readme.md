# leetcode 在线学习算法最好平台
- 30道题基本满足一线公司面试需求
- leetcode 记录算法学习地过程
- 875 爱吃香蕉的珂珂

N堆香蕉 每把香蕉有piles[i]只香蕉    
- 选择了一个合适的数据结构， 数组[,,,,]
- 饲养员H小时后回来
- 珂珂决定每小时吃多少只，
每小时吃一堆香蕉，吃其中K根，一个小时只能吃一堆香蕉
一个小时内不能吃两堆香蕉
求 H小时内吃掉香蕉的最小速度 K  
[3,6,7,11] H=8
- 通过例子找到规律
[30,11,23,4,20] H=5
[30,11,23,4,20] H = 6

- 二分查找法
    传统查找 O(n);
    二分时间复杂度O(log2n)
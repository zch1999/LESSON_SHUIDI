# 删除数组重复元素

读题：
  sortedArr[1,1,2] 3个元素
    return length 2

- 一次遍历
    res[] 空间复杂度 O(n)
    排序，后面的项一定会大于或等于前面的项                                                                                                            
- git
    leetcodeAnimation
    两个指针 pre cur
    pre 慢指针 cur 快指针
    1. 一次循环 cur++ 一直跑
    2. cur 跟pre arr[]不等的话，pre++ 相等的话 pre++
    3. cur 再走的时候 继续比较
      新的cur 跟旧的pre
      不等时 pre++ 并且把cur的值 给新的pre
      把因为之前重复空出来的位置 填上

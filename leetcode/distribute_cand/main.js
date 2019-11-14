var distributeCandies=(candies)=>{
    // 去重 数据结构 数组容器 不重复
    const count=new Set(candies);
    return Math.min(count.size,candies.length >> 1);
}
console.log(distributeCandies([1,1,2,2,3,3,4,4]));
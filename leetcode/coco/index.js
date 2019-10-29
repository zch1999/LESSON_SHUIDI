const piles=[3,6,7,11] //香蕉
//console.log(piles[0]);
/**
 * author zch
 * @func 是否吃完所有香蕉
 * @param {number[]} piles 香蕉数组
 * @param {number} H 最大时间
 * @param {number} mid 吃的时间
 * @return {boolean}
 */
function canEatAllBannas(piles,H,mid){
    let h=0;
    for(let j=0;j<piles.length;j++){
        h=h+Math.ceil(piles[j]/mid);
    }
    return h<=H;
}
/**
 * 
 * @param {number[]} piles 香蕉数组
 * @param {number} H 最大时间
 * @return {number} lo 最小速度
 */
function minEatingspeed(piles,H){
    //简 一个个找
    let lo=Math.min(...piles);//最小值
    let hi=Math.max(...piles);//最大值
    //得到数组中的最大值  吃法的约束
    // for(let i=0;i<piles.length;i++){
    //     if(piles[i]>lo)
    //     {
    //         lo=piles[i];
    //     }
        //lo->hi 去试，最小的能吃完即可
    // for(let i=lo;i<hi;i++){
    //     if(canEatAllBannas(piles,H,i)){
    //         return i;
    //      }
    // }
    while(lo<=hi){
        //二分法
        //位移运算
        let mid=lo+((hi-lo)>>1);
        if(canEatAllBannas(piles,H,mid)){
            hi=mid-1;
        }else{
            lo=mid+1;
        }
    }
    // console.log(lo,hi);
    //return hi;
    return lo;
}
console.log(minEatingspeed(piles,8));
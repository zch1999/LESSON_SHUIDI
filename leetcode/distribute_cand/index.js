/**
 * @author zch
 * @param {Array length even} candies
 * @return {number} count 
 */
var distributeCandies=(candies)=>{
    let count=0;
    //种类数，unique
    //出现过的
    let obj={};//对象字面量
    // candies.forEach(item=>{
    //     console.log(item);
    // })
    for(let item of candies){
        // console.log(item);
        if(!obj[item]){
            obj[item]=1;
            count++;
        }
    }
    return (count>candies.length >> 1) ? candies.length >> 1 : count;
}
console.log(distributeCandies([1,1,2,2,2,2]));
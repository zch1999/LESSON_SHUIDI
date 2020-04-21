var numberOfSubarrays = function(nums, k) {
    let left = 0;
    let right = 0;
    let count = 0;
    let res = 0;
    for(let i=0;i< nums.length;i++){
        if((nums[right++] & 1) == 1){
            count++
        }
        if(count == k){
            let tmpright = right
            let tmpleft = left
            while((nums[right] & 1) == 0 && right < nums.length){
                right++
            }
            while((nums[left] & 1) == 0){
                left++
            }
            console.log(right,left)
            res += (right-tmpright+1)*(left-tmpleft+1)
            console.log(res)
            count--
            left++
        }
    }
    return res  
};

const k = 2
const nums = [2,2,2,1,2,2,1,2,2,2]
numberOfSubarrays(nums,k)

// const numberOfSubarrays = (nums, k) => {
//     let n = nums.length, counts = new Array(n+1).fill(0).fill(1, 0, 1), oddCount = 0, result = 0
//     for (let i = 0; i < n; i++) {
//       oddCount += nums[i] & 1
//       result += oddCount >= k ? counts[oddCount - k] : 0
//       counts[oddCount] += 1
//     }
// }


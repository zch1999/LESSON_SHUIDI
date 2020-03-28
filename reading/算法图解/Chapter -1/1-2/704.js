var search = function(nums, target) {
    let high = nums.length - 1
    let low = 0
    console.log((low + high)>>1)
    while(low <= high){
        let mid = (low + high)>> 1
        if(nums[mid] == target){
            return mid
        }else if(nums[mid] > target){
            high = mid - 1
        }else {
            low = mid + 1
        }
    }
    return -1
};

let nums = [-1,0,3,5,9,12], target = 9
console.log(search(nums,target))

var removeDuplicates = function(nums) {
    let pre = 0; //慢指针
    const l = nums.length;
    for (let cur = 0; cur < l; cur++) {
        if (nums[cur] !== nums[pre]) { //从同一位置起
            pre++; //不一样
            nums[pre] = nums[cur];
        }
    }
    return pre + 1;
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
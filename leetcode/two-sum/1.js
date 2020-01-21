var twoSum = function(nums, target) {
    var arr = []
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return arr = [i, j]

            }
        }
    }
};

console.log(twoSum([2, 7, 4, 5, 6], 9))
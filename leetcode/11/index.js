var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let ans = 0;
    while(left<right){
        ans = Math.max(ans,Math.min(height[left],height[right]) * (right-left))
        console.log(ans)
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    console.log(ans)
};

const height = [1,8,6,2,5,4,8,3,7]
maxArea(height)
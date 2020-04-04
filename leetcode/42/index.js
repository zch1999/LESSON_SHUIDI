var trap = function(height) {
    let rain = 0
    let temporary = 0
    let drop = 0
        for(let i =0; i< height.length-1;){
            for(let j =i+1; j< height.length;){
                drop = height[i] - height[j]
                // console.log(drop)
                if(drop >0){
                    temporary += drop
                    j++ 
                }else{
                    rain += temporary
                    i=j
                    temporary = 0
                    break
                }
                if(j == height.length && drop> 0){
                    i++
                    temporary = 0
                    break;
                }
            }
            // console.log('rain:',rain)
            // console.log('暂存',temporary)
        }
    return rain
};

const height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))
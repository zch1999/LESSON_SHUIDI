var surfaceArea = function(grid) {
    let ans = 0
    for(let i =0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]>0){
                ans = ans + grid[i][j] * 4 + 2
            }
            //计算行的重叠面积
            if(i > 0){
                ans = ans - 2 * Math.min(grid[i][j],grid[i-1][j])
            }
            //计算列的重叠面积
            if(j > 0){
                ans = ans - 2 * Math.min(grid[i][j],grid[i][j-1])
            }
        }
    }
    return ans
};

let grid = [[2,0],[1,1]]
console.log(surfaceArea(grid))
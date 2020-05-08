//动态规划

var maximalSquare = function(matrix) {
  if(!matrix.length) return 0
  let rows = matrix.length
  let cols = rows>0 ? matrix[0].length:0
  let max = 0
  for(let i=0; i<rows; i++){
      for(let j=0; j<cols; j++){
          if(matrix[i][j] === '1'){
              if(i>0 && j> 0){
                  //如果Math.min里有0，说明以[i,j]为右下角的点构不成正方形
                  matrix[i][j] = Math.min(matrix[i-1][j],matrix[i][j-1],matrix[i-1][j-1])+1
              }
              max = Math.max(matrix[i][j],max)
          }
      }
  }
  return max*max
};
var maximalSquare = function(matrix) {
  if(!matrix.length) return 0
  let rows = matrix.length
  let cols = rows>0 ? matrix[0].length:0
  let max = 0
  for(let i=0; i<rows; i++){
      for(let j=0; j<cols; j++){
          if(matrix[i][j] === "1"){
              let tmp = true
              let maxlength = 1
              while(i+maxlength<rows && j+maxlength<cols && tmp){
                  for(let k=i; k<=i+maxlength; k++){
                      if(matrix[k][j+maxlength] === "0"){
                          tmp = false
                      }
                  }
                  for(let k=j; k<=j+maxlength; k++){
                      if(matrix[i+maxlength][k] === "0"){
                          tmp = false
                      }
                  }
                  if(tmp){
                      maxlength++
                  }
                  console.log(maxlength)
              }
              max = Math.max(maxlength,max)
          }
      }
  }
  return max*max
};

const matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
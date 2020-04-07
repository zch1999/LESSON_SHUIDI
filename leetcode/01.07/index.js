var rotate = function (matrix) {
    let n = matrix.length;
    for(let i =0; i< n; i++){
        for(let j = i+1; j< n; j++){
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    let mid = n >> 1
    for(let i = 0; i< n; i++){
        for(let j=0; j< mid; j++){
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[i][n-1-j];
            matrix[i][n-1-j] = tmp 
        }
    }
    return matrix
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(rotate(matrix))
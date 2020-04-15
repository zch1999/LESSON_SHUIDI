var updateMatrix = function (matrix) {
    let list = []
    let x = matrix.length
    let y = matrix[0].length
    let dirs = [[-1,0],[1,0],[0,-1],[0,1]]
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if(matrix[i][j] == 0){
                list.push([i,j])
            }
            else{
                matrix[i][j] = -1
            }
        }
    }
    while(list.length > 0){
        let a = list.shift()
        let xi = a[0],xj = a[1]
        for(let i =0; i<4; i++){
            let ai = a[0] + dirs[i][0]
            let aj = a[1] + dirs[i][1]
            if(ai >= 0 && ai<x && aj>=0 && aj<y && matrix[ai][aj] == -1){
                matrix[ai][aj] = matrix[xi][xj] + 1
                list.push([ai,aj])  
            }
        }

    }
    return matrix
};


const matrix = [[0, 0, 0], [0, 1, 0], [1,1,1]]

updateMatrix(matrix)
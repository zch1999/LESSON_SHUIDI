var maxDistance = function(grid) {
    let list =[]
    let x = grid.length
    let y = grid[0].length
    for(let i=0;i<x; i++){
        for(let j =0; j<y; j++){
            if(grid[i][j] == 1){
                list.push([i,j])
            }
        }
    }
    // console.log(list.length)
    // console.log(list)
    if(list.length == x*y || list.length == 0){
        return -1
    }
    let count = 0
    let a = []
    let m=0,n=0,len=0
    while(list.length > 0){
        count += 1
        // console.log(count)
        len = list.length
        for(let i=0; i<len;i++){
            a = list.shift()
            // console.log(list)
            m=a[0],n=a[1]
            console.log(grid[m][n])
            if(m+1<x && grid[m+1][n] == 0){
                // console.log('1')
                grid[m+1][n] = -1
                list.push([m+1,n])
                // console.log(list)
            }
            // console.log(m,n)
            if(m-1>=0 && grid[m-1][n] == 0){
                // console.log('2')
                grid[m-1][n] = -1
                list.push([m-1,n])
            }
            if(n+1<y && grid[m][n+1] == 0){
                grid[m][n+1] = -1
                list.push([m,n+1])
                // console.log('3')
            }
            if(n-1>=0 && grid[m][n-1] == 0){
                // console.log('4')
                grid[m][n-1] = -1
                list.push([m,n-1])
            }
            console.log(list)
        }
    }
    return count -1
};

let grid = [[1,0,0],[0,0,0],[0,0,0]]
// console.log(grid)
console.log(maxDistance(grid))
// maxDistance(grid)

// let list = [[1,2]]
// let a = list.pop()
// let m=a[0],n=a[1]
// console.log(m,n)
// console.log(list)
// list.push([1,0])
// let a =list.pop()
// let m=a[0],n=a[1]
// console.log(m,n)
// console.log(list)


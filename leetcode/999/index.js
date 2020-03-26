var numRookCaptures = function(board) {
    let count = 0,x = 0,y = 0;
    // 运动方向 棋盘问题常见解决方案
    let dx = [0,1,0,-1];
    let dy = [1,0,-1,0];
    for(let i = 0;i < 8;i++){
        for(let j = 0; j< 8; j++){
            if(board[i][j] == 'R'){
                x = i,y=j
                break;
            }
        }
    }
    console.log(x,y)
    for(let i =0; i< 4; ++i){
        for(let stap = 1;;stap++){
            let mx = x + dx[i] * stap;
            let my = y + dy[i] * stap;
            // console.log(mx,my)
            if(mx < 0 || mx > 7 || my < 0 || my > 7 || board[mx][my] == 'B') break;
            if(board[mx][my] == 'p'){
                count++;
                // console.log(count)
                break;
            }
        }
    }
    return count
};


const board =[[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","R",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]

// console.log(board[0][0])
console.log(numRookCaptures(board))
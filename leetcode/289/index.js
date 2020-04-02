var gameOfLife = function(board) {
    let newboard = []
    let upload = []
    let death = 0,live = 0
    let m = board.length, n = board[0].length
    for(let i =0; i < m; i++){
        for(let j =0; j< n; j++){
                if(i+1 < m ){
                    if(board[i+1][j] == 1){
                       live++ 
                    }else{
                        death++
                    }
                    if(j-1>=0){
                        if(board[i+1][j-1] == 1){
                            live++ 
                        }else{
                            death++
                        }
                    }
                    if(j+1 <n){
                        if(board[i+1][j+1] == 1){
                            live++ 
                        }else{
                            death++
                        }
                    }
                }
                if(i-1 >= 0){
                    if(board[i-1][j] == 1){
                        live++ 
                    }else{
                        death++
                    }
                    if(j-1>=0){
                        if(board[i-1][j-1] == 1){
                            live++ 
                        }else{
                            death++
                        }
                    }
                    if(j+1 <n){
                        if(board[i-1][j+1] == 1){
                            live++ 
                        }else{
                            death++
                        }
                    }
                }
                if(j-1>=0){
                    if(board[i][j-1] == 1){
                        live++ 
                    }else{
                        death++
                    }
                }
                if(j+1<n){
                    if(board[i][j+1] == 1){
                        live++ 
                    }else{
                        death++
                    }
                }
                if(board[i][j] == 1){
                    if(live<2 || live>3){
                        upload.push(0)
                    }else{
                        upload.push(1)
                    }
                }
                if(board[i][j] == 0){
                    if(live == 3){
                        upload.push(1)
                    }else{
                        upload.push(0)
                    }
                }
                live = 0
                death = 0
        }
        newboard.push(upload)
        upload=[]
    }
    board = newboard
    return board;
};

let cnt = 0
let board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
console.log(cnt += 0 & 1)


// 类似棋盘问题解法
// public class Solution {
//     private static final int[] DX = {0, 0, 1, -1, 1, 1, -1, -1};
//     private static final int[] DY = {1, -1, 0, 0, 1, -1, 1, -1};

//     public void gameOfLife(int[][] board) {
//         if (board.length == 0) {
//             return;
//         }
//         int n = board.length;
//         int m = board[0].length;
//         for (int i = 0; i < n; ++i) {
//             for (int j = 0; j < m; ++j) {
//                 int cnt = 0;
//                 for (int k = 0; k < 8; k++) {
//                     int x = i + DX[k];
//                     int y = j + DY[k];
//                     if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) {
//                         continue;
//                     }
//                     // 这里不能直接加board[x][y]，因为 board[x][y] 的倒数第二位是可能有值的。
//                     cnt += board[x][y] & 1;
//                 }
//                 if ((board[i][j] & 1) > 0) {
//                     // 这个是活细胞
//                     if (cnt >= 2 && cnt <= 3) {
//                         // 周围有2/3个活细胞，下一个状态还是活细胞。
//                         board[i][j] = 0b11;
//                     }
//                     // 周围活细胞过多或过少都会死，因为原数据是0b01，所以这里不用额外赋值。
//                 } else if (cnt == 3) {
//                     // 这个是死细胞，周围有3个活细胞，下一个状态变为活细胞。
//                     board[i][j] = 0b10;
//                 }
//             }
//         }
//         // 最后一位去掉，倒数第二位变为更新后的状态。
//         for (int i = 0; i < n; ++i) {
//             for (int j = 0; j < m; ++j) {
//                 board[i][j] >>= 1;
//             }
//         }
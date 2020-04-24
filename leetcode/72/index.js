
// 回溯法
var a = "horse"
var b = "ros"
var n = 6,m=6
var minDist = Infinity

function lwstBT(i,j,edist){
  if(i == n || j ==m){
    if(i<n) edist += n-i
    if(j<m) edist += m-j
    if(edist < minDist ) minDist = edist
    return 
  }
  if(a[i] == b[j]){
    lwstBT(i+1,j+1,edist)
  }else{
    lwstBT(i +1,j, edist+1)
    lwstBT(i ,j+1, edist+1)
    lwstBT(i +1,j+1, edist+1)
  }
}

lwstBT(0,0,0)
console.log(minDist)

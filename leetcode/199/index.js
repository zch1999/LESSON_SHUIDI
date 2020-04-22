//bfs
var rightSideView = function(root) {
  if(!root) return []
  let queue = [root]                        // 队列 把树顶加入队列
  let arr = []                              // 用来存储每层最后个元素值
  while(queue.length > 0){
    let len = queue.length
    while (len) {
      let node = queue.shift()               // 取出队列第一个元素
      if(len === 1) arr.push(node.val)       // 当是 当前一层的最后一个元素时，把值加入arr
      if(node.left) queue.push(node.left)    // 继续往队列添加元素
      if(node.right) queue.push(node.right)
      len--
    }
  }
  return arr
};


// dfs
var rightSideView = function(root) {
  if(!root) return []
  let res = []
  dfs(root, 0, res)
  return res
};
function dfs (root, depth, res) {
  if(root){
    if(res.length === depth){
      res.push(root.val)           // 当数组长度等于当前 深度 时, 把当前的值加入数组
    }
    depth++
    dfs(root.right, depth, res) // 先从右边开始, 当右边没了, 再轮到左边
    dfs(root.left, depth, res)
  }
}
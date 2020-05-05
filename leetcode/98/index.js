//验证二叉搜索树

//中序遍历
var isValidBST = function(root) {
  let res = []
  function middle(root){
      if(root == null) return
      if(root.left !== null){
          middle(root.left)
      }
      res.push(root.val)
      if(root.right !== null){
          middle(root.right)
      }
  }
  middle(root)
  for(let i=0; i< res.length-1; i++){
      if(res[i] >= res[i+1]) return false
  }
  return true
};

var isValidBST = function(root) {
  let tmp = Number.NEGATIVE_INFINITY
  function middle(root){
      if(root == null) return true
      if(!middle(root.left)){
          return false
      }
      if(root.val <= tmp){
          return false
      }
      tmp = root.val
      return middle(root.right)
  }
  return middle(root)
};


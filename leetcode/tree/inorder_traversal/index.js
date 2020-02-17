function TreeNode(val){
    this.val = val;
    this.left = this.right = null;//左指针，右指针
}
//      1(root)
//   2     3
//4    5 6    7
var a1 = new TreeNode(1); //root根结点
var a2 = new TreeNode(2); 
var a3 = new TreeNode(3);
a1.left = a2;
a1.right = a3;
var a4 = new TreeNode(4);
var a5 = new TreeNode(5);
a2.left = a4;
a2.right = a5;
// 一个结点，左右指向两个结点，递归执行，每个子结点(左右)，变成新的结点，退出条件是叶子结点

var inorderTraaversal = function(root){
    let arr =[];
    const inorder = root =>{
        if(root === null){return null}
        arr.push(root.val)
        inorder(root.left) //左子树一直递归
        inorder(root.right) //
    }
    inorder(root);
    return arr;
}
console.log(inorderTraaversal(a1))
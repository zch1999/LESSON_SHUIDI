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

//中序遍历
// var inorderTraversal = function(root){
//     var stack =[],
//         result = [],
//         cur; //栈 只有他的左右子树都解决了，才出栈
//     cur = root;
//     while(stack.length > 0 || cur != null){
//         if(cur != null){
//             stack.push(cur); //入栈
//             cur = cur.left;
//         }else{
//             cur = stack.pop();
//             result.push(cur.val);
//             cur = cur.right;
//         }
//     }
//     return result;
// }

//前序遍历
// var inorderTraversal = function(root){
//     var stack =[],
//         result = [],
//         cur; //栈 只有他的左右子树都解决了，才出栈
//     cur = root;
//     while(stack.length > 0 || cur != null){
//         if(cur != null){
//             stack.push(cur); //入栈
//             result.push(cur.val)
//             cur = cur.left;
//         }else{
//             cur = stack.pop();
//             cur = cur.right;
//         }
//     }
//     return result;
// }

//后序遍历
var inorderTraversal = function(root){
    var stack =[],
        result = [],
        cur,
        lastVisitedNode; //栈 只有他的左右子树都解决了，才出栈
    cur = root;
    while(stack.length > 0 || cur != null){
        if(cur != null){
            stack.push(cur); //入栈
            cur = cur.left;
        }else{
            cur = stack.pop();
            if(cur.right === null || lastVisitedNode === cur.right) {
                result.push(cur.val);
                lastVisitedNode = cur;
                cur = null;
            } else {
                stack.push(cur);
                cur = cur.right;
            }
        }
    }
    return result;
}

console.log(inorderTraversal(a1))
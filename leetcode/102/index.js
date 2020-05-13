var levelOrder = function(root) {
    let res = []
    let tmp = []
    if(root == null) return []
    tmp.push(root) 
    while(tmp.length){
        let len = tmp.length
        res.push([])
        for(let i=0; i<len; i++){
            let a = tmp.shift()
            console.log(a.val)
            res[res.length -1].push(a.val)
            if(a.left !== null) tmp.push(a.left)
            if(a.right !== null) tmp.push(a.right)
        }
        
    }
    return res
};

function ListNode(val) {
   this.val = val;
      this.next = null;
  }
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let res = []
  let tmp = null
  for(let i =0; i< lists.length; i++){
      let tmp1 = lists[i]
      while(tmp1){
          tmp = lists.next
          res.push(new ListNode(lists[i].val))
          tmp1 = tmp
      }
  }
  res.sort((a,b) => a.val-b.val)
  console.log(res)
  if(!res.length) return null
  for(let j=0;j<res.length-1; j++){
      res[j].next = res[j+1]
  }
  console.log(res.val)
};

// 递归
var mergeKLists = function(lists) {
    if(lists.length == 0){
        return null
    }else if(lists.length == 1){
        return lists[0]
    }else if(lists.length == 2){
        return mergeTwoLists(lists[0],lists[1])
    }else{
        let middle = lists.length >> 1
        let left = lists.slice(0,middle)
        let right = lists.slice(middle)
        return mergeTwoLists(mergeKLists(left),mergeKLists(right))
    }
}

var mergeTwoLists = function(l1, l2) {
  if(l1 == null){
      return l2
  }else if(l2 == null){
      return l1
  }else if(l1.val < l2.val){
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
  }else{
      l2.next = mergeTwoLists(l1, l2.next)
      return l2
  }
};
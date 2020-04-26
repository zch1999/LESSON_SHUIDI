
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
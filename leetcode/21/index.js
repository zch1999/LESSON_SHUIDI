var mergeTwoLists = function(l1, l2) {
  let tmp = []
  while(l1 != null){
      tmp.push(l1.val)
      l1 = l1.next
  }
  while(l2 != null){
      let tmp2 = l2
      tmp.push(l2.val)
      l2 = l2.next
  }
  tmp.sort((a,b) => a-b)
  if(tmp.length == 0) return null
  // console.log(tmp)
  let res = new ListNode(tmp[0])
  let herry = res
  for(let i = 0; i< tmp.length - 1; i++){
      let ant = new ListNode(tmp[i+1])
      res.next = ant
      res = ant
  }
  return herry
};

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

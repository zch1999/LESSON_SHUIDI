function ListNode(val) {
    this.val = val;
    this.next = null;
}
let l1 = new ListNode(7)
let a = new ListNode(2)
let b = new ListNode(4)
let c = new ListNode(3)
l1.next = a
a.next = b
b.next = c
// console.log(l1)
let l2 = new ListNode(5)
let d = new ListNode(6)
let e = new ListNode(4)
l2.next = d
d.next = e

var addTwoNumbers = function(l1, l2) {
    let m = [];
    let n = [];
    let k = [];
    let cur1 = l1;
    let cur2 = l2;
    let jw = 0;
    while(cur1){
        m.push(cur1.val)
        cur1 = cur1.next
    }
    while(cur2){
        n.push(cur2.val)
        cur2 = cur2.next
    }
    while(m.length > 0 || n.length > 0){
        let x = Number(m.pop()) || 0
        let y = Number(n.pop()) || 0
        k.push((x+y+jw)%10)
        if(x+y+jw >= 10){
            jw = 1
        }else{
            jw = 0
        }
    }
    if(jw == 1){
        k.push(1)
    }
    const dummy = {};

    let current = dummy;
  
    while (k.length > 0) {
      current.next = {
        val: k.pop(),
        next: null
      };
  
      current = current.next;
    }
    console.log(dummy.next)
    return dummy.next;
};

addTwoNumbers(l1,l2)
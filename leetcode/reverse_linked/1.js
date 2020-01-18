function ListNode(val) {
    this.val = val
    this.nxt = null
}

var n1 = new ListNode(1)
var n2 = new ListNode(2)
var n3 = new ListNode(3)
var n4 = new ListNode(4)
var n5 = new ListNode(5)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
    // console.log(n1)

var reverseList = function(head) {
    if (!head || !head.next) return head
    let cur = head //当前结点
    let pre = null //前驱结点
    while (cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        console.log(pre)
        cur = next
    }
    return pre
};

console.log(reverseList(n1))
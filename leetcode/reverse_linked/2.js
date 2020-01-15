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

var reverseList = (head) => {
    if (head == null || head.next == null) {
        return head
    } else {
        let newHead = reverseList(head.next)
        head.next.next = head
        head.next = null
        return newHead
    }
}

console.log(reverseList(n1))
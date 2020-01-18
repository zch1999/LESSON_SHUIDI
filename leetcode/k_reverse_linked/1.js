function ListNode(val) {
    this.val = val
    this.next = null
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

var reverseKGroup = function(head, k) {
    if (!head || k == 1) { //空链表或k=1
        return head
    }
    var dummy = { //哨兵结点
        next: head
    }
    var start = dummy //dummy之后变成反转后链表段的尾结点
    var count = 0
    var end = head //初始化
    while (end != null) {
        count++
        if (count % k == 0) { //整除 反转
            start = reverse(start, end.next) //反转后要与其他组能连上
            end = start.next
        } else {
            end = end.next //更新end的值
        }
    }
    return dummy.next
};

var reverse = function(start, end) {
    var cur = start.next
    var pre = start //前驱结点
    var first = cur //保存第一个结点  反转后变成尾结点  下一组的头指针
    while (cur != end) {
        var temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    start.next = pre
    first.next = cur
    return first
}

console.log(reverseKGroup(n1, 2))
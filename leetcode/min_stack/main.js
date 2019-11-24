// 设计一个栈 stack
// 支持push pop top
// 获取最小值
function MinStack(){
    this.stack=[];//使用数组模拟栈
}
MinStack.prototype.push=function(x){
    this.min=Number.MAX_VALUE;
    if(x<this.min){
        this.min=x;
    }
    return this.stack.push(x);
}
MinStack.prototype.pop=function(){
    const item=this.stack.pop();
    return item;
}
MinStack.prototype.top=function(){
    return this.stack[this.stack.length-1];
}
MinStack.prototype.getMin=function(){
    return this.min;
}
MinStack.prototype.toString=function(){
    return this.stack.join('');
}
var stack=new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
stack.pop();
console.log(stack.getMin())
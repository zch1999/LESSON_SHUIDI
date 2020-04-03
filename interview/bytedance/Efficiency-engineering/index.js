Function.prototype.myBind = function(thisObj, ...args1){
    let fn = this
    function foo(...args2){
        const args = args1.concat(args2)
        return fn.apply(thisObj,args)
    }
    return foo
}
// function foo(a,b,c) {
//     return this.d + a + b + c
// }
// let a = {d:5}
// let bar = foo.myBind(a,1,2)
// let sum = bar(3)
// console.log(sum)
// foo.bind
// let a ={}
function Animal(name, color) {
    this.name = name;
    this.color = color;
  }
  Animal.prototype.say = function () {
    return `I'm a ${this.color} ${this.name}`;
  };
  const Cat = Animal.myBind(null, 'cat');
  console.log(Cat.prototype)
  const cat = new Cat('white');
  // cat 
  if (cat.say() === 'I\'m a white cat' &&
    cat instanceof Cat && cat instanceof Animal) {
    console.log('success');
  }


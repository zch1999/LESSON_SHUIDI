Function.prototype.myBind = function(thisObj, ...args1){
    let fn = this
    console.log(fn)
    function foo(...args2){
        const args = args1.concat(args2)
        let isNewCall = this instanceof foo;
        console.log(this)
      // isNewCall ? 实例 : thisObj
      return fn.call(isNewCall ? this : thisObj, ...args);
    }
    foo.prototype = fn.prototype;
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
  const cat = new Cat('white');
  if (cat instanceof Animal) {
    console.log('success');
  }
  // cat 
  console.log(cat)
  // console.log(cat.say())
  // if (cat.say() === 'I\'m a white cat' && cat instanceof Cat && cat instanceof Animal) {
  //   console.log('success');
  // }
  // cat.say() === 'I\'m a white cat' &&

  
  function foo(a){
    // const args = args1.concat(args2)
    console.log(this instanceof foo);
    console.log(this)
    this.a = a
  // isNewCall ? 实例 : thisObj
  // return fn.call(isNewCall ? this : thisObj, args);
  }

  let aaa = new foo('l')
  console.log(aaa.a)
function foo (){
    // console.log(this)
    return this.hosts
}

foo.prototype.hosts = ['jjjj']
foo.hosts = ['iiiii']

let p1 = new foo()
// let p2 = foo()
console.log(foo)
console.log(p1)
// console.log(p2)

//手写new
// 创建一个新的对象
// 继承父类原型上的方法.
// 添加父类的属性到新的对象上并初始化. 保存方法的执行结果.
// 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象。
function _new(obj, ...rest){
    // 基于obj的原型创建一个新的对象
    const newObj = Object.create(obj.prototype);
  
    // 添加属性到新创建的newObj上, 并获取obj函数执行的结果.
    const result = obj.apply(newObj, rest);
  
    // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
    return typeof result === 'object' ? result : newObj;
  }
  
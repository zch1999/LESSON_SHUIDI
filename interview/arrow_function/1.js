var New = function(fn,...args){
    // const obj = {};
    // obj.__proto__ = fn.prototype
    console.log(fn.prototype)
    const obj = Object.create(fn.prototype)
    fn.call(obj,...args)
    return obj
}

function Func1(name){
    this.name = name
}

var f1 = New(Func1)
// console.log(f1 instanceof Func1)
function Person(name, age){
    this.name = name;
    this.age = age;
}
//覆盖了Object上原有的toString方法
Person.prototype.toString = function(){
    return 'I am a Person, my name is ' + this.name;
}
function Man(name, age){
    // console.log(arguments,'sss');
    //把父类的构造函数执行以下
    Person.apply(this,arguments);
}
Man.prototype = Object.create(Person.prototype);
//覆盖
Man.prototype.toString = function(){
    return 'I am a 007,my name is ' +this.name;
}
var cxc = new Man('hh',20);
console.log(cxc + "");
var person = new Person('gg',19);
// console.log(person + ""); //类型转换
// const arr = ['hh','jj'];
// console.log(Object.prototype.toString.call(a));
// 1,构建coffee类
// js面向对象比较特别
var Coffee=function(){//匿名，值是函数
console.log('开始制作');
};
function Tea(){//茶类

};
Coffee.prototype.boilwater = function(){
    console.log('把水煮沸');
};
Coffee.prototype.brewCoffeeGriends=function(){
    console.log('冲泡');
};
Coffee.prototype.pourInCup=function(){
    console.log('倒入杯子');
};
//在类的原型添加一个方法
Coffee.prototype.addSugarAndMilk=function(){
    console.log('添加糖和牛奶');
};
//抽象 隐蔽一些细节
Coffee.prototype.makecoffee=function(){
    this.boilwater();
    this.brewCoffeeGriends();
    this.pourInCup();
    this.addSugarAndMilk();
    console.log('咖啡已完成');
};
var coffee =new Coffee();
coffee.makecoffee();
const tea=new Tea('乌龙茶');
function Tea(type){
    this.type=type;
};
Tea.prototype.pourInCup=function(){
    console.log('倒入');
};
Tea.prototype.seepTeaBag=function(){
    console.log('沸水泡茶');
};
Tea.prototype.boilwater=function(){
    console.log('烧水');
};
Tea.prototype.addLemon=function(){
    console.log('添加柠檬');
};
Tea.prototype.Paocha=function(){
    //this指向实例后的对象
    this.boilwater();
    this.seepTeaBag();
    this.pourInCup();
    this.addLemon();
};
tea.Paocha();
console.log(tea.type);

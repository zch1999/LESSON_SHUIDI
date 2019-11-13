// 咖啡和茶的基类
function Beverage(){

}
Beverage.prototype.boilwater= function(){
    console.log('把水煮沸');
}
Beverage.prototype.pourInCup=function(){}
Beverage.prototype.addcondiments=function(){}
Beverage.prototype.make=function(){
    this.boilwater();
    this.brew();
    this.pourInCup();
    this.addcondiments();
}
Beverage.prototype.brew=function(){
    //空着
}
var Coffee= function(){}
//继承Beverage
Coffee.prototype=new Beverage()//原型类
Coffee.prototype.brew=function(){
    console.log('用水冲泡');
}
Coffee.prototype.pourInCup=function(){
    console.log('把咖啡倒入');
}
Coffee.prototype.addcondiments=function(){
    console.log('加糖和牛奶');
}
var coffee =new Coffee()
coffee.make();
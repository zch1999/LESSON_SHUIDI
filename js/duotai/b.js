var makeSound = function(animal) {
    // if (animal instanceof Duck) {
    //     console.log('嘎嘎嘎');
    // } else if (animal instanceof Chicken) {
    //     console.log('咯咯咯');
    // }
    animal.say();
}
var Duck = function() {};
Duck.prototype.say = function() {
    console.log('嘎嘎嘎');
}
var Chicken = function() {};
Chicken.prototype.say = function() {
    console.log('咯咯咯');
}
makeSound(new Chicken());
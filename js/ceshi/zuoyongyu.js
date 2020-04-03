var value = 1;

function foo() {
    console.log(value);
}
foo()
function bar() {
    let value = 2;
    let a = foo.bind(bar);
    a()
}

bar();

let a = new foo()
if(a instanceof foo){console.log('true')}
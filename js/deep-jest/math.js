function add (a,b){
  return a + b
}

function min(a, b){
  return a - b
}

let expect = 10
let res = add(7,3)
if(expect !== res){
  throw new Error('add 出错')
}

function should(result){
  return {
    equal: function(expect){
      if(result !== expect){
        throw new Error('不通过')
      }
    }
  }
}

function it(desc, fn){
  try {
    fn()
    console.log(`√：${desc} pass`)
  } catch {
    console.log(`×：${desc} fail`)
  }
}

it('测试',()=>{
  should(add(7,3)).equal(10)
})
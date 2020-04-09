# 函数式封装防抖节流函数
## 什么是防抖？
### 具体实现函数
```
function throttle(func,wait){
    let time1 = Date.now();
    return function(){
        let time2 = Date.now();
        if(time2 - time1 > wait){
            func();
            time1 = time2;
        }
    }
}
```
- 数据可视化
- 使用requestAnimationFrame 请求运动帧
游戏开发中使用requestAnimationFrame来代替setInterval
    function animation(){
        console.log('--');
        requestAnimationFrame(function(){
        animation();//递归 自己调用自己 内存泄漏
        })
    }
    animation();

- canvas是画布
绘制API画布默认大小
canvas.style.width 标准的 +单位 vw
canvas.width 属性 不接受单位 只接受数值
ctx = canvas.getContent('2d');
ctx.fillStyle ='red';
ctx.fillText(2,100,100);
requestAnimation + clearRect();
// const 常量
// 类名用 .   id 用 #
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handlMove(e){
    // 测试 console.log('***')
    console.log('***');
    console.log(e.pageY);
    const y =e.pageY - this.offsetTop;
    // offsetTop 获取某个dom结构到浏览器顶部的距离
    const percent = y / this.offsetHeight;
    // offsetHeight 获取某个dom结构的自身高度 这里指speed 的dom结构
    const min = 0.5;
    const max = 3.0;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * ( max - min) + min ;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    // video.playbackRate 固有方法
    video.playbackRate = playbackRate
}
speed.addEventListener('mousemove',handlMove);
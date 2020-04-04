// 1. 距离
// 2. 点 经纬度
// 114.312415, 25.686969
// 命名规范
// 114.311825,25.695013
// 114.315627,25.703063

const myLatitude = '25.686969',
    myLongitude = '114.312415',
    kfcLatitude = '25.695013',
    kfcLongitude = '114.311825';
// 坐标 店名 评分, ... {} JSON 对象字面量
const shops = [{
        name: '窑鸡王(崇义店)',
        pos: [114.311825, 25.686969],
        logo: 'https://img.meituan.net//msmerchant/485f0f50e51c1a8f02f8e6e44cc6e92531766.jpg@188w_106h_1e_1c',
        score: 4.5,
        amount:1800,
        time:30,
        price: '起送45 | 配送5 | 人均￥48',
        reduction:'满40减6;满60减10;满90减16',
        discount:'折扣商品6折起'
    },
    {
        name: '牛男手造(崇义店)',
        pos: [114.316347,25.698024],
        logo: 'https://img.meituan.net//msmerchant/6161472b752fbaf8fd521e51c6be779c65735.jpg@188w_106h_1e_1c',
        score: 4.8,
        amount:2800,
        time:30,
        price: '起送25 | 配送5 | 人均￥20',
        reduction:'满50减6;满80减10;满100减18',
        discount:'折扣商品6折起'
    },
    {
        name: '麻辣香锅(崇义店)',
        pos: [114.318017,25.693011],
        logo: 'https://img.meituan.net//msmerchant/746ca2daaf968bcda8df3774dc58453087956.jpg@188w_106h_1e_1c',
        score: 4.2,
        amount:3400,
        time:30,
        price: '起送35 | 配送5 | 人均￥35',
        reduction:'满50减6;满80减10;满100减16',
        discount:'折扣商品6折起'
    },
    {
        name: '川西坝子',
        pos: [114.318988,25.691822],
        logo: 'https://img.meituan.net//msmerchant/526235ea490f56d823cd05eab59ce559367109.jpg@188w_106h_1e_1c',
        score: 4.9,
        amount:5800,
        time:30,
        price: '起送40 | 配送0 | 人均￥65',
        reduction:'满50减6;满80减10;满100减16',
        discount:'折扣商品6折起'
    }, {
        name: '小就坎',
        pos: [114.313517,25.709745],
        logo: 'https://img.meituan.net//msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@188w_106h_1e_1c',
        score: 3.3,
        amount:1500,
        time:30,
        price: '起送45 | 配送10 | 人均￥40',
        reduction:'满50减6;满80减10;满100减16',
        discount:'折扣商品6折起'
    }, {
        name: '鱼没有',
        pos: [114.316221,25.707051],
        logo: 'https://img.meituan.net//msmerchant/791a46349120305f33da96e731c0c0ca64253.jpg@188w_106h_1e_1c',
        score: 4.1,
        amount:2100,
        time:30,
        price: '起送15 | 配送5 | 人均￥20',
        reduction:'满50减6;满80减10;满100减16',
        discount:'折扣商品6折起'
    }, {
        name: '自助火锅城',
        pos: [114.315448,25.691301],
        logo: 'https://img.meituan.net//msmerchant/ee20dabfd23c9bbc7a2f22a639036e293123702.jpg@188w_106h_1e_1c',
        score: 2.6,
        amount:1200,
        time:30,
        price: '起送25 | 配送5 | 人均￥25',
        reduction:'满56减6;满80减10;满100减16',
        discount:'折扣商品6折起'
    }, {
        name: '不出名火锅',
        pos: [114.321557,25.689356],
        logo: 'https://p0.meituan.net/600.600/bbia/7b181136f08f4dcd8b51a4739972fe5c178903.jpg@220w_125h_1e_1c',
        score: 1.8,
        amount:90,
        time:30,
        price: '起送10 | 配送5 | 人均￥30',
        reduction:'满20减6;满70减10;满100减16',
        discount:'折扣商品6折起'
    }, {
        name: '百味鸡',
        pos: [114.311047,25.702273],
        logo: 'https://p0.meituan.net/600.600/bbia/f41e4e67da01a134c4201aba9c154bef209381.jpg@220w_125h_1e_1c',
        score: 4.8,
        amount:2600,
        time:30,
        price: '起送0 | 配送15 | 人均￥20',
        reduction:'满50减6;满80减10;满100减16',
        discount:'折扣商品6折起'
    }, {
        name: '骨之味',
        pos: [114.317344,25.690959],
        logo: 'https://p0.meituan.net//bbia/68a0ec5816c24292cb2fe949338d9c1b374824.jpg@188w_106h_1e_1c',
        score: 4.9,
        amount:3800,
        time:30,
        price: '起送40|配送5|人均￥60',
        reduction:'满35减6;满80减10;满100减16',
        discount:''
    }
];
// sdk 有点大，他在远方
// js 事件机制
window.onload = function () {
    const shopContainer = document.querySelector('.shop-list');
    const map = new BMap.Map(); // 实例化地图
    const mypoint = new BMap.Point(myLongitude, myLatitude);

    for (let i = 0; i < shops.length; i++) {
        let shopPoint = new BMap.Point(shops[i].pos[0], shops[i].pos[1]);
        let per = (shops[i].score/5) * 100;
        let distance = parseDistance(
            //   // 925.1111
            map.getDistance(mypoint, shopPoint)
        );
        shopContainer.innerHTML += `
                    <div class="poi-item-wrapper">
                        <div class="poi-info-wrapper">
                            <div class="image-wrapper">
                                <div class="imgbox">
                                    <img src="${shops[i].logo}" alt=""></img>
                                </div>
                            </div>
                            <div class="poi-info">
                                <div class="poi-name"><h4>${shops[i].name}</h4></div>
                                    <div class="price-wrapper">
                                                <span class="vote-star">
                                                    <i style="width:${per}%"></i>
                                                </span>
                                                <span class="score">${shops[i].score.toFixed(1)}</span>
                                                <span class="amount">月售${shops[i].amount}+</span>
                                                <span class="time">${shops[i].time}分钟</span>
                                            <span class="location">| ${distance}</span>
                                    </div>
                                    <div class="delivery-wrapper">${shops[i].price}
                                    </div>
                                    <div class="reduction-wrapper">
                                        <div class="price-img" id="img3">
                                            <img src="https://bruce-shy.github.io/Lesson_bm/h5/meituan/material/3.png" alt=""></img>
                                        </div>
                                        <div class="dire">${shops[i].reduction}</div>
                                    </div>
                                    <div class="discount-wrapper">
                                        <div class="price-img" id="img4">
                                            <img src="https://bruce-shy.github.io/Lesson_bm/h5/meituan/material/4.png" alt="" class="discount-img"></img>
                                        </div>
                                        <div class="dire">${shops[i].discount}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                `
                let imgs = document.getElementsByClassName('discount-img')
                console.log(imgs[i])
                // if(shops[i].reduction == ""){
                //     document.querySelector("#img3").style.display="none";
                // }
                if(shops[i].discount == ''){
                    imgs[i].src = ''
                }
    }

    function parseDistance(distance) {
        // 如果 > 1000 米 返回 4.1km
        // 否则 整数 936m
        if (distance < 1000) {
            return parseInt(distance) + 'm';
        } else {
            return (distance / 1000).toFixed(1) + 'km';
        }
    }
    //     // 开始我们的js编程
    //     const map = new BMap.Map();//实例化地图
    //     // map.centerAndZoom("崇义县阳光小区", 17)//中心设置zoom

    //     // 两点距离
    //     const mypoint = new BMap.Point(myLongitude, myLatitude);
    //     const kfcPoint = new BMap.Point(kfcLongitude, kfcLatitude);
    //     // const distance = parseDistance(map.getDistance(mypoint, kfcPoint));
    //     // Number
    //     // console.log(distance);
    //     // . 选择类名
    //     // document.querySelector('.poi-name').innerHTML = '肯德基';
    //     // document.querySelector('.location').innerHTML = distance;
    //     // document.querySelector('.imgbox img').src = "https://p0.meituan.net/200.0/deal/607cffdccca7f4da09a2dddeedd31a8e49072.jpg@126_0_388_388a%7C267h_267w_2e_100Q";
}
let request = require('request-promise');
let cheerio = require('cheerio');
let fs = require('fs');
const main =async()=>{
    // 进程
    let html= await request({
        url:'http://movie.douban.com/top250'
    });

    // console.log(html);
    let $ = cheerio.load(html);
    let movieNodes = $('#content .article .grid_view').find('.item');
    // console.log(movieNodes);
    // console.log('kkk')
    let movies = [];
    for(let i=0;i<movieNodes.length;i++){
        // console.log('kkk')
        let item = cheerio.load(movieNodes[i]);
        let titles = $('.info .hd span').text();
        // titles = ([]).map.call(titles,t=>{
        //     return $(t).text()
        // })
        // console.log(titles);
        let bd = $('.info .bd');
        let info = bd.find('p').text();
        let score = $('.star .reting_num').text();
        movies.push({
            'titles':titles,
            'info':info,
            'score':score
        })
    }
    console.log(movies);
    fs.writeFile('./output.json',JSON.stringify(movies),'utf-8',(err=>{
        if(err)
            console.log(err);
        console.log('生成json文件成功，爬取完成');
    }))
}

main();
const fs =require('fs');
const image =fs.readFileSync('./chepai.jpg').toString("base64");
const AipOcrClient =require('baidu-aip-sdk').ocr;
const client =new AipOcrClient('17712439','RcF2PAmQAQh94t3WD3LcxuGP','Kk94ik0vx8woeZ44u4PAiwvQGGyPLC2f');
const options ={};
options ["multi_detect"]="true";

client.licensePlate(image,options)
    .then(function(result){
        console.log(result);
    })
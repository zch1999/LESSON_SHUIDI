const fs = require('fs');
// fs.readFile('./d.txt',function(err,res){
//     if(err){
//         console.log(err);
//         return;}
//     console.log(res.toString());
// });
function readFile(){
    // fs.readFile('./a.txt',function(err,res){
    //     if(err){
    //         console.log(err);
    //         return;}  
    //     console.log(res.toString());
    //     fs.readFile('./b.txt',function(err,res){
    //             if(err){
    //                 console.log(err);
    //                 return;}
    //             console.log(res.toString());
    //             fs.readFile('./c.txt',function(err,res){
    //                     if(err){
    //                         console.log(err);
    //                         return;}
    //                     console.log(res.toString());
    //                 });
    //         });
    //     });
    const aFile = fs.readFileSync('a.txt').toString();
    console.log(aFile);
    const bFile = fs.readFileSync('b.txt').toString();
    console.log(bFile);
    const cFile = fs.readFileSync('c.txt').toString();
    console.log(cFile);
}
readFile();

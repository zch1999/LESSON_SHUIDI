const nodemailer = require ('nodemailer');
let transporter = nodemailer.createTransport({
    service:'qq',//腾讯服务
    port:465,
    srcureConnection:true,
    auth:{
        user:'1901394767@qq.com',
        pass:'moxmiatctpkwbdhf'
    }
})

let mailOptions={
    from:"光棍节前的呐喊<1901394767@qq.com>",
    to:'1239941131@qq.com',
    subject:'双十一买什么？',
    html:'<b>淘宝京东拼多多</b>'
}
transporter.sendMail(mailOptions,(error,info)=>{
    if(error)
    {
        return console.log(error);
    } 
    console.log('message send:%s',info.messageId);
})
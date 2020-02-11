const path = require('path');
const fse = require('fs-extra')
const multiparty = require('multiparty')

const UPLOAD_DIR = path.resolve(__dirname, "..", "target")

const extractExt = filename => filename.slice(filename.lastIndexOf("."), filename.length)

const resolvePost = req =>
    new Promise(resolve => {
        // post 慢慢的来的
        let chunk = "";
        req.on("data", data => {
            chunk += data; //二进制
        })
        req.on("end", () => {
            // console.log('end', chunk);
            resolve(JSON.parse(chunk))
        })
    })
module.exports = class {
    async handleVerifyUpload(req, res) {
        // res.end('verify')
        //服务器端有没有这个文件
        //拿到post 的 data ， bodyParse
        const data = await resolvePost(req);
        // console.log(data)
        const { fileHash, filename } = data;
        const ext = extractExt(filename);
        // console.log(ext);
        // console.log(UPLOAD_DIR)
        const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${ext}`);
        // console.log(filePath);
        if (fse.existsSync(filePath)) {
            res.end(
                JSON.stringify({
                    shouldUpload: false
                })
            )
        } else {
            res.end(
                JSON.stringify({
                    shouldUpload: true,
                    uploadedList: []
                })
            )
        }
    }
    async handleFormData(req, res) {
        //带有文件上传的表单
        const multipart = new multiparty.Form();
        multipart.parse(req, async(err, fields, files) => {
            if (err) {
                console.log(err);
                res.status = 500;
                res.end("process file chunk failed")
                return
            }
            const [chunk] = files.chunk;
            const [hash] = fields.hash;
            const [fileHash] = fields.fileHash;
            const [filename] = fields.filename;
            // console.log(chunk, hash, fileHash, filename)
            const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${extractExt(filename)}`);
            console.log(filePath)
            console.log(fse.existsSync(filePath))
            const chunkDir = path.resolve(UPLOAD_DIR, fileHash)
            if (fse.existsSync(filePath)) {
                res.end("file exist")
                return
            }

            if (!fse.existsSync(chunkDir)) {
                //目录地址是否存在
                await fse.mkdirs(chunkDir)
            }
            await fse.move(chunk.path, path.resolve(chunkDir, hash))
        })
    }
}
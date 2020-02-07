const http = require('http');
const path = require('path');
const multiparty = require('multiparty');
const fse = require('fs-extra');
const server = http.createServer();
const UPLOAD_DIR = path.resolve(__dirname, ".", "target")

server.on("request", async(req, res) => {
    // res.end("hello")
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    if (req.url == '/') {
        //chunk name
        const multipart = new multiparty.Form();
        // console.log(multipart)
        multipart.parse(req, async(err, fields, files) => {
            if (err) {
                return;
            }

            const [chunk] = files.chunk; //拿到了文件块
            const [filename] = fields.filename; //文件名
            // console.log(filename)
            const dir_name = filename.split('-')[0];
            const chunkdir = path.resolve(UPLOAD_DIR, dir_name);
            if (!fse.existsSync(chunk)) {
                await fse.mkdirs(chunkdir)
            }
            await fse.move(chunk.path, `${chunkdir}/${filename}`)
        })
    }
})

server.listen(3000, () => console.log('3000端口'))
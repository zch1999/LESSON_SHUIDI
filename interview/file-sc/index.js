const fs = require('fs');
const http = require('http');
const querystring = require('querystring');
const server = http.createServer((req, res) => {
  if (req.url === "/file" && req.method.toLowerCase() === "post") {
    parseFile(req, res)
  } else {
    fs.createReadStream('./index.html').pipe(res);
  }
})
function parseFile(req, res) {
  req.setEncoding("binary");
  let body = "";
  let fileName = "";
  // 边界字符
  let boundary = req.headers['content-type']
    .split('; ')[1]
    .replace("boundary=", "")
  
  req.on("data", function(chunk) {
    body += chunk;
  });
  req.on("end", function() {
    // 按照分解符切分

  })
}

server.listen(7787)
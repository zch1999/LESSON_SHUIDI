const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};


const asyncReadFile = async function () {
  const f1 = await readFile('./README.md');
  console.log(f1.toString());
  
};

asyncReadFile()
// console.log(f1)
const { ipcMain, clipboard } = require('electron')

module.exports = function() {
  ipcMain.on('share-to-wechat', async(e, code) => {
    if(code){
      console.log(code)
    }
  })
}
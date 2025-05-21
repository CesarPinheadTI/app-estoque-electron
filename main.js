const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false
  })

  win.loadFile('src/pages/cadastro.html')
}

app.whenReady().then(() => {
  createWindow(
  )
})
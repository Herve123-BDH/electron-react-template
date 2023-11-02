const { BrowserWindow, app } = require('electron')

function createWindow(){
    let win = new BrowserWindow({
        minwidth: 800,
        minheight: 600,
        webPreferences:{
        nodeIntegration: true,
        }
    })

    // win.setMenu(null);
    win.loadFile('index.html')

    // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
const electron = require('electron');
const path = require('path');

const { app, BrowserWindow } = electron;

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true,
            devTools: true
        },
    });

    win.loadFile(path.resolve(__dirname, '..', 'public', 'index.html'));
}

app.on('ready', createWindow);
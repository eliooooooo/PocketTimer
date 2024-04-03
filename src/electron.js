const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true,
    // frame: false,
    // titleBarStyle: 'hidden',
    webPreferences: {
        nodeIntegration: true,
    }});

    win.loadURL('http://localhost:3000');
    win.setAlwaysOnTop(true, 'floating');

    // Ouvrir les outils de développement (facultatif)
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

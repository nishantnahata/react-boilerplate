const {app, BrowserWindow} = require('electron');

let win = null;

defaultSession = undefined;

function createWindow() {
    // Initialize the window to our specified dimensions
    win = new BrowserWindow({width: 1000, height: 600});

    // Specify entry point
    win.loadURL('http://localhost:3000');

    // Show dev tools
    // Remove this line before distributing
    win.webContents.openDevTools();

    // Remove window once app is closed
    win.on('closed', function () {
        win = null;
    });
}

app.on('ready', () => {

    createWindow();
    const session = win.webContents.session;
    session.webRequest.onBeforeRequest({}, (details, callback) => {
        if (details.url.indexOf('7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33') !== -1) {
            callback({redirectURL: details.url.replace('7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33', '57c9d07b416b5a2ea23d28247300e4af36329bdc')});
        } else {
            callback({cancel: false});
        }
    });

});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
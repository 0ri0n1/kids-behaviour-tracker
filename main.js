const { app, BrowserWindow } = require('electron');
const path = require('path');

// Keep a global reference of the window object to prevent it from being garbage collected
let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    icon: path.join(__dirname, 'public/assets/kids behaviour tracker.jpg')
  });

  // Load the index.html file
  mainWindow.loadFile(path.join(__dirname, 'public/index.html'));

  // Open DevTools in development mode
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed
  mainWindow.on('closed', function () {
    // Dereference the window object
    mainWindow = null;
  });
}

// This method will be called when Electron has finished initialization
app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on('window-all-closed', function () {
  // On macOS it is common for applications to stay open until the user quits explicitly
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  // On macOS it's common to re-create a window when the dock icon is clicked
  if (mainWindow === null) createWindow();
}); 
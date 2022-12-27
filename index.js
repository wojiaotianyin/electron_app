const { app, BrowserWindow, ipcMain } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Fake Slack",
  });
  win.webContents.openDevTools();
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("activate", function () {
  console.log("helloadjadhakdjsdkajsdkjsh");
});


import { app, BrowserWindow } from "electron";
import path from "path";
const createWindow = async () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        height: 1080,
        width: 1920,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        },
        icon: path.join(__dirname, "favicon.ico")
    });

    // 加载 index.html
    await mainWindow.loadFile("./dist/index.html");
    console.log("test");
    mainWindow.show();
    // 打开开发工具
    mainWindow.webContents.openDevTools();
};

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
void app.whenReady().then(() => {
    void createWindow();

    app.on("activate", () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) void createWindow();
    });
});

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. 也可以拆分成几个文件，然后用 require 导入。

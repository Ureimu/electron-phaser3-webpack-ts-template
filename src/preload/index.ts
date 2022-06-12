import { contextBridge } from "electron";
// preload.js

// 所有Node.js API都可以在预加载过程中使用。
// 它拥有与Chrome扩展一样的沙盒。
window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector: string, text: string) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    };

    for (const dependency of ["chrome", "node", "electron"]) {
        replaceText(`${dependency}-version`, process.versions[dependency] as string);
    }
});

// when using contextBridge.exposeInMainWorld, you should write declaration for this.
declare global {
    interface Window {
        readonly data: string;
    }
}
// cannot use class or this para --- since only function works and any prototype is ignored.
contextBridge.exposeInMainWorld("data", "test");

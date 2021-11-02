let fsExtra = require("fs-extra");
let path = require("path");


let rootDir = path.resolve(__dirname, "../../docs");

fsExtra.emptyDirSync(rootDir);

fsExtra.copySync(path.resolve(__dirname, "../build"), rootDir);
fsExtra.copyFileSync(path.resolve(__dirname, "../build/index.html"), path.resolve(rootDir, "./404.html"));
fsExtra.removeSync(path.resolve(__dirname, "../build"));
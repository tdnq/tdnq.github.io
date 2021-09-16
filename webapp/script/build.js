let fsExtra = require("fs-extra");
let path = require("path");


let rootDir = path.resolve(__dirname,"../../blog");

fsExtra.emptyDirSync(rootDir);

fsExtra.copySync(path.resolve(__dirname,"../build"),rootDir);
fsExtra.removeSync(path.resolve(__dirname,"../build"));
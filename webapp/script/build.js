let fsExtra = require("fs-extra");
let path = require("path");

let whiteList = [".git",".gitignore","webapp","READEME.md"];

let rootDir = path.resolve(__dirname,"../../");
let dir = fsExtra.readdirSync(rootDir);
dir.forEach((item,index)=>{
    if(!whiteList.includes(item)){
        fsExtra.remove(path.resolve(rootDir,item));
    }
})
fsExtra.copySync(path.resolve(__dirname,"../build"),rootDir);
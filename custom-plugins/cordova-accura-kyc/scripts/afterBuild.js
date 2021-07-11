const fs = require('fs');
const srcPath = __dirname.replace('scripts','');
const srcParentPath = __dirname.replace('plugins\\cordova-accura-kyc\\scripts','platforms\\android');

fs.copyFileSync(srcPath+'\\src\\android\\accuraface.license',
    srcParentPath + '\\app\\src\\main\\assets\\accuraface.license');

fs.copyFileSync(srcPath+'\\src\\android\\key.license', srcParentPath + '\\app\\src\\main\\assets\\key.license');

var gradle = fs.readFileSync(srcParentPath+"\\app\\build.gradle").toString();
if (gradle.indexOf('accura_kyc_v1_0.aar') === -1) {
    const lib = 'implementation files(\'libs\\\\accura_kyc_v1_0.aar\')\n';
    const indexForDep = gradle.indexOf('// SUB-PROJECT DEPENDENCIES START\n');
    const firstPart = gradle.substr(0, indexForDep);
    const lastPart = gradle.substr(indexForDep);
    // console.log(firstPart + lib + lastPart);
    fs.writeFileSync(srcParentPath+"\\app\\build.gradle", firstPart + lib + lastPart)
}

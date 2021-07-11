const fs = require('fs');
const srcPath = __dirname.replace('scripts','');
const srcParentPath = __dirname.replace('plugins\\cordova-accura-kyc\\scripts','platforms\\android');

fs.unlinkSync(srcParentPath + '\\app\\src\\main\\assets\\accuraface.license');
fs.unlinkSync(srcParentPath + '\\app\\src\\main\\assets\\key.license');
var gradle = fs.readFileSync(srcParentPath+"\\app\\build.gradle").toString();
if (gradle.indexOf('accura_kyc_v1_0.aar') !== -1) {
    const lib = 'implementation files(\'libs\\\\accura_kyc_v1_0.aar\')';
    gradle = gradle.replace(lib, '');
    fs.writeFileSync(srcParentPath+"\\app\\build.gradle", gradle)
}

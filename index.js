const path = require("path");
// console.log(path.sep); /* (\) */
console.log(process.env.PATH);
console.log(path.delimiter); /* (;) */
const currentfilepath = __filename;
console.log(currentfilepath);
console.log(__dirname);
let basename = path.basename(currentfilepath);
console.log('basename >' ,basename);
let basenameWithoutExt = path.basename(currentfilepath, '.js');
console.log("basenameWithoutExt >" ,basenameWithoutExt);
let dir = path.dirname(currentfilepath) /* dir > C:\Users\91786\Documents\FULL STACK WEB DEV\Project\path */
console.log("dir >", dir);
console.log("ext >", path.extname(currentfilepath) ); /* ext > .js */
console.log("ext1 >", path.extname('index.md.js')); /* ext1 > .js */

// When path and dir are seperate and we have to combined toghter then
let pathToFile = path.format({
    dir: '/Main/Public_Html/Home',
    base: 'index.html'
})
console.log('pathToFile >',pathToFile);
// Absolute path start from C:\\ (windows) or D://(mac, linux)
// Relative path start from .\ or ./, ../  or file name
console.log("isAbsolute", path.isAbsolute(currentfilepath));
console.log("isAbsolute", path.isAbsolute('/index.js'));
console.log("isAbsolute", path.isAbsolute('./index.js'));
console.log("isAbsolute", path.isAbsolute('../index.js'));
let pathToDir = path.join('/Home', 'js', 'dis', 'index.js')
console.log('pathToDir >',  pathToDir); 
console.log('parse >', path.parse(currentfilepath));
console.log('relativepath >', path.relative('/home/user/config', '/home/user/js'));

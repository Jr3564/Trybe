const { Folder } = require('./services');

const folder = new Folder('.');

console.log(folder.list());
console.log(folder.length());
console.log(folder.fileSizes());

const { Folder } = require('./services');

const folder = new Folder('.');

folder.listAsync().then((e) => console.log(e));

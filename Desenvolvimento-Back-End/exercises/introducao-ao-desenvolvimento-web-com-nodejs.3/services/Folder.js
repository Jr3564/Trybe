const fs = require('fs');

class Folder {
  constructor(path) {
    this.path = path;
  }

  list() {
    return fs.readdirSync(this.path);
  }

  listAsync() {
    return fs.promises.readdir(this.path);
  }

  length() {
    const filesArray = this.list();
    return filesArray?.length;
  }

  fileSizes() {
    const filesArray = this.list();

    return filesArray?.map((file) => {
      console.log(file);
      const { size } = fs.statSync(`${this.path}/${file}`);
      return { file, size };
    });
  }
}

module.exports = Folder;

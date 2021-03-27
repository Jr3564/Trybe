const fs = require('fs');

class Reader {
  constructor(fileName) {
    if (!fs.existsSync(fileName)) throw new Error('Arquivo não existe.');
    this.fileName = fileName;
  }

  getFileSync() {
    try {
      const file = fs.readFileSync(this.fileName, 'utf8');
      return file;
    } catch (error) {
      throw new Error(`Não foi possível ler o arquivo. \n${error}\n`);
    }
  }

  AsyncTo(callback) {
    fs.readFile(this.fileName, 'utf8', (err, file) => {
      if (err) {
        throw new Error(`Não foi possível ler o arquivo ${this.fileName}\n ${err}`);
      } else if (!file) {
        throw new Error(`O arquivo ${this.fileName} está em branco!\n`);
      }
      callback(file);
    });
  }
}

module.exports = Reader;

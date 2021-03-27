const fs = require('fs');
const { Reader, ChronometerLogs } = require('./services');

function readFiles(files = []) {
  const timeOfReadCode = new ChronometerLogs('Tempo de total leitura:');
  timeOfReadCode.init();
  try {
    files.forEach((fileName) => {
      const timeOfReadFile = new ChronometerLogs('Tempo de leitura do arquivo:');
      const reader = new Reader(fileName);
      timeOfReadFile.init();
      reader.getFileSync();
      console.log(`\nArquivo:${fileName}`);
      timeOfReadFile.stop();
      const { size } = fs.statSync(fileName);
      console.log(`Seu tamanho é de ${size} bytes\n`);
    });
    timeOfReadCode.stop();
  } catch (error) {
    console.log(error);
    timeOfReadCode.stop();
  }
}

readFiles(['./Files/file1.txt', './Files/file2.txt', './Files/file3.txt']);

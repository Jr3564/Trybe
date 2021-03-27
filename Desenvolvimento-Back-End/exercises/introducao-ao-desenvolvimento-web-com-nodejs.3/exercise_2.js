const fs = require('fs');
const { Reader, ChronometerLogs } = require('./services');

function readFiles(files = []) {
  const timeOfReadCode = new ChronometerLogs('Duração do código:');
  timeOfReadCode.init();
  files.forEach((fileName) => {
    const timeOfReadFile = new ChronometerLogs(`Tempo de leitura de ${fileName}:`);
    const reader = new Reader(fileName);
    reader.AsyncTo(() => {
      timeOfReadFile.init();
      timeOfReadFile.stop();
      const { size } = fs.statSync(fileName);
      console.log(`Seu tamanho é de ${size} bytes\n`);
    });
  });
  timeOfReadCode.stop();
}

readFiles(['./Files/file1.txt', './Files/file2.txt', './Files/file3.txt']);

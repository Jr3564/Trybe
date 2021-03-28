const fs = require('fs');
const { File, ChronometerLogs } = require('./services');

function readFiles(files = []) {
  const timeOfReadCode = new ChronometerLogs('Tempo de total leitura:');
  timeOfReadCode.init();
  try {
    files.forEach((fileName) => {
      const timeOfReadFile = new ChronometerLogs('Tempo de leitura do arquivo:');
      const file = new File(fileName);
      timeOfReadFile.init();
      file.read();
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

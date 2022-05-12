//      'updateFiles'     //

//O módulo FS possui métodos para atualizar arquivos:
/*
      'fs.appnedFile()'
      'fs.writeFile()'
 */

//  O método 'appendFile()' anexa o conteúdo especificado no final do arquivo especificado:
const fs = require("fs");

fs.appendFile("newfile.txt", "Shalom chaverim!", function (err) {
  if (err) throw err;
  console.log("Updated");
});

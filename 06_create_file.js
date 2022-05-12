//    create file   //

//  O módulo 'File System' possui métodos para criar novos arquivos:
/*
          'fs.appendFile()';
          'fs.open()';
          'fs.writeFile()'.
*/

//  O método 'fs.appendFile()' anexa o conteúdo especificado a um arquivo. Se o arquivo não existir, o arquivo será criado:
const fs = require("fs");
fs.appendFile("newfile.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

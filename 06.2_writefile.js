//      'fs.writeFile()'      //

//O método 'fs.writeFile()' substitui o arquivo e o conteúdo especificados, se existir. Se o arquivo não existir, um novo arquivo, contendo o conteúdo especificado, será criado:
const fs = require("fs");
fs.writeFile("newfile3.txt", "Hello content", function (err) {
  if (err) throw err;
  console.log("Saved!!!");
});

//      delete files      //

///   Para deletar arquivos com o módulo File System, use o método 'fs.unlink()'. O método 'fs.unlink()' exclúi o arquivo especificado:
const fs = require("fs");

fs.unlink("newfile2.txt", function (err) {
  if (err) throw err;
  console.log("File deleted!");
});

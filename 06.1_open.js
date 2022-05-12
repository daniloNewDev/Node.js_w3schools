//    'fs.open()'   //

//    O método 'fs.open()' recebe um "flag" como segundo parâmetro, se o sinalizador for "w" para "writing", o arquivo especificado será aberto para gravação. Se o arquivo não existir, um arquivo vazio será criado:
const fs = require("fs");
fs.open("newfile2.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!!");
});

//      rename file     //

//    Para retornar um arquivo com o módulo File System, use o método 'fs.rename()':
const fs = require("fs");

fs.rename("newfile01.txt", "newfile.txt", function (err) {
  if (err) throw err;
  console.log("File Renamed!");
});

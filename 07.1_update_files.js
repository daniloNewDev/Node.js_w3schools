//    'writeFile()'     //

//  O método 'writeFile()' substitui o arquivo e o conteúdo especificados:

const fs = require("fs");

fs.writeFile("newfile3.txt", "Shalom Aleichem", function (err) {
  if (err) throw err;
  console.log("Replaced!");
});

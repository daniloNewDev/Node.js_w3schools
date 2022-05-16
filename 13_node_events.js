//      Node.js Events      //

//  O Node.js é perfeito para aplicativos orientados a eventos. Cada ação em um computador é um evento. Como quando uma conexão é feita ou um arquivo é aberto.

//  Objetos em Node.js podem disparar eventos, como o objeto readStream dispara eventos ao abrir e fechar um arquivo:

const fs = require("fs");
const rs = fs.createReadStream("./newfile.txt");
rs.on("open", function () {
  console.log("The file is open!");
});

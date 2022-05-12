const http = require("http");
//  É possível incluir e usar o módulo criado em qualquer um dos arquivos Node.js. No exemplo abaixo é usado o "./" para localizar o módulo:
const dt = require("./mod_date");
//  Isso significa que o módulo em questão está na mesma pasta do arquivo Node.js.

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("A hora exata é: " + dt.horaCerta());
    res.end();
  })
  .listen(8080);

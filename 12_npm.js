//      O que é NPM     //

//Npm é um gerenciador de pacotes para pacotes Node.js, ou módulos Node.js. O programa NPM é instalado em seu computador quando você instala o Node.js.

//  O que é um Package?

//Um Package em Node.js contém todos os arquivos necessários para um módulo. Módulos são bibliotecaas JavaScript que você pode incluir em seu projeto.

//  Baixar um Package:

//  No terminal digite npm install upper-case

//  Usando um Package:

//  Nesse caso, criando um arquivo Node.js e fazendo um require() do Package 'upper-case' o Node.js converterá a saída "Hello World!" em maiúsculas:

const http = require("http");
const uc = require("upper-case");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(uc.upperCase("Hello World!"));
    res.end();
  })
  .listen(8080);

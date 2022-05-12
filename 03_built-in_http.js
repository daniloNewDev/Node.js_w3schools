//      Hyper Text Transfer Protocol      //

const http = require("http");

//  O Node.js como um servidor Web:
//  O módulo HTTP pode criar um servidor HTTP que escute as portas do cervidor e dê uma resposta ao cliente.

//O método 'createServer()' é usado para criar um servidor HTTP:
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); //Cabeçalho;
    res.write("Shalom L'Olam!"); //Resposta ao cliente;
    res.end(); //final da resposta;
  })
  .listen(8080); //o object server listen na porta 8080.

//  A função passada ao método http.createServer()' será executada quando alguém tentar acessar o computador na porta 8080.

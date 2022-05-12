//O Node.js tem um módulo integrado chamado HTTP, que permite que o Node.js transfira dados pelo Hyper Text Transfer Protocol (HTTP). Para incluir o módulo HTTP, é necessário utilizar o método 'require()':
const http = require("http");

//  O módulo HTTP pode criar um servidor HTTP que escute as portas do servidor e dê uma resposta ao cliente. O método 'createServer()' cria um servidor HTTP:
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!"); //Resposta ao cliente
  })
  .listen(8080);
//A função criada para o método 'http.createServer()' será executada quando alguém tentar acessar o computador pela prota 8080.

//    Digite no terminal node first_file.js e apertando o 'Enter' acesse a porta 8080 pelo http://localhost:8080.

//      Adicionando um cabeçalho HTTP     //

//Se a resposta do servidor HTTP deve ser exibida como HTML, é necessário incluir um cabeçalho HTTP com o tipo de conteúdo correto:
//    res.writeHead(200, {"Content-Type": "text/html"});

//  O primeiro argumento do método 'res.writeHead()' é o código de status, 200 significa que tudo está OK, o segundo argumento é um objeto contendo os cabeçalhos de resposta.

//      'query.string'      //

//  A função passada para o método 'createServer()' tem um argumento "req" que representa a solicitação do cliente, como um objeto (object http.IncomingMessage).
const http = require("http");

//  Este objeto tem uma propriedade chamada "url", que contém a parte da url que vem deppois do nome do domínio;

//  Split the query string:
//    Existem módulos integrados para dividir facilmente a string de consulta em partes legíveis, como o módulo URL.
const url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    const q = url.parse(req.url, true).query;
    const txt = q.year + " " + q.month;
    //res.write(req.url);
    res.end(txt);
  })
  .listen(8080);

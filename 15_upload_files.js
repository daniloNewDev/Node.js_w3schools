//      Node.js Upload Files      //

//  Módulo Formidable é utilizado para trabalhar com uploads de arquivos. O módulo Formidable pode ser baixado e instalado usando o NPM.

//  Fazendo upload de arquivos  //

//  1° etapa: criar um formulário de upload:
const http = require("http");
//este código produzirá um formulário HTML:
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<form action="fileupload" method="post" enctype="multipart/form-data">'
    );
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write("</form>");
    return res.end();
  })
  .listen(8080);

//  2° Etapa: analisar o arquivo enviado:

//  Inclua o módulo Formidable para poder analisar o arquivo carregado assim que chegar ao servidor.
//  Quando o arquivoé carregado e analisado, ele é colocado em uma pasta temporária no computador.

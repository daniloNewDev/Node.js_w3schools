const http = require("http");
const formidable = require("formidable");

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      let form = new formidabble.IncomingForm();
      form.parse(req, function (err, fields, files) {
        res.write("File uploaded");
        res.end();
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="fileupload"><br>');
      res.write('<input type="submit">');
      return res.end();
    }
  })
  .listen(8080);

//  3°Etapa: Salve o arquivo  //

//  Quando o arquivo é carregado com sucesso no sevidor, ele é colocado em uma pasta

//    'readFile()'

//    O  método 'fs.readFile()' é usado para ler arquivos em seu computador. Suponha que temos o seguinte arquivo HTML (localizado na mesma pasta do Node.js):

//     acessar o arquivo:  fs_file.html

//  Agora crie um arquivo Node.js que leia o arquivo HTML e retorne o conteúdo:
http
  .createServer(function (req, res) {
    fs.readFile("fs_file.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

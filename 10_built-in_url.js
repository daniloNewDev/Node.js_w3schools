//      Módulo Built-in URL     //

//  O módulo URL divide um endereço da Web em partes legíveis. Para incluir o módulo URL, use o 'reqiure()':
const url = require("url");
//endereço web:
const adr = "http://localhost:8080/default.htm?year=2022&month=june";
//  O método 'url.parse()' retorna um URL object com cada parte do endereço como propriedades:
const q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

//  O método 'url.parse()' retorna um objeto:
const qdata = q.query;
console.log(qdata.month);

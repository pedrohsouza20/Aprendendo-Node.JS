const HTTP = require("http");

HTTP.createServer((req, res) => {
  res.end("Website carregado");
}).listen(3000);
console.log("conectado com sucesso");

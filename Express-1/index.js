const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("teste");
});

app.get("/blog", (req, res) => {
    res.send("Blog");
})

app.listen(4000, (error) => {
  if (error) {
    console.log("Erro ao conectar ao servidor!");
  } else {
    console.log("Servidor conectado com sucesso!");
  }
});

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home");
});

//required param
app.get("/employeers/:name", (req, res) => {
  let employeerName = req.params.name;
  res.send(`Funcionário: ${employeerName}`);
});

//optional param
app.get("/houses/:type?", (req, res) => {
  let houseType = req.params.type;
  if (houseType) {
    res.send(`Exibindo casas do tipo ${houseType}`);
  } else {
    res.send("Exibindo todos os resultados de casas");
  }
});

app.listen(4000, (error) => {
  if (error) {
    console.log("erro ao conectar ao servidor");
  } else {
    console.log("servidor conectado com sucesso");
  }
});

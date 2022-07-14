const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const EstoqueCamisas = require("./Models/EstoqueCamisas");
const App = express();
App.use(cors());

//Forma de ler json
App.use(
  express.urlencoded({
    extends: true,
  })
);
App.use(express.json());
//teste do endpoint
App.get("/", (req, res) => {
  res.json({ message: "Olá!" });
});
//Rotas
App.post("/EstoqueCamisa", async (req, res) => {
  const { name, value, category, image } = req.body;
  if (!name || !value || !category || !image) {
    res.status(422).json({ error: "Alguma informação faltando!" });
  }
  const camisa = {
    name,
    value,
    category,
    image
  };
  try {
    await EstoqueCamisas.create(camisa);
    res.status(201).json({ message: "Produto inserido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
//Conexão ao banco de dados
mongoose
  .connect(
    "mongodb+srv://lucasgnam12:2uYl7QsmNjNL94zp@apliclusteer.xhwplkk.mongodb.net/bandodaapi?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conectamos ao MongoDB!");
    App.listen(3001, () => {
      console.log("Servidor está rodando");
    });
  })
  .catch((err) => console.log(err));
//

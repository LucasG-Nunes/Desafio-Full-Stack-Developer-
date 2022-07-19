const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const EstoqueCamisasRoutes = require("./Routes/EstoqueCamisaRoutes");
const Estoques = require("./Models/Estoques");
const App = express();
App.use(cors());

//Forma de ler json
App.use(
  express.urlencoded({
    extends: true,
  })
);
App.use(express.json());
//Rotas
App.use("/EstoqueCamisa", EstoqueCamisasRoutes);

App.get("/Estoques", async (req,res)=>{
  const estoque = await Estoques.find()
      res.status(200).json(estoque)
})
App.post("/Estoques", async (req, res) => {
  const { name, produtoEstoque, nomeProduto, valorProduto } = req.body;
  const estoque = {
    name,
    produtoEstoque,
    nomeProduto,
    valorProduto,
  };

  try {
    await Estoques.create(estoque);
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

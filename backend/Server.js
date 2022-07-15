const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const EstoqueCamisasRoutes = require("./Routes/EstoqueCamisaRoutes")
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
App.use("/EstoqueCamisa",EstoqueCamisasRoutes)

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

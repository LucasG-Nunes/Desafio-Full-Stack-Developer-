const router = require("express").Router()
const EstoqueCamisas = require("../Models/EstoqueCamisas");


//create
router.post("/", async (req, res) => {
    const { name, value, category, image } = req.body;
    if (!name || !value || !category || !image) {
      res.status(422).json({ error: "Alguma informação faltando!" });
      return
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
//read
  router.get("/", async (req,res)=>{
    try{
      const estoque = await EstoqueCamisas.find()

      res.status(200).json(estoque)
    }catch(err){
      res.status(500).json({message: err})
    }
  })

  router.get("/:id", async(req,res)=>{
    const id = req.params.id

    try{
      const camisa = await EstoqueCamisas.findOne({_id: id})
      if(!camisa){
        res.status(422).json({message: "O usuario não foi encontrado"})
        return
      }
      res.status(200).json(camisa)
    } catch(err){
      res.status(500).json({message: error})
    }
  })
  //update
  router.patch("/:id", async (req,res)=>{
    const id = req.params.id
    const {name,value,category,image} = req.body
    const camisa = {
      name,
      value,
      category,
      image
    };
    try{
      const updateCamisa = await EstoqueCamisas.updateOne({_id : id}, camisa)

      if(updateCamisa.matchedCount === 0 ){
        res.status(422).json({message: "O usuario não foi encontrado"})
        return
      }

      res.status(200).json(camisa)
    }catch(err){
      res.status(500).json({message: err})
    }

  })

  router.delete("/:id", async (req,res)=>{

    const id = req.params.id
    const camisa = await EstoqueCamisas.findOne({_id: id})
    if(!camisa){
      res.status(422).json({message: "O usuario não foi encontrado"})
      return
    }
    try{
      await camisa.deleteOne({_id: id})
      res.status(200).json({message: "Usuario foi removido com sucesso"})
    }catch(err){
      res.status(500).json({message: err})
    }
  })



  module.exports = router
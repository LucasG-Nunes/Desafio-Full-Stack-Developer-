const mongoose = require("mongoose")

const Estoques = mongoose.model('Estoques', {
    name:String,
    produtoEstoque:[{nomeProduto:String, valorProduto:Number}]
})

module.exports = Estoques
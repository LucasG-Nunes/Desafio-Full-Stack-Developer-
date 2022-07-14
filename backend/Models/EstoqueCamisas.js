const mongoose = require("mongoose")

const EstoqueCamisa = mongoose.model('EstoqueCamisa', {
    name:String,
    value:Number,
    category:String,
    image:String
})

module.exports = EstoqueCamisa
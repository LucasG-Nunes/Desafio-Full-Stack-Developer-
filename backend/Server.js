const Express = require ("express")
const cors = require("cors")
const App = Express()
App.use(cors())

App.get('/', (req,res)=>{
    res.send("Sua requisição funcionou!")
})


App.listen(3001,()=>{
    console.log('Servidor está rodando')
})
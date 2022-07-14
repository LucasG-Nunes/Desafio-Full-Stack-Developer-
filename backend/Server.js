const Express = require ("express")
const App = Express()


App.get('/', (req,res)=>{
    res.send("Sua requisição funcionou!")
})


App.listen(3001,()=>{
    console.log('Servidor está rodando')
})
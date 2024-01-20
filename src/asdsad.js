const app=require('express')()
const PORT=8080



app.listen(
    PORT,
    ()=> console.log(`its alive on https://localhost:${PORT}`)
)

app.get('/data',(req,res) =>{
    res.status(200).send({
        email:"bhavy",
        pasword:"1234"
    })
    


});
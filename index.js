const app=require('express')()

const cors = require('cors');
app.use(cors({
    origin:'http://127.0.0.1:5500',

}));
const bodyParser = require('body-parser');
const userRoutes=require('./src/routes/user.route')


const port =process.env.PORT||8080



app.get('/',(req,res) =>{
    res.send({
        name:"bhav",
        email:"bhavy",
        pasword:"1234"
    })
});

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())


app.use('/api/v1/user',userRoutes)



app.listen(
    port,
    ()=> console.log(`its alive on http://localhost:${port}/api/v1/user`)
)
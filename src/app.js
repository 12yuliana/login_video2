const express =require('express')
const  dotenv=require('dotenv')
const cookieparser =require('cookie-parser')
const app=express()
//create plantilla motor
app.set('view engine','ejs'); 
//creamos la carpeta public para archivos estatic
app.use(express.static('public'))

//para procesos de datos enviados desde formas
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//creamos las variable de entorno
dotenv.config({path:'./env/.env'})

//las cookis
app.use(cookieparser())

//llamar las routers
app.use('/',require('../router/router.js'))


// app.get('/',(req,res)=>{
//  res.render('index')
// })

app.use(function(req,res,next){
    if(!req.user)
    res.header('cache-control','private, no create ,no-store, must-revalate');
    next()
})

app.listen(4000 ,()=>{
    console.log('EL SERVICIO SE ESTA COORIENDO EN EL PUERTO http://localhost:4000');
})

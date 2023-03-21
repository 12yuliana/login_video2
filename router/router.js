const express =require('express')
const router =express.Router()
const authControllers =require('../constrollers/authControllers.js')
//rutas para las vistas
router.get('/',authControllers.AUTOTICADO,(req,res)=>{
    // conexion()
    res.render('index',{user:req.user})
})


router.get('/login',(req,res)=>{
    res.render('login', {alert:false})
//res.render('login')
})

router.get('/register',(req,res)=>{
    res.render('register')
})
authControllers.register

//rutas para las metodos de controlador
router.post('/register',authControllers.register)
router.post('/login',authControllers.login)
router.get('/logout',authControllers.logout)

module.exports=router

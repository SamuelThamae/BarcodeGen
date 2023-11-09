const express=require('express')
const mysql=require('mysql')
const userController=require("../controllers/users_Controller")
const router=express.Router();
require('dotenv').config()
var auth=require('../services/authCheck')
var roleCheck=require('../services/checkRoles')

router.get('/',auth.varifyToken,userController.read) //done
.get('/:id',auth.varifyToken,userController.oneRecord) //done
.put('/:id',auth.varifyToken,userController.update) //done
.delete('/id',auth.varifyToken,userController.delete) //done
.get('/activities/:id',auth.varifyToken,userController.activities)
.put('/profile/:id',auth.varifyToken,userController.edit)
.post('/login',userController.login) //done
.post('/register',userController.register) //done
.post('/forgotPassword/',userController.forgotpassword)
.get('/checkToken',userController.checkToken)



module.exports=router


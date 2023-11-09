const express=require('express')
const conn =require('../config/connection')
const router=express.Router()
require('dotenv').config()
const categoryController=require('../controllers/categoryController')
var auth=require('../services/authCheck')
var roleCheck=require('../services/checkRoles')


router
.get('/',categoryController.read)
.post('/',auth.varifyToken,categoryController.create)
.get('/:id',auth.varifyToken,categoryController.oneRecord)
.put('/:id',auth.varifyToken,categoryController.update)
.delete('/:id',auth.varifyToken,categoryController.remove)

module.exports=router
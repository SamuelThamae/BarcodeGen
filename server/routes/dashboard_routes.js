const express=require('express')
const router=express.Router()
const authCheck=require('../services/authCheck')
const dashboardController=require('../controllers/dashboardController')


router.get('/', authCheck.varifyToken,dashboardController.readData)
.get('/status',authCheck.varifyToken,dashboardController.status)
module.exports=router


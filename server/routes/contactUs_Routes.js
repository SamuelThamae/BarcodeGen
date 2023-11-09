const express=require('express')
const auth=require('../services/authCheck')
const contactUsController=require('../controllers/ContactUsController')
const router=express.Router()

router.post('/',contactUsController.send)
.get('/',auth.varifyToken,contactUsController.read)

module.exports =router
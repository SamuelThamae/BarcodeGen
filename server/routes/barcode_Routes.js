const express=require('express')
const router=express.Router();
const barcode_Controller=require('../controllers/barcode_Controller')
const auth=require('../services/authCheck')


router.get('/',auth.varifyToken,barcode_Controller.read)
.get('/:id',auth.varifyToken,barcode_Controller.oneRecord)
.post('/',auth.varifyToken,barcode_Controller.create)
.put('/:id',auth.varifyToken,barcode_Controller.update)
.delete('/:id',auth.varifyToken,barcode_Controller.remove)

module.exports=router
const express = require('express')
require('./config/connection')
require('dotenv').config()
const cors=require('cors')
const path = require('path')
const app = express()
const cookieParser=require('cookie-parser')
const port=process.env.PORT


app.use(express.static(path.join(__dirname,'public/')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({origin:'http://localhost:4200'}))

const dashboard=require('./routes/dashboard_routes')
app.use('/dashboard',dashboard)

const contactUs=require('./routes/contactUs_Routes')
app.use('/contactUs',contactUs)

const category=require('./routes/category_routes')
app.use('/category',category)

const userRoute=require('./routes/users_Routes.js')
app.use('/users',userRoute)

const barcodeRoute=require('./routes/barcode_Routes')
app.use('/barcodes',barcodeRoute)



app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

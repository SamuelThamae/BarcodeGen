const express=require('express')
const conn=require('../config/connection')

const readData=(req,res)=>{
    var userCount=0
    var categoryCount=0
    var barcodeCount=0
    var manufactureCount=0
    var messageCount=0

    const message=`SELECT COUNT(id) as messageTotal FROM contactus`
    conn.query(message,(err,result)=>{
        if(!err){
        
                messageCount=result[0].messageTotal
              
            
        }else
        {
            return res.status(503).json(message="Technical Error, please try agin later")
        }

    })
    const usersQuery=`SELECT COUNT(email) as usersTotal FROM user`
    conn.query(usersQuery,(err,result)=>{
        if(!err){
           
          
                userCount=result[0].usersTotal
                
          
        }else
        {
            return res.status(503).json(message="Technical Error, please try agin later")
        }

    })

    const category=`SELECT COUNT(name) as categoryTotal FROM category`
    conn.query(category,(err,result)=>{
        if(!err){
           
                categoryCount=result[0].categoryTotal
          
        }else
        {
            return res.status(503).json(message="Technical Error, please try agin later")
        }

    })

    const barcode=`SELECT COUNT(itemCode) as itemTotal FROM items`
    conn.query(barcode,(err,result)=>{
        if(!err){
            
         
            barcodeCount=result[0].itemTotal
        
        }else
        {
            return res.status(503).json(message="Technical Error, please try agin later")
        }

    })

    const manufacture=`SELECT COUNT(manufactureCode) as manufactureTotal FROM manufacture`
    conn.query(manufacture,(err,result)=>{
        if(!err){
            
                manufactureCount=result[0].manufactureTotal
                var data={
                    manufecture:manufactureCount,
                    user:userCount,
                    category:categoryCount,
                    items:barcodeCount,
                    message:messageCount
                }
    
                return res.status(200).json({result:data})
            
        }else
        {
            return res.status(503).json(message="Technical Error, please try agin later")
        }

    })

   
}
//Waiting for approval users
const status = async (req, res) => {
    
    const usersQuery=`SELECT concat(name ,surname) as fullName, email,status FROM user WHERE not status =?`
    conn.query(usersQuery,['Active'],(err,result)=>{
        if(!err){
            if(result[0].length<0)return res.status(404).json({message:'no result found '});
            return res.status(200).json({result:result})
        }
        else{
           return res.status(500).json({message:'something went wrong please try again later'})
        }
    })
}

 module.exports={
        readData:readData,
        status:status
    }
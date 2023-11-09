const express=require('express')
const conn=require('../config/connection')

const send=(req,res)=>{
    const reqBody=req.body
    try {
        const sql=`INSERT INTO contactus(name,email,subject,message) values(?)`
    const values=[
           [reqBody.name,reqBody.email,reqBody.subject,reqBody.mail]
    ]
    conn.query(sql,values,(err,result)=>{
        if(!err) return res.status(201).json({message:'thanks you for your feedback, We will get back to you late. '});
        console.log(err)
        //return res.status(403).json({message:'something went wrong, please try agin later'});
    })
    } catch (error) {
            console.log("error from catch")
    }

}

const read=(req,res)=>{
    const sql=`SELECT * FROM contactus ORDER BY dateCreated desc`
    conn.query(sql,(err,result)=>{
        if(!err)return res.status(200).json({result});
        return res.status(403).json({message:'something went wrong, please try again later'})
    })
}

module.exports={
    send:send,
    read:read
}
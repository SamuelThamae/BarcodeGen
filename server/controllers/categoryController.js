const express=require('express')
const conn= require('../config/connection')
const mysql=require('mysql')



const read=(req,res)=>{

    try {
        const query="SELECT * FROM category "
        conn.query(query,(err,data)=>{
        if(err) return res.status(400).json({message:"Server can't process the request, please try later "})
       return res.status(200).json({data})
    })
    } catch (error) {
        return res.status(500).json({message:"Server not active, try again later!"}); 
    }
    
}

const create=(req,res)=>{
    const category=req.body.name
    
    const query=`SELECT * FROM category WHERE name=?`
    conn.query(query,[category],(err,data)=>{
        if(data.length>0){
        return res.status(409).json({result:"Category already exist"});
        }
        else{
            const query=`INSERT INTO category(name) VALUES(?)`
            conn.query(query,[category],(err,data)=>{
                if(err)return res.status(403).json({result:"Error occured please try again later"})
                return res.status(200).json({result:"Category added successfully"})
            })
        }
    })
}
const oneRecord=(req,res)=>{
    const catId=req.params.id
    const query=`SELECT * FROM category WHERE id=?`
    conn.query(query,[catId],(err,data)=>{
        if(err)return res.status(500)({message:"Error occured please try again later"});

        if(data.length>0)
        {
            return res.status(200).json(data)
        }
        else{
            return res.render(200).json({result:"Result not found"})
        }
        
    })
}
const update=(req,res)=>{
    const name=req.body.name
    const id=req.params.id
    const query=`UPDATE category SET name=? WHERE id=?`
    conn.query(query,[name,id],(err,data)=>{
        if(!err)return res.status(200).json({message:"Category unpudate successfully"});
        return res.status(403).json({message:"Category failed to update"})
    })
}
const remove=(req,res)=>{
    const id=req.params.id
    const query=`DELETE FROM category WHERE id=?`
    conn.query(query,[id],(err,data)=>{
        if(!err)return res.status(200).json({message:"Category deleted successfully"});
        return res.status(403).json({message:"Category failed to delete"})
    })
}

module.exports={
    read:read,
    create:create,
    oneRecord:oneRecord,
    update:update,
    remove:remove
}
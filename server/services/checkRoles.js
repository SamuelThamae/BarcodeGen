require('dotenv').config();

const checkRole=async (req,res,next)=>{

    const user =res.user
    
    if(user.role==process.env.Admin || user.role==process.env.Moderator)
    {
        
        next()
    }
    else{
        return res.status(400).json("not autharized")
    }
   

   
}

module.exports={checkRole}
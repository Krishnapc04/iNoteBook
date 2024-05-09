var jwt = require('jsonwebtoken');
const JWT_Secret = 'iamrkishnaandiam@good$$'

const fetchuser=(req,res,next)=>{
    // Get user from JWT Token

    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please authenticate using a valid token"})
    }
try{
    const data = jwt.verify(token,JWT_Secret)
    req.user=data.user

    next()
}catch(error){
    res.status(401).send({error: "Please authenticate using a valid token"}) 
}

   

}


module.exports=fetchuser
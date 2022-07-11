const jwt = require('jsonwebtoken');
 
 
function checkToken(req,res,next){
    const token = req.body.token;
   
    // If the token is present
    if(token){
        
  
        // Verify the token using jwt.verify method
        const decode = jwt.verify(token, 'secret');
        if(decode){
            next()
        }
    }else{
  
        res.json({
            login: false,
            data: 'error'
        });
    }
}

module.exports = {checkToken}
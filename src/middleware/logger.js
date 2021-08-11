'use strict'

module.exports=(req,res,next)=>{
    console.log('REQUEST:'  ,'method is:',req.method , ',path is',req.path)
    next();
}
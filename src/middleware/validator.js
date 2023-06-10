const validator=(req,res,next)=>{
    const { name } = req.query;

    if (name){

        req.name=name;
         next();
        } else {
            next(`name not valid`)
        }
    
}
module.exports=validator;
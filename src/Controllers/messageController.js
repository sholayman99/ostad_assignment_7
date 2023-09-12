//functions for message api

exports.readMsg=(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Read Message Api"
     });
   };

   exports.createMsg=(req,res)=>{
     res.status(200).json({
         status:"success",
         data:"Created Message Api"
      });
   };

   exports.updateMsg=(req,res)=>{
     res.status(200).json({
         status:"success",
         data:"Updated Message Api"
      });
   };

   exports.deleteMsg=(req,res)=>{
   res.status(200).json({
         status:"success",
         data:"Deleted Message Api"
      });
   };
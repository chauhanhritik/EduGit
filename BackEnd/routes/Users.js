//for creating and deleting users

// Authentication file
const router = require("express").Router();
const bcrypt = require('bcrypt') //needed to update the password
const User = require("../models/User.js")//since we only need the user model for authentication 



//Update user
//we use id(a no) here and not username to make it more secure and since we could update the username as well but id would remain same
router.put("/:id",async(req,res)=>{    /// api/users/ID, this is the url for this
    if(req.body.userId == req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
      try{
          const updateuser = await User.findByIdAndUpdate(req.params.id,{
              $set: req.body,  //updates everything with matching id to new req body
          },{new:true});//sends the new user after updation on the user end  
          res.status(200).json("updated the user successfully!")
    
      }catch(err){
       res.status(500).json(err);
   }

   }else{
       res.status(401).json("you can update only your account")
   }
})  


//Delete user
router.delete("/:id",async(req,res)=>{    /// api/users/ID, this is the url for this
    if(req.body.userId == req.params.id){
       
      try {
            const user = await User.findById(req.params.id)
        try{
            await User.findByIdAndDelete(req.params.id) //only the user is deleted here and not its content
            res.status(200).json("Account deleted");
      
        }catch(err){
         res.status(500).json(err);
     }
      } catch (err) {
          res.status(404).json("user not found!")  //if the user is not found
      }

   }else{
       res.status(401).json("you can delete only your account")
   }
})


module.exports = router;
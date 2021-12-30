// Authentication file
const router = require("express").Router();
// router.post --> used for creating something
// router.put --> used when we need to update something
// router.delete --> used when we need to delete something
//router.get --> used to fetch data

const user = require("../models/User.js")//since we only need the user model for authentication 
const bcrypt=require("bcrypt");  //to encrypt the passwords


//Register
router.post("/register",async(req,res)=>{  //req--> contains everything sent to the server(like id, password)
   try{
    //    const newUser = new user(req.body); --> takes everything inside req to server even tho we just need a few feilds only. Thus we write
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new user({
        username : req.body.username,
        email : req.body.email,
        password : hashedPassword,
    })

    const user = await newUser.save();
    res.status(200).json(user);
   }catch(err){
       res.status(500).json(err);
   }
})  


//Login
router.post("/login",async(req,res)=>{
    try {
        //First we find the user if the user exists or not
        const user = await user.findone({username: req.body.username}); //"findone" is used as usernames are unique
        !user && res.status(400).json("wrong credentials"); //user doesnt exists

        //but if user exists, check password: 
        const validated = await bcrypt.compare(req.body.password, user.password);
        !user && res.status(400).json("wrong credentials"); //user doesnt exists

        //if both username and password are right:
        const{password, ...others} = user._doc;
        res.status(200).json(others) // ...others gets everything except password since we dont want the user to see the hashed password
        
    } catch (err) {
        res.status(500).json(err);
        
    }
})


module.exports = router;
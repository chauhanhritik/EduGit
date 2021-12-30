const mongoose = require("mongoose")  //mongoose imported right here only

//creating user schema
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilepicture:{  
        type:String,  //because we will be passing the link to profile picture
        default:""  //empty string by default
    },
},
  {timestamps:true}
);

module.export = mongoose.model("User", UserSchema);

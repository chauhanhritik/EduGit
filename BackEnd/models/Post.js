const mongoose = require("mongoose")  //mongoose imported right here only

//creating Post schema
const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        unique: true
    },
    desc:{
        type: String,
        required:true
    },
    photo:{
        type:string,  //to be passed as a link
        required:false
    },
    username:{
        type: String,
        required:true,
    },
    title:{
        type: Array,
        required:false
    },

},
  {timestamps:true}
);

module.export = mongoose.model("Post", PostSchema);

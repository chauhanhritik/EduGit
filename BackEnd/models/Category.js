const mongoose = require("mongoose")  //mongoose imported right here only

//creating Category schema
const CategorySchema = new mongoose.Schema({
    name:{
        type:string,
        required: true
    },

},
  {timestamps:true}   //not needed here
);

module.export = mongoose.model("Category", CategorySchema);

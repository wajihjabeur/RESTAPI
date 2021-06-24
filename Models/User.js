const mongoose = require('mongoose');
const userShema=new mongoose.Schema(
    {
        LastName:{
            type:String,required:true
        },
        FirstName:{
            type:String,required:true
        },
        Age:{
            type:Number
        },

    }
)

module.exports=mongoose.model('User',userShema)
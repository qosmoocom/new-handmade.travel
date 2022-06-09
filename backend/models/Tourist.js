const mongoose = require('mongoose')

const touristSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    name:{
        type:String,
        required:true,
    }
})


module.exports = mongoose.model('Tourist', touristSchema)
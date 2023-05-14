const mongoose = require('mongoose')

const academySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    },
    affiliation:{
        type:String,
        required:true
    },
    university:{
        type:String,
        required:true
    },
    degree:{
        type:String,
        require:true
    },
    position:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    }
})


const academy = new mongoose.model('academies', academySchema)
module.exports = academy
const mongoose = require('mongoose')

const industrySchema = new mongoose.Schema({
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
    companyname:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    chamber:{
        type:String,
        required:true
    }
})
//for student

const industry = new mongoose.model('industries', industrySchema)
module.exports = industry
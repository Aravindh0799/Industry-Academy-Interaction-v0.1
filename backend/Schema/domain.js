const mongoose = require('mongoose');

const domainschema = new mongoose.Schema({
    seq:{
        type:Number,
        required:true
    },
    universityname:{
        type:String,
        required:true
    },
    domain:{
        type:String,
        required:true
    }
})

const domain = mongoose.model('domains', domainschema);
module.exports = domain;

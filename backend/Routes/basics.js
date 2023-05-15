const express = require('express')
const router = express.Router()
const academy = require('../Schema/academy')
const industry = require('../Schema/industry')
const Otp = require('../Schema/otp')
const bcrypt  = require('bcrypt')
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')
const otp = require('otp-generator')
const domains = require('../Schema/domain');
const e = require('express')
const domain = require('../Schema/domain')
const JWT_SECRET = "ciwbuconciwevccwu1229238c/idb871cb91383hc}28vwrgbw8b748{62[]()68cwv";

router.post('/createotp',async(req,res)=>{
    console.log(req.body)
    const{email} = req.body
    const temp = otp.generate(6, {lowerCaseAlphabets:false, upperCaseAlphabets: false, specialChars: false })
    
    const existingotp = await Otp.findOne({email});
        if(existingotp){
            const result1 = await Otp.updateOne(
                {
                    email:email
                        },
                        {
                            $set:{
                                otp:temp
                            }
                        });

                    if(result1){
                            res.json({
                                status: "success",
                                otp:temp
                            })
                        }
                        else{
                            res.json({
                                status:"failure"
                            })
                        }
            }else{                        
                const otpdata  = await new Otp ({
                    email:email,
                    otp:temp
                })
                const result1 = otpdata.save()
                if(result1){
                    res.json({
                        status: "success",
                            otp:temp
                    })
                }
                else{
                    res.json({
                        status:"failure"
                    })
                }
        }               
})


router.post('/mailer',async(req, res)=>{
    const {content,email,subject} = req.body;
    console.log(content)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ashwinkaranthamalai@gmail.com',
            pass: 'erwafncksdyciqvz'
        }
    });
    
    var mailOptions = {
        from: 'ashwinkaranthamalai@gmail.com',
        to: email,
        subject: subject,
        text: content
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            
            console.log('Email sent: ' + info.response);
            res.json({
                status:"success"
            })
        }
    });
})


router.post('/createacademy',async(req,res)=>{
    const{name, email, password, affiliation, university, degree, position, dept} = req.body.user[0];
    const encryptedPassword = await bcrypt.hash(password,10);
    console.log(req.body.user)
    
    const data = await new academy({name, email, password:encryptedPassword, affiliation, university, degree, position, dept} )
    
    const result = data.save();
    if(result){
        res.json({
            status:"success"
        })

    }
    else{
        res.json({
            status:"failure"
        })
    }
    
})

router.delete("/deleteUser",async(req,res)=>{

    const {email}=req.body
    const result=await Otp.deleteOne({email})
    if(result){
        res.json({
            status:"success"
        })
    
    }
    else{
        res.json({
            status:"failure"
        })
    }
})

router.get('/sequence',async(req, res)=>{
    console.log('inside the sequence');
    const result = await domains.find();
    var clen = result.length;
    if(clen){
        res.json({
            status:"success",
            len:clen
        })
    }else{
        res.json({
            len:0 
        })
    }
})

router.post('/createdoamin',async(req, res)=>{
    console.log('from the create domain api');
    const result = new domains(req.body);
    if(result){
        res.json({
            status:'success',
            message:"sucessfully inserted"
        })
    }else{
        res.json({
            status:'failure',
            error :'error occured'
        })
    }
})                                                                                                                                                                          
router.get('fetchall', async(req, res)=>{
    console.log('from the fetchal api');
    const data = await domains.find();
    if(data){
        res.json({
            status:"success",
            data:data
        })
    }
    else{
        res.json({
            status:"failure",
            error:"error occured"
        })
    }
})

router.patch('/edit', async(req, res)=>{
    console.log('from the edit api',req.body.universityname, req.body.domain);
    const result = await domains.findOne(
        {
            seq:seq
        },
        {
            $set:{
                universityname:universityname,
                domain:domain
            }
        }
    )

})

router.post('deletedomain',async(req, res)=>{
    console.log('from the delete domain api');
    const result  = await domain.deleteOne({domain:domain});
    if(result){
        res.json({
            status:"success",
            message:"succesfully deletd"
        })
    }
    else{
        res.json({
            status:'failure',
            error:'error occured'
        })
    }

})

module.exports=router                            
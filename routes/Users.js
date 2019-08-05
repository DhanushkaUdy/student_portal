const express = require('express');

//make application end point
const users = express.Router();

//to share resources
const cors = require('cors');

//to secure purpose
const jwt = require('jsonwebtoken');

//to password hash
const bcrypt = require('bcrypt');

// import models from models
const User = require('../models/User');

users.use(cors());
process.env.SECRET_KEY = 'secret';

users.post('/register', (req, res) => {
    const today = new Date();
    const userData = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        password : req.body.password,
        created : today
    };

    User.findOne({
        email : req.body.email
    })
        .then(user => {
            if(!user){
                bcrypt.hash(req.body.password, '10',(err, hash) => {
                    userData.password = hash;
                    User.create(userData)
                        .then(user => {
                            res.json({status: user.email + "register"})
                        })
                        .catch( err => {
                            res.send("error" + err);
                        })
                    })
            }else{
                res.json({error: "user already registered"});
            }
        })
        .catch( err => {
            res.send("error" + err);
        })
});

users.post('/login', (req, res)=>{
    User.findOne({
        email : req.body.email
    })
        .then( user => {
            if(user){
                if(bcrypt.compareSync(req.body.password, user.password)){
                    const payload = {
                        _id : user._id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email
                    };
                    let toke = jwt.sign(payload, process.env.SECRET_KEY,{
                        expiresIn: 1440
                    });
                    res.send(token)
                }else{
                    res.json({error: "user doesnt exist in the system"});
                }
            }else{
                res.json({error : "user doesnt exist in the system"});
            }
        })
        .catch( err => {
            res.send("error" + err);
        })
});





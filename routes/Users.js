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

            }
        })
});





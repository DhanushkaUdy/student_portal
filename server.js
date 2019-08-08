const express = require('express'); // Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications.

const fileUpload = require('express-fileupload');

const bodyParser = require('body-parser'); //Using body parser allows you to access req.body from within your routes
const mongoose = require('mongoose'); //Object Mapping between Node and MongoDB managed via
const path = require('path'); //The Path module provides a way of working with directories and file paths.
const cors = require('cors'); //Cross-Origin Resources Sharing (CORS) is a security protocol implemented by browsers. Cross Origin Resource Sharing CORS in Node.

const assignmentRoutes = require('./routes/Assignment');

var app = express();

const post = process.env.PORT || 5000;

app.use(bodyParser.json);
app.use(cors());

app.use(
    bodyParser.urlencoded({
        extended : false
    })
);

app.use('/assignments', assignmentRoutes);

// file upload initialize
app.use(fileUpload());
app.post('/upload', (req, res) =>{
    if(res.file === null){
        res.json({msg: "no file to upload"});
    }
    const file = req.files.file;
    file.mv (`${directory_name}/client/public/upload/${file.name}`, err => {
        if(err){
            console.error(err);
            res.status(500).send(err);
        }
        res.json({fileName: file.name, filePath : `/upload/${file.name}`});
    })
});

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const mongoURI = 'mongodb://localhost:27017/Students';

// connect mongoDB
mongoose
    .connect(mongoURI, {useNewUrlParser: true})
    .then(()=> {
        console.log("MongoDB Connected");
    })
    .catch(err => {
        console.log( "error" + err);
    });


var Users = require('./routes/Users');
app.use('./users', Users);

//server Listening
app.listen(port, ()=>{
    console.log("server is listening on port" + port);
});

